class ShareCommand extends puremvc.SimpleCommand {
    public static NAME: string = "ShareCommand";

    public execute(notification: puremvc.INotification): void {
        console.log("ShareCommand.execute:");
    }
}