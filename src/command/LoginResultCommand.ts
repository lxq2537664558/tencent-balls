class LoginResultCommand extends SimpleCommand {
    public static NAME: string = "LoginResultCommand";

    public execute(notification: CustomNotification): void {
        console.log("LoginResultCommand.execute:");

        if (notification.params) {
            this.sendNotification(ApplicationFacade.CHANGE_LOADING, "", UIConfig.HIDE_LOADING);

            if (BattleManager.getInstance().isInGame && BattleService.getInstance().getTimeLeft() > Battle.RetainLeftTime) {
                return;
            }

            const playerProxy: PlayerProxy = <PlayerProxy>(this.facade.retrieveProxy(PlayerProxy.NAME));
            // 请求各种玩家数据
            MainAssetLoader.getInstance().loadAll();
        }
    }
}