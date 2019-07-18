class ReconnectCommand extends SimpleCommand {
    public static NAME: string = "ReconnectCommand";

    public execute(notification: CustomNotification): void {
        console.log("ReconnectCommand.execute:");
    }
}