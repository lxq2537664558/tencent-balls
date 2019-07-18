class GameOverCommand extends SimpleCommand {
    public execute(notification: CustomNotification): void {
        console.log("GameOverCommand.execute");
    }
}