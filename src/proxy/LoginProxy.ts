class LoginProxy extends Proxy {
    private loginListener_: MessageListener;
    private loginStateNotifyListener_: MessageListener;
    private static readonly Relogin: number = 1;
    private static readonly Reconnect: number = 2;
    private static readonly Black: number = 3;
    private static readonly ServerStopped: number = 4;

    constructor() {
        super();
    }

    public onRegister(): void {
        this.loginListener_ = new MessageListener(301, "", this.onLoginResponse);
        SocketServer.getInstance().msgHandler.addMsgListener(this.loginListener_);
        this.loginStateNotifyListener_ = new MessageListener(317, "", this.onLoginStateNotify);
        SocketServer.getInstance().msgHandler.addMsgListener(this.loginStateNotifyListener_);
    }

    public onRemove(): void {
        SocketServer.getInstance().msgHandler.removeMsgListener(this.loginListener_);
        SocketServer.getInstance().msgHandler.removeMsgListener(this.loginStateNotifyListener_);
    }

    public requestLogin(): void {
        const playerProxy: PlayerProxy = <PlayerProxy>(this.facade.retrieveProxy(PlayerProxy.NAME));
        const msgDecoder: string = "";
        const msgModel: any = new MessageProtoBufModel();

        if (h5sdk.enabled) {

        }
        else if (wxsdk.enabled && !wxsdk.isGuestLogin) {
            msgModel.openId = playerProxy.openId;
            msgModel.token = playerProxy.accessToken;
            msgModel.payToken = "";
            msgModel.accountType = 2;
            msgModel.platform = 4;
        }
        else if (wxsdk.enabled && wxsdk.isGuestLogin) {
            msgModel.openId = URLParams.getInstance().uin;
            msgModel.payToken = "";
        }

        msgModel.version = ConfigManager.getInstance().versionInfo.getVersionString();
        msgModel.software = "";
        msgModel.hardware = "";
        msgModel.telecomOper = "";
        msgModel.network = "";
        msgModel.channel = 0;
        msgModel.pf = "";

        const msg: any = new HLMsg(301, msgModel, msgDecoder);
        SocketServer.getInstance().send(msg);
    }

    public onReloginConfirm(data: any): void {

    }

    private onLoginResponse(data: any): void {
        if (data.errorcode !== 0) {
            HeartBeatSystem.getInstance().stopHeartBeat();
            SocketServer.getInstance().close();
            ApplicationFacade.getInstance().sendNotification(ApplicationFacade.CHANGE_LOADING, "...", UIConfig.HIDE_LOADING);
            return;
        }

        const playerProxy: PlayerProxy = <PlayerProxy>(this.facade.retrieveProxy(PlayerProxy.NAME));
        playerProxy.playerVo.setData(data);
        this.facade.sendNotification(LoginResultCommand.NAME, true);
        ApplicationFacade.getInstance().sendNotification("onGameAccessStart");
        HeartBeatSystem.getInstance().startHeartBeat();
    }

    private onLoginStateNotify(data: any): void {
        switch (data.state) {
            case LoginProxy.Relogin: {
                console.log("LoginProxy.onLoginStateNotify: UserState Relogin");
                HeartBeatSystem.getInstance().stopHeartBeat();
                SocketServer.getInstance().close();
                
                if (BattleManager.getInstance().isInGame) {
                    SocketServer.getInstanceByBattle().close();
                }

                ApplicationFacade.getInstance().sendNotification(ApplicationFacade.CHANGE_LOADING, "...", UIConfig.HIDE_LOADING);
            }
            break;
            case LoginProxy.Reconnect: {
                console.log("LoginProxy.onLoginStateNotify: UserState Reconnect");
                SocketServer.getInstance().close();
                this.sendNotification(ReconnectCommand.NAME);
            }
            break;
            case LoginProxy.Black: {
                console.log("LoginProxy.onLoginStateNotify: UserState Black");
                HeartBeatSystem.getInstance().stopHeartBeat();
                SocketServer.getInstance().close();

                if (BattleManager.getInstance().isInGame) {
                    SocketServer.getInstanceByBattle().close();
                }

                ApplicationFacade.getInstance().sendNotification(ApplicationFacade.CHANGE_LOADING, "...", UIConfig.HIDE_LOADING);
            }
            break;
            case LoginProxy.ServerStopped: {
                console.log("LoginProxy.onLoginStateNotify: UserState ServerStopped");
                HeartBeatSystem.getInstance().stopHeartBeat();
                SocketServer.getInstance().close();

                if (BattleManager.getInstance().isInGame) {
                    return;
                }

                ApplicationFacade.getInstance().sendNotification(ApplicationFacade.CHANGE_LOADING, "...", UIConfig.HIDE_LOADING);
            }
            break;
        }
    }
}