class PTLoginReqCommand extends puremvc.SimpleCommand {
    public static readonly NAME: string = "PTLoginReqCommand";

    constructor() {
        super();

        this.initializeNotifier(PTLoginReqCommand.NAME);
    }
}