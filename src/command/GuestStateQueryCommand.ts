class GuestStateQueryCommand extends puremvc.SimpleCommand {
    public static readonly NAME: string = "GuestStateQueryCommand";

    constructor() {
        super();

        this.initializeNotifier(GuestStateQueryCommand.NAME);
    }
}