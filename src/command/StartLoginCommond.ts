class StartLoginCommond extends puremvc.SimpleCommand {
    public execute(notification: puremvc.INotification): void {
        this.facade().sendNotification(ApplicationFacade.ChangeScene, SceneName.Login, UIConfig.AddScene);
    }
}