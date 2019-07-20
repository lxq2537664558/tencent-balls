class MacroCommand extends Notifier {
    private subCommands_: Array<any>;

    constructor() {
        super();
        
        this.subCommands_ = new Array<any>();
        this.initializeMacroCommand();
    }

    public addSubCommand(command: any): void {
        this.subCommands_.push(command);
    }

    public execute(notification: puremvc.INotification): void {
        for (let array: any = this.subCommands_.slice(0), i = 0, len = array.length; i < len; ++i) {
            const Ctor = array[i];

            if (Ctor && Ctor.prototype.constructor) {
                new Ctor().exectue(notification);
            }
        }

        this.subCommands_.splice(0);
    }

    protected initializeMacroCommand(): void {
    }
}