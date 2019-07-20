class GameOverCommand extends puremvc.SimpleCommand {
    public execute(notification: puremvc.INotification): void {
        console.log("GameOverCommand.execute");
    }
}