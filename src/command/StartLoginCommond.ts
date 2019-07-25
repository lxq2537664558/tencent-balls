class StartLoginCommond extends puremvc.SimpleCommand {
    public static readonly NAME: string = "StartLoginCommond";

    constructor() {
        super();

        this.initializeNotifier(StartLoginCommond.NAME);
    }

    public execute(notification: puremvc.INotification): void {
        this.facade().sendNotification(ApplicationFacade.ChangeScene, SceneName.Login, UIConfig.AddScene);
    }
}