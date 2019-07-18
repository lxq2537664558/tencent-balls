class DebugCommand extends SimpleCommand {
    public static readonly NAME: string = "DebugCommand";

    public execute(notification: CustomNotification): void {
        console.log("DebugCommand.execute:");
    }
}