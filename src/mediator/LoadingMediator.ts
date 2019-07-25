class LoadingMediator extends puremvc.Mediator {
    public static readonly NAME: string = "LoadingMediator";

    constructor(scene: SceneBase) {
        super(LoadingMediator.NAME, scene);

        console.log("LoadingMediator.constructor:");
    }

    public listNotificationInterests(): Array<string> {
        return [];
    }

    public handleNotification(notification: puremvc.Notification): void {
    }

    public onRegeister(): void {
    }

    public onRemove(): void {
    }

    get view() {
        return this.getViewComponent();
    }
}