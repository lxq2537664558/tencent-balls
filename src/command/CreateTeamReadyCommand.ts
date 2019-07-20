class CreateTeamReadyCommand extends puremvc.SimpleCommand {
    public static NAME: string = "CreateTeamReadyCommand";

    public execute(notification: puremvc.INotification): void {
        console.log("CreateTeamReadyCommand.execute:");
    }
}