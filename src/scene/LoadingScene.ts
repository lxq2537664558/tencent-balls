class LoadingScene extends SceneBase {
    public static readonly NAME: string = "LoadingScene";

    constructor() {
        super(LoadingScene.NAME);

        this.addEventListener(eui.UIEvent.COMPLETE, this.onLoadUICompleted, this);
        this.skinName = "resource/custom_skins/LoadingSkin.exml";
    }

    private onLoadUICompleted(e: eui.UIEvent): void {
        this.removeEventListener(eui.UIEvent.COMPLETE, this.onLoadUICompleted, this);
        ApplicationFacade.getInstance().registerMediator(new LoadingMediator(this));
    }
}