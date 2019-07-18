class SceneBase extends eui.Component {
    private customEvent_: Array<any>;

    constructor(name: string) {
        super();

        this.customEvent_ = [];
        this.name = name;
    }

    public enterScene(): void {

    }

    public leaveScene(): void {

    }

    public containPanel(name: string): boolean {
        return false;
    }

    public isTopPanel(name): boolean {
        return false;
    }

    public addPanel(panel: any): void {

    }

    public removePanel(panel: any): void {

    }

    public removePanelByName(name: string): void {

    }

    public getPanelsNum(): number {
        return 0;
    }

    protected addCustomEventListener(ui: any, type: string, listener: Function, thisObject: any): void {
        ui.addEventListener(type, listener, thisObject);
        const data = {
            ui,
            type,
            listener,
            thisObject,
        };

        this.customEvent_.push(data);
    }
}