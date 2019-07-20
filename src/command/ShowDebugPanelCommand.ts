class ShowDebugPanelCommand extends puremvc.SimpleCommand {
    public static NAME: string = "ShowDebugPanelCommand";

    public execute(notification: puremvc.INotification): void {
        console.log("ShowDebugPanelCommand.execute:");
    }
}