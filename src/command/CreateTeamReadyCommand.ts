class CreateTeamReadyCommand extends SimpleCommand {
    public static NAME: string = "CreateTeamReadyCommand";

    public execute(notification: CustomNotification): void {
        console.log("CreateTeamReadyCommand.execute:");
    }
}