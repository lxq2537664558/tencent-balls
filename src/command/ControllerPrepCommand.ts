class ControllerPrepCommand extends puremvc.SimpleCommand {
    public execute(notification: puremvc.INotification): void {
        console.log("ControllerPrepCommand.execute:");
        new GameCommand().register();
        new ServiceCommand().register();
        new H5SDKCommand().register();
    }
}