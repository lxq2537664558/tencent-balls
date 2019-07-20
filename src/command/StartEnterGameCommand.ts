class StartEnterGameCommand extends puremvc.SimpleCommand {
    public static NAME: string = "StartEnterGameCommand";

    public execute(notification: puremvc.INotification): void {
        console.log("StartEnterGameCommand.execute:");
        this.sendNotification(ApplicationFacade.CHANGE_LOADING, "", UIConfig.HIDE_LOADING);
        this.sendNotification(ApplicationFacade.CHANGE_SCENE, SceneName.MainScene, UIConfig.ADD_SCENE);
    }
}