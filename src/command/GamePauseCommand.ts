class GamePauseCommand extends SimpleCommand {
    public static pause: boolean = false;

    public execute(notification: CustomNotification): void {
        const params: any = notification.params;
        console.log("GamePauseCommand.execute: ", params);

        if (params) {
            const settingsProxy: SettingsProxy = <SettingsProxy>(this.facade.retrieveProxy(SettingsProxy.NAME));

            if (settingsProxy.bmgEnabled) {
                GamePauseCommand.pause = false;
                this.sendHeartBeat(1);
            }
            else {
                GamePauseCommand.pause = true;
                this.sendHeartBeat(0);
            }
        }
    }

    private sendHeartBeat(state: number): void {

    }
}