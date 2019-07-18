class ShareCommand extends SimpleCommand {
    public static NAME: string = "ShareCommand";

    public execute(notification: CustomNotification): void {
        console.log("ShareCommand.execute:");
    }
}