class ServerErrorCommand extends SimpleCommand {
    public static NAME: string = "ServerErrorCommand";

    public execute(notification: CustomNotification): void {
        console.log("ServerErrorCommand.execute:");
    }
}