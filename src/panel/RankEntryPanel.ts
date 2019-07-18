class RankEntryPanel extends PanelBase {
    public static readonly className: string = "RankEntryPanel";

    private rankList_: eui.List;

    constructor() {
        super(RankEntryPanel.className);

        this.addEventListener(eui.UIEvent.COMPLETE, this.onUILoadCompleted, this);
        this.skinName = "";
        this.addCustomEventListener(this, egret.Event.ADDED_TO_STAGE, this.onAddToSage, this);
    }

    public refresh(): void {
        const rankProxy: RankProxy = <RankProxy>(ApplicationFacade.getInstance().retrieveProxy(RankProxy.NAME));
        const arrayCollection: eui.ArrayCollection = new eui.ArrayCollection(rankProxy.getHallFriendData());
        this.rankList_.itemRenderer = null;
        this.rankList_.dataProvider = arrayCollection;
        this.rankList_.height = 85 * arrayCollection.length + 10 * (arrayCollection.length - 1);
    }

    public leavePanel(): void {
        super.leavePanel();
    }

    private onUILoadCompleted(e: eui.UIEvent): void {
        const mediator: RankEntryPanelMediator = new RankEntryPanelMediator(this.panelName, this);
        this.enterPanel(mediator);
    }

    private onAddToStage(e: egret.Event): void {
        this.removeEventListener(egret.Event.ADDED_TO_STAGE, this.onAddToSage, this);
        this.refresh();
    }
}