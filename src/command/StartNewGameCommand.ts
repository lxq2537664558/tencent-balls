class StartNewGameCommand extends puremvc.SimpleCommand {
    public static readonly NAME: string = "StartNewGameCommand";

    constructor() {
        super();

        this.initializeNotifier(StartNewGameCommand.NAME);
    }

    public execute(notification: puremvc.INotification): void {
        
    }
}