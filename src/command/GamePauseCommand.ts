class GamePauseCommand extends puremvc.SimpleCommand {
    public static readonly NAME: string = "GamePauseCommand";

    constructor() {
        super();

        this.initializeNotifier(GamePauseCommand.NAME);
    }
}