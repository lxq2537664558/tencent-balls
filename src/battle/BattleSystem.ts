class BattleSystem {
    private static instance_: BattleSystem;
    public static readonly MinMusic: number = 10;

    private isGuideModule_: boolean;
    private finishBattleMsg_: any;
    private rankListInfo_: { [key: number]: number };
    private cameraScale_: number;
    private rolePositionX_: number;
    private rolePositionY_: number;
    private initPos_: Vector2D;
    private deltaPos_: Vector2D;
    private lastPos_: Vector2D;
    private lastForceMag_: number;
    private lastForceSendTime_: number;
    private isStopState_: boolean;
    private msgArray_: { [key: number]: any };
    private battleMode_: number;
    private updateSignalTime_: number;
    private moveTargetPos_: Vector2D;

    constructor() {
        this.battleMode = BattleService.getInstance().getBattleMode();
    }

    public static getInstance(): BattleSystem {
        if (!this.instance_) {
            this.instance_ = new BattleSystem();
        }

        return this.instance_;
    }

    public reset(): void {
        this.isGuideModule = false;
        this.finishBattleMsg = null;
        this.rankListInfo_ = {};
        this.cameraScale = 1;
        this.rolePositionX = -10000;
        this.rolePositionY = -10000;
        this.initPos = { x: 0, y: 0 };
        this.deltaPos = { x: 0, y: 0 };
        this.moveTargetPos = { x: 0, y: 0 };
        this.lastForceMag = 0;
        this.lastForceSendTime = 0;
        this.isStopState = true;
        this.msgArray_ = {};
        this.battleMode = null;
        this.updateSignalTime = null;
    }

    public onEnterRoom(data: any): void {

    }

    set isGuideModule(value) {
        this.isGuideModule_ = value;
    }

    get isGuideModule() {
        return this.isGuideModule_;
    }

    set finishBattleMsg(value) {
        this.finishBattleMsg_ = value;
    }

    get finishBattleMsg() {
        return this.finishBattleMsg_;
    }

    set cameraScale(value) {
        this.cameraScale_ = value;
    }

    get cameraScale() {
        return this.cameraScale_;
    }

    set rolePositionX(value) {
        this.rolePositionX_ = value;
    }

    get rolePositionX() {
        return this.rolePositionX_;
    }

    set rolePositionY(value) {
        this.rolePositionY_ = value;
    }

    get rolePositionY() {
        return this.rolePositionY_;
    }

    set initPos(value) {
        this.initPos_ = value;
    }

    get initPos() {
        return this.initPos_;
    }

    set deltaPos(value) {
        this.deltaPos_ = value;
    }

    get deltaPos() {
        return this.deltaPos_;
    }

    set lastPos(value) {
        this.lastPos_ = value;
    }

    get lastPos() {
        return this.lastPos_;
    }

    set lastForceMag(value) {
        this.lastForceMag_ = value;
    }

    get lastForceMag() {
        return this.lastForceMag_;
    }

    set lastForceSendTime(value) {
        this.lastForceSendTime_ = value;
    }

    get lastForceSendTime() {
        return this.lastForceSendTime_;
    }

    set isStopState(value) {
        this.isStopState_ = value;
    }

    get isStopState() {
        return this.isStopState_;
    }

    set battleMode(value) {
        this.battleMode_ = value;
    }

    get battleMode() {
        return this.battleMode_;
    }

    set updateSignalTime(value) {
        this.updateSignalTime_ = value;
    }

    get updateSignalTime() {
        return this.updateSignalTime_;
    }

    set moveTargetPos(value) {
        this.moveTargetPos_ = value;
    }

    get moveTargetPos() {
        return this.moveTargetPos_;
    }
}