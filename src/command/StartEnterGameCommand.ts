class StartEnterGameCommand extends SimpleCommand {
    public static NAME: string = "StartEnterGameCommand";

    public execute(notification: CustomNotification): void {
        console.log("StartEnterGameCommand.execute:");
        this.sendNotification(ApplicationFacade.CHANGE_LOADING, "", UIConfig.HIDE_LOADING);
        this.sendNotification(ApplicationFacade.CHANGE_SCENE, SceneName.MainScene, UIConfig.ADD_SCENE);
    }
}