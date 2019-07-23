class GameCommand extends puremvc.SimpleCommand {
    public static readonly NAME: string = "GameCommand";
    public static readonly StartGame: string = "StartGame";
    public static readonly HallEnterRoom: string = "HallEnterRoom";
    public static readonly GameFinish: string = "GameFinish";
    public static readonly RestartGame: string = "RestartGame";
    public static readonly UpdateScore: string = "UpdateScore";
    public static readonly GameOver: string = "GameOver";
    public static readonly PlayGame: string = "PlayGame";
    public static readonly PauseGame: string = "PauseGame";
    public static readonly ResumeGame: string = "ResumeGame";
    public static readonly SignDataUpdate: string = "SignDataUpdate";

    public register(): void {
        this.facade().registerCommand(GameCommand.StartGame, StartNewGameCommand);
        this.facade().registerCommand(GameCommand.HallEnterRoom, HallEnterRoomCommand);
        this.facade().registerCommand(GameCommand.GameOver, GameOverCommand);
        this.facade().registerCommand(GameCommand.PauseGame, GamePauseCommand);
        this.facade().registerCommand(GameCommand.GameFinish, GameFinishCommand);
    }

    public execute(notification: puremvc.INotification): void {
    }
}