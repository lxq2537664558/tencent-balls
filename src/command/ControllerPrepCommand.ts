class ControllerPrepCommand extends puremvc.SimpleCommand {
    constructor() {
        super();
    }

    public execute(): void {
        console.log("ControllerPrepCommand.execute:");
        new GameCommand().register();
        new ServiceCommand().register();
        new CommonCommand().register();
        new H5SDKCommand().register();
    }
}