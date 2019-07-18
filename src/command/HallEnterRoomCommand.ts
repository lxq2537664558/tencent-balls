class HallEnterRoomCommand extends SimpleCommand {
    public static RECONNECT: string = "RECONNECT";
    public static CONNECT: string = "CONNECT";
    public static CONNECTED: string = "CONNECTED";

    constructor() {
        super();
    }

    public execute(notification: CustomNotification): void {
        switch (notification.type) {
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