class InitPlayerInfoReqCommand extends puremvc.SimpleCommand {
    public static readonly NAME: string = "InitPlayerInfoReqCommand";

    constructor() {
        super();

        this.initializeNotifier(InitPlayerInfoReqCommand.NAME);
    }
}