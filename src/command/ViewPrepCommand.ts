class ViewPrepCommand extends puremvc.SimpleCommand {
    constructor() {
        super();
    }

    public execute(notification: puremvc.INotification): void {
        const main: any = <Main>(notification.getBody());
        const gameLayer: GameLayer = new GameLayer();
        gameLayer.name = "GameLayer";
        main.addChild(gameLayer);
        BattleManager.getInstance().gameLayer = gameLayer;
        const uiLayer: UILayer = new UILayer();
        uiLayer.width = main.width;
        uiLayer.height = main.height;
        uiLayer.name = "UILayer";
        main.addChild(uiLayer);
        uiLayer.init();
        this.facade().registerMediator(new UIMediator(uiLayer));
    }
}