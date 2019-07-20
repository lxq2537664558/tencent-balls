class DebugCommand extends puremvc.SimpleCommand {
    public static readonly NAME: string = "DebugCommand";

    public execute(notification: puremvc.INotification): void {
        console.log("DebugCommand.execute:");
    }
}