class StartupCommand extends puremvc.MacroCommand {
    constructor() {
        super();
    }

    public initializeMacroCommand(): void {
        console.log("StartupCommand.initializeMacroCommand:");
        ConfigManager.getInstance().init();
        HeartBeatSystem.getInstance().init();
        this.addSubCommand(ControllerPrepCommand);
        this.addSubCommand(ModelPrepCommand);
        this.addSubCommand(ViewPrepCommand);
    }
}