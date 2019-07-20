class UINotifyCommand extends puremvc.SimpleCommand {
    public static NAME: string = "UINotifyCommand";

    public execute(notification: puremvc.INotification): void {
        console.log("UINotifyCommand.execute:");
    }
}