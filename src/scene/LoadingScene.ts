class LoadingScene extends SceneBase {
    public static readonly NAME: string = "LoadingScene";

    constructor() {
        super(LoadingScene.NAME);

        this.addEventListener(eui.UIEvent.COMPLETE, this.onUILoadCompleted, this);
        this.skinName = "resource/custom_skins/LoadingSkin.exml";
    }

    public enterScene(): void {
        super.enterScene();
    }

    public leaveScene(): void {
        ApplicationFacade.getInstance().removeMediator(LoadingMediator.NAME);
        super.leaveScene();
    }

    private onUILoadCompleted(e: eui.UIEvent): void {
        this.removeEventListener(eui.UIEvent.COMPLETE, this.onUILoadCompleted, this);
        ApplicationFacade.getInstance().registerMediator(new LoadingMediator(this));
    }
}