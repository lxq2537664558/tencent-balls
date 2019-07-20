class LoadingMediator extends puremvc.Mediator {
    public static readonly NAME: string = "LoadingMediator";

    constructor(scene: SceneBase) {
        super(LoadingMediator.NAME, scene);
    }

    public onRegister(): void {

    }

    public onRemove(): void {

    }

    public listNotificationInterests(): Array<string> {
        return [];
    }

    public handleNotification(notification: puremvc.Notification): void {
    }
}