class GameOverCommand extends puremvc.SimpleCommand {
    public static readonly NAME: string = "GameOverCommand";

    constructor() {
        super();

        this.initializeNotifier(GameOverCommand.NAME);
    }
}