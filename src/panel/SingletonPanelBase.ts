class SingletonPanelBase extends PanelBase {
    public static readonly NAME: string = "SingletonPanelBase";
    public static readonly RemoveSingletonPanel: string = "RemoveSingletonPanel";
    public static readonly AddSingletonPanel: string = "AddSingletonPanel";

    constructor(isRegisterEvent?: boolean) {
        super(SingletonPanelBase.NAME, isRegisterEvent);
    }

    public leavePanel(): void {
        super.leavePanel();
        ApplicationFacade.getInstance().sendNotification(SingletonPanelBase.RemoveSingletonPanel, this.panelName);
    }
}