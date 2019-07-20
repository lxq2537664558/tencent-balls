class SceneBattleMediator extends puremvc.Mediator {
    public static readonly NAME: string = "SceneBattleMediator";

    constructor(view: any) {
        super(SceneBattleMediator.NAME, view);
    }

    public onRegister(): void {
        BattleEvent.getInstance().addEventListener(BattleEvent.OnGameFinish, this.onGameFinish, this);
    }

    public onRemove(): void {
        BattleEvent.getInstance().removeEventListener(BattleEvent.OnGameFinish, this.onGameFinish, this);
    }

    public onBtnReturn(): void {
        this.facade().sendNotification(ApplicationFacade.CHANGE_SCENE, SceneName.MainScene, UIConfig.ADD_SCENE);
    }

    public onClickGM(data: any): void {
        this.sendNotification(ShowDebugPanelCommand.NAME);
    }

    public onKeyDown(data: any): void {
        if (data.data.keyCode === 221) {
            this.onClickGM(null);
        }
    }

    private onGameFinish(data: any): void {
        ApplicationFacade.getInstance().switchDB = true;
        const level: number = this.getLevelChange(data.data);
        const addData: NotificationPanelAddData = new NotificationPanelAddData("BattleResultPanel", {
            msg: data.data,
            levelChange: level,
        });
        ApplicationFacade.getInstance().sendNotification(ApplicationFacade.CHANGE_PANEL, addData, UIConfig.ADD_PANEL);
    }

    private getLevelChange(data: any): any {
        if (data.levelUp !== null && data.levelUp !== void 0) {
            return data.levelUp;
        }
        else if (data.levelDown !== null && data.levelDown !== void 0) {
            return -data.levelDown;
        }

        return 0;
    } 
}