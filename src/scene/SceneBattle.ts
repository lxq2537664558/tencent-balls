class SceneBattle extends SceneBase {
    constructor() {
        super("SceneBattle");

        this.addEventListener(eui.UIEvent.COMPLETE, this.onLoadUICompleted, this);
        this.skinName = "resource/custom_skins/battle/BattleUISkin.exml";
    }

    public leaveScene(): void {
        BattleManager.getInstance().gameOverGameScene();
        super.leaveScene();
        ApplicationFacade.getInstance().removeMediator(SceneBattleMediator.NAME);
    }

    private onLoadUICompleted(e: eui.UIEvent): void {
        this.removeEventListener(eui.UIEvent.COMPLETE, this.onLoadUICompleted, this);
        ApplicationFacade.getInstance().registerMediator(new SceneBattleMediator(this));
        this.touchEnabled = false;
    }
}