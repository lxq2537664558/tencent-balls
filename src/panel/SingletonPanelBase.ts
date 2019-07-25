class SingletonPanelBase extends PanelBase {
    public static readonly AddSingletonPanel: string = "AddSingletonPanel";
    public static readonly RemoveSingletonPanel: string = "RemoveSingletonPanel";

    constructor(panelName: string) {
        super(panelName);
    }

    public leavePanel(): void {
        super.leavePanel();
        ApplicationFacade.getInstance().sendNotification(SingletonPanelBase.RemoveSingletonPanel, this.panelName);
    }
}