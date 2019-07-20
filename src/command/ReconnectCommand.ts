class ReconnectCommand extends puremvc.SimpleCommand {
    public static NAME: string = "ReconnectCommand";

    public execute(notification: puremvc.INotification): void {
        console.log("ReconnectCommand.execute:");
    }
}