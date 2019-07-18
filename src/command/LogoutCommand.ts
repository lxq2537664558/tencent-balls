class LogoutCommand extends SimpleCommand {
    public static NAME: string = "LogoutCommand";

    public execute(notification: CustomNotification): void {
        console.log("LogoutCommand.execute:");
    }
}