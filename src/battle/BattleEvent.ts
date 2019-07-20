class BattleEvent extends egret.EventDispatcher {
    public static readonly OnGameAccessLogin: string = "OnGameAccessLogin";
    public static readonly BattleSettingChanged: string = "BattleSettingChanged";
    public static readonly OnGameFinish: string = "OnGameFinish";
    private static instance_: BattleEvent;

    constructor() {
        super();
    }

    public static getInstance(): BattleEvent {
        if (!this.instance_) {
            this.instance_ = new BattleEvent();
        }

        return this.instance_;
    }

    public fireEvent(type: string, data: any): void {
        this.dispatchEvent(new egret.Event(type, false, false, data));
    }
}