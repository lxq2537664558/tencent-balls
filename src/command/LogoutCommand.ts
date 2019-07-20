class LogoutCommand extends puremvc.SimpleCommand {
    public static NAME: string = "LogoutCommand";

    public execute(notification: puremvc.INotification): void {
        console.log("LogoutCommand.execute:");
    }
}