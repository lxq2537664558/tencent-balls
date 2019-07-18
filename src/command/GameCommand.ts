class GameCommand extends SimpleCommand {
    public static NAME: string = "GameCommand";
    public static START_GAME: string = "startGame";
    public static HALL_ENTER_ROOM: string = "hallEnterRoom";
    public static FINISH_GAME: string = "finishGame";
    public static RESTART_GAME: string = "restartGame";
    public static UPDATE_SCORE: string = "updateScore";
    public static GAME_OVER: string = "gameOver";
    public static PLAY_GAME: string = "playGame";
    public static PAUSE_GAME: string = "pauseGame";
    public static RESUME_GAME: string = "resumeGame";
    public static SIGN_DATA_UPDATE: string = "signDataUpdate";

    constructor() {
        super();
    }

    public register(): void {
        this.facade.registerCommand(GameCommand.START_GAME, StartNewGameCommand);
        this.facade.registerCommand(GameCommand.HALL_ENTER_ROOM, HallEnterRoomCommand);
        this.facade.registerCommand(GameCommand.GAME_OVER, GameOverCommand);
        this.facade.registerCommand(GameCommand.PAUSE_GAME, GamePauseCommand);
        this.facade.registerCommand(GameCommand.FINISH_GAME, GameFinishCommand);
        this.facade.registerCommand(GameCommand.PLAY_GAME, this);
        this.facade.registerCommand(GameCommand.UPDATE_SCORE, this);
        this.facade.registerCommand(GameCommand.RESTART_GAME, this);
        this.facade.registerCommand(GameCommand.RESUME_GAME, this);
        this.facade.registerCommand(GameCommand.SIGN_DATA_UPDATE, this);
    }

    public execute(notification: CustomNotification): void {

    }
}