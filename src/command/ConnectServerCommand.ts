class ConnectServerCommand extends puremvc.SimpleCommand {
    public static readonly NAME: string = "ConnectServerCommand";

    constructor() {
        super();

        this.initializeNotifier(ConnectServerCommand.NAME);
    }
}