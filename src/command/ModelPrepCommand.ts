class ModelPrepCommand extends SimpleCommand {
    constructor() {
        super();
    }

    public execute(e: any): void {
        this.facade.registerProxy(new TimeProxy());
        this.facade.registerProxy(new PlayerProxy());
        this.facade.registerProxy(new EnterGameProxy());
        this.facade.registerProxy(new MatchProxy());
        this.facade.registerProxy(new SettingsProxy());
    }
}