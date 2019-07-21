class BattleManager {
    private static instance_: BattleManager;

    private isInGame_: boolean;
    private isEnterGame_: boolean;
    private lastTimestamp_: number;
    private halfLastTimestamp_: number;
    private deltaTime_: number;
    private isHalfUpdate_: boolean;

    constructor() {
        this.isInGame = false;
        this.isEnterGame = false;
        this.lastTimestamp = 0;
        this.halfLastTimestamp = 0;
        this.deltaTime = 0;
        this.isHalfUpdate = true;
    }

    public static getInstance(): BattleManager {
        if (!this.instance_) {
            this.instance_ = new BattleManager();
        }

        return this.instance_;
    }

    public preLoadGame(data: any): void {

    }

    public preCreate(): void {

    }

    public preCreateStage(): void {

    }

    public preCreateStar(): void {
        StarSystem.getInstance().initStarPool();
    }

    public startNewGameScene(enterData: any): void {

    }

    public initGame(): void {

    }

    set isInGame(value) {
        this.isInGame_ = value;
    }

    get isInGame() {
        return this.isInGame_;
    }

    set isEnterGame(value) {
        this.isEnterGame_ = value;
    }

    get isEnterGame() {
        return this.isEnterGame_;
    }

    set lastTimestamp(value) {
        this.lastTimestamp_ = value;
    }

    get lastTimestamp() {
        return this.lastTimestamp_;
    }

    set halfLastTimestamp(value) {
        this.halfLastTimestamp_ = value;
    }

    get halfLastTimestamp() {
        return this.halfLastTimestamp_;
    }

    set deltaTime(value) {
        this.deltaTime_ = value;
    }

    get deltaTime() {
        return this.deltaTime_;
    }

    set isHalfUpdate(value) {
        this.isHalfUpdate_ =  value;
    }

    get isHalfUpdate() {
        return this.isHalfUpdate_;
    }
}