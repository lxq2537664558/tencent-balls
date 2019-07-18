class StartupCommand extends MacroCommand {
    constructor() {
        super();
    }

    protected initializeMacroCommand(): void {
        ConfigManager.getInstance().init();
        Language.getInstance().init();
        HeartBeatSystem.getInstance().init();
        this.addSubCommand(ControllerPrepCommand);
        this.addSubCommand(ModelPrepCommand);
        this.addSubCommand(ViewPrepCommand);
        console.log("StartupCommand.initializeMacroCommand");
    }
}