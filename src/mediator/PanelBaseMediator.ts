class PanelBaseMediator extends Mediator {
    protected customEvents_: Array<any>;
    private panel_: PanelBase;

    constructor(panelName: string, panel: PanelBase) {
        super(panelName, panel);

        this.customEvents_ = [];
        this.panel_ = panel;
    }

    public onRegister(): void {
    }

    public onRemove(): void {
        for (let i = 0, len = this.customEvents_.length; i < len; ++i) {
            const panel: PanelBase = this.customEvents_[i].ui;
            const eventName: string = this.customEvents_[i].eventName;
            const listener: any = this.customEvents_[i].listener;
            const thisObject: any = this.customEvents_[i].thisObject;
            panel.removeEventListener(eventName, listener, thisObject);
        }

        this.panel_ = null;
        this.customEvents_.length = 0;
        this.customEvents_ = [];
    }

    public listNotificationInterests(): Array<any> {
        return [];
    }

    public handleNotification(notification: CustomNotification): void {

    }

    public addCustomEventListener(panel: PanelBase, eventName: string, listener: Function, thisObject: any): void {
        panel.addEventListener(eventName, listener, thisObject);
        this.customEvents_.push({
            ui: panel,
            eventName,
            listener,
            thisObject,
        });
    }
}