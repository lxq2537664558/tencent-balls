class HallEnterRoomCommand extends puremvc.SimpleCommand {
    public static RECONNECT: string = "RECONNECT";
    public static CONNECT: string = "CONNECT";
    public static CONNECTED: string = "CONNECTED";

    constructor() {
        super();
    }

    public execute(notification: puremvc.INotification): void {
        switch (notification.getType()) {
            case HallEnterRoomCommand.RECONNECT: {

            }
            break;
            case HallEnterRoomCommand.CONNECT: {

            }
            break;
            case HallEnterRoomCommand.CONNECTED: {

            }
            break;
            default: {

            }
            break;
        }
    }

    private beforeEnterGame(): void {
        this.saveTeamInfo();
    }

    private saveTeamInfo(): void {
    }
}