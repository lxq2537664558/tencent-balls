class UINotifyCommand extends SimpleCommand {
    public static NAME: string = "UINotifyCommand";

    public execute(notification: CustomNotification): void {
        console.log("UINotifyCommand.execute:");
    }
}