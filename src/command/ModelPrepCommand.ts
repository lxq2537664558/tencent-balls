class ModelPrepCommand extends puremvc.SimpleCommand {
    public static readonly NAME: string = "ModelPrepCommand";

    constructor() {
        super();
    }

    public execute(notification: puremvc.INotification): void {
        console.log("ModelPrepCommand.execute:");
        this.facade().registerProxy(new PlayerProxy());
    }
}