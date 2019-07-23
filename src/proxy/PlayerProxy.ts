class PlayerProxy extends puremvc.Proxy {
    public static readonly NAME: string = "PlayerProxy";

    private propertyChangeHandler_: Dictionary;
    private propertyUpdateListener_: MessageListener;

    constructor() {
        super(PlayerProxy.NAME);

        this.propertyChangeHandler = new Dictionary();
        this.setData(new PlayerVo());
        this.initHandlers();
    }

    public onRegister(): void {
        this.propertyUpdateListener_ = new MessageListener(306, "CmdUser_PropertyUpdate_SC", this.onPropertyUpdate);
        const msgHandler: ReceiveMessageHandler = <ReceiveMessageHandler>(SocketServer.getHallInstance().msgHandler);
        msgHandler.addMsgListener(this.propertyUpdateListener_);
    }

    public onRemove(): void {
        const msgHandler: ReceiveMessageHandler = <ReceiveMessageHandler>(SocketServer.getHallInstance().msgHandler);
        msgHandler.removeMsgListener(this.propertyUpdateListener_);
    }

    private initHandlers(): void {
        const self = this;

        this.propertyChangeHandler.add(PlayerProperty.CharId, (charId: string) => {
            this.playerVo.charId = charId;
        })
    }

    private onPropertyUpdate(data: any): void {
        if (data.errorCode !== 0) {
            console.error("PlayerProxy.onPropertyUpdate: ", "error code " + data.errorCode);
            return;
        }
    }

    set propertyChangeHandler(value) {
        this.propertyChangeHandler_ = value;
    }

    get propertyChangeHandler() {
        return this.propertyChangeHandler_;
    }

    get playerVo() {
        return this.getData();
    }
}