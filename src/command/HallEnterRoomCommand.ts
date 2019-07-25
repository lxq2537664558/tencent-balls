class HallEnterRoomCommand extends puremvc.SimpleCommand {
    public static readonly NAME: string = "HallEnterRoomCommand";

    constructor() {
        super();

        this.initializeNotifier(HallEnterRoomCommand.NAME);
    }
}