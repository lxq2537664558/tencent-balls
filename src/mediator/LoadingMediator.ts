class LoadingMediator extends Mediator {
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

    public handleNotification(notification: CustomNotification): void {
    }
}