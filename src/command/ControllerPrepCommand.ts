class ControllerPrepCommand extends puremvc.SimpleCommand {
    public static readonly NAME: string = "ControllerPrepCommand";

    constructor() {
        super();

        this.initializeNotifier(ControllerPrepCommand.NAME);
    }

    public execute(notification: puremvc.INotification): void {
        console.log("ControllerPrepCommand.execute:");
        new GameCommand().register();
        new ServiceCommand().register();
        new H5SDKCommand().register();
    }
}