class ShowDebugPanelCommand extends SimpleCommand {
    public static NAME: string = "ShowDebugPanelCommand";

    public execute(notification: CustomNotification): void {
        console.log("ShowDebugPanelCommand.execute:");
    }
}