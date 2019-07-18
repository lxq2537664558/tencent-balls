class HeartBeatSystem {
    private static instance_: HeartBeatSystem;
    public static readonly HEARTBEAT_INTERVAL: number = 3;
    public static readonly DISCONNECT_MAX_TIME: number = 30;
    public static readonly MAX_DELAY_MILLISECONDS: number = 460;

    private waitNum_: number;
    private pauseTimestamp_: number;
    private isHeartBeating_: boolean;
    private heartBeatTimer_: egret.Timer;
    private heartBeatId_: number;
    private lastSentTime_: number;
    private costTime_: number;
    private disconnectCountDown_: number;
    private preLow_: boolean;
    private lastSimulateTime_: number;
    private simulateDelay_: number;

    constructor() {
    }

    public static getInstance(): HeartBeatSystem {
        if (!this.instance_) {
            this.instance_ = new HeartBeatSystem();
        }

        return this.instance_;
    }

    public init(): void {
        this.waitNum = 0;
        this.pauseTimestamp = 0;
        this.isHeartBeating = false;
        this.heartBeatTimer = new egret.Timer(Constants.SECOND_IN_MILLISECONDS * HeartBeatSystem.HEARTBEAT_INTERVAL, 0);
    }

    public startHeartBeat(): void {
        if (this.isHeartBeating) {
            return;
        }

        this.isHeartBeating = true;
        this.heartBeatId = 0;
        this.lastSentTime = 0;
        this.costTime = 0;
        this.disconnectCountDown = HeartBeatSystem.DISCONNECT_MAX_TIME;
        this.heartBeatTimer_.addEventListener(egret.TimerEvent.TIMER, this.onHeartBeat, this);
        this.heartBeatTimer_.start();
        this.onHeartBeat();
    }

    public stopHeartBeat(): void {
        if (this.heartBeatTimer !== null) {
            this.heartBeatTimer.stop();
            this.heartBeatTimer_.removeEventListener(egret.TimerEvent.TIMER, this.onHeartBeat, this);
        }

        this.isHeartBeating = false;
    }

    public update(interval: number): void {
        if (!this.isHeartBeating) {
            return;
        }

        if (interval > HeartBeatSystem.DISCONNECT_MAX_TIME) {
            return;
        }

        this.disconnectCountDown = this.disconnectCountDown - interval;

        if (!BattleManager.getInstance().isInGame && this.heartBeatId > 2) {
            if (this.disconnectCountDown < (HeartBeatSystem.DISCONNECT_MAX_TIME - 4)) {
                this.preLow = true;
                ApplicationFacade.getInstance().sendNotification(ApplicationFacade.CHANGE_LOADING, LoadingStateData.LOW_NETWORK, UIConfig.SHOW_LOADING);
            }
            else if (this.preLow && this.disconnectCountDown < 0) {
                this.stopHeartBeat();
            }
        }
    }

    public resume(): number {
        return 0 - this.pauseTimestamp;
    }

    public pause(timestamp: number): void {
        if (timestamp) {
            this.pauseTimestamp = timestamp;
        }
        else {
            this.waitNum = 2;
        }
    }

    public onResetHeartBeat(): void {
        this.disconnectCountDown = HeartBeatSystem.DISCONNECT_MAX_TIME;
    }

    public onProcessHeartBeat(data: any): void {
        if (this.heartBeatId === data.seqId) {
            this.disconnectCountDown = HeartBeatSystem.DISCONNECT_MAX_TIME;
            this.costTime = 0;
        }
    }

    private onHeartBeat(): void {
        if (!this.isHeartBeating) {
            return;
        }

        this.heartBeatId += 1;

        this.update(HeartBeatSystem.HEARTBEAT_INTERVAL);
    }

    set waitNum(value) {
        this.waitNum_ = value;
    }

    get waitNum() {
        return this.waitNum_;
    }

    set pauseTimestamp(value) {
        this.pauseTimestamp_ = value;
    }

    get pauseTimestamp() {
        return this.pauseTimestamp_;
    }

    set isHeartBeating(value) {
        this.isHeartBeating_ = value;
    }

    get isHeartBeating() {
        return this.isHeartBeating_;
    }

    set heartBeatTimer(value) {
        this.heartBeatTimer_ = value;
    }

    get heartBeatTimer() {
        return this.heartBeatTimer_;
    }

    set heartBeatId(value) {
        this.heartBeatId_ = value;
    }

    get heartBeatId() {
        return this.heartBeatId_;
    }

    set lastSentTime(value) {
        this.lastSentTime_ = value;
    }

    get lastSentTime() {
        return this.lastSentTime_;
    }

    set costTime(value) {
        this.costTime_ = value;
    }

    get costTime() {
        return this.costTime_;
    }

    set disconnectCountDown(value) {
        this.disconnectCountDown_ = value;
    }

    get disconnectCountDown() {
        return this.disconnectCountDown_;
    }

    set preLow(value) {
        this.preLow_ = value;
    }

    get preLow() {
        return this.preLow_;
    }

    set lastSimulateTime(value) {
        this.lastSimulateTime_ = value;
    }

    get lastSimulateTime() {
        return this.lastSimulateTime_;
    }

    set simulateDelay(value) {
        this.simulateDelay_ = value;
    }

    get simulateDelay() {
        return this.simulateDelay_;
    }

    get costTimeInMillisecond() {
        if (!this.isHeartBeating) {
            if (this.lastSimulateTime === void 0 || this.lastSimulateTime === null || this.simulateDelay === void 0 || this.simulateDelay === null) {
                this.lastSimulateTime = 0;
                this.simulateDelay = Math.round(Math.random() * 90 + 10);
            }

            return this.simulateDelay;
        }

        if ((this.costTime * Constants.SECOND_IN_MILLISECONDS) > HeartBeatSystem.MAX_DELAY_MILLISECONDS) {
            return HeartBeatSystem.MAX_DELAY_MILLISECONDS;
        }

        return Math.floor(this.costTime * Constants.SECOND_IN_MILLISECONDS);
    }
}