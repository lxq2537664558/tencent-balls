class SocketServerEventCommand extends puremvc.SimpleCommand {
    public static readonly NAME: string = "SocketServerEventCommand";

    constructor() {
        super();
        
        this.initializeNotifier(SocketServerEventCommand.NAME);
    }
}