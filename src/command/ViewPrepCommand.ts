class ViewPrepCommand extends puremvc.SimpleCommand {
    public static readonly NAME: string = "ViewPrepCommand";

    constructor() {
        super();
    }

    public execute(notification: puremvc.INotification): void {
        const body: any = notification.getBody();
        const gameLayer: GameLayer = new GameLayer();
        const uiLayer: UILayer = new UILayer();
        uiLayer.width = body.width;
        uiLayer.height = body.height;
        body.addChild(uiLayer);
        uiLayer.init();
        this.facade().registerMediator(new UIMediator(uiLayer));
    }
}