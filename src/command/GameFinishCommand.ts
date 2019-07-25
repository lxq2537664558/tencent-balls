class GameFinishCommand extends puremvc.SimpleCommand {
    public static readonly NAME: string = "GameFinishCommand";

    constructor() {
        super();

        this.initializeNotifier(GameFinishCommand.NAME);
    }
}