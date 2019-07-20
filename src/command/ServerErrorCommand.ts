class ServerErrorCommand extends puremvc.SimpleCommand {
    public static NAME: string = "ServerErrorCommand";

    public execute(notification: puremvc.INotification): void {
        console.log("ServerErrorCommand.execute:");
    }
}