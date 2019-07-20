class RoomHeartbeatSystem {
    private static instance_: RoomHeartbeatSystem;
    public static readonly HEARTBEAT_INTERVAL: number = 3;
    private static readonly DISCONNECT_MAX_TIME: number = 15;
    private static readonly HISTORY_MAX_COUNT: number = 5;

    private heartBeating_: boolean;
    private heartBeatId_: number;
    private lastSentTime_: number;
    private delayHistory_: Array<number>;
    private heartBeatCountDown_: number;
    private disconnectCountDown_: number;
    private pauseTime_: number;
    private pauseLeftBattleTime_: number;
    private delayMillisecond_: number;

    constructor() {
        this.heartBeating = false;
        this.heartBeatId = 0;
        this.heartBeatCountDown = 0;
        this.lastSentTime = 0;
        this.disconnectCountDown = 0;
        this.pauseTime = 0;
        this.pauseLeftBattleTime = 0;
        this.delayMillisecond = 0;
        BattleEvent.getInstance().addEventListener(BattleEvent.OnGameFinish, this.onGameFinish, this);
    }

    public static getInstance(): RoomHeartbeatSystem {
        if (!this.instance_) {
            this.instance_ = new RoomHeartbeatSystem();
        }

        return this.instance_;
    }

    public update(deltaTime: number): void {
        if (!this.heartBeating) {
            return;
        }

        if (deltaTime > this.disconnectCountDown) {
            return;
        }

        this.heartBeatCountDown = this.heartBeatCountDown - deltaTime;
        this.disconnectCountDown = this.disconnectCountDown - deltaTime;

        if (this.heartBeatCountDown < 0) {
            this.doHeartBeat();
        }

        if (BattleService.getInstance().isBattlePlaying && this.disconnectCountDown < 0) {
            this.stopHeartBeat();
        }
        else if (!BattleService.getInstance().isBattlePlaying) {
            this.stopHeartBeat();
        }
    }

    public appPause(isPause: boolean): void {
        if (isPause) {
            this.pauseTime = egret.getTimer() / 1000;
            this.pauseLeftBattleTime = BattleService.getInstance().getTimeLeft();
        }
        else {
            const elapsedTime: number = egret.getTimer() / 1000 - this.pauseTime;

            if (BattleService.getInstance().isGuestModel()) {
                if (elapsedTime > Battle.GuestPauseTimeout) {
                    // ApplicationFacade.getInstance().retrieveProxy();                    
                }
                else if (elapsedTime > 20) {
                }
            }

            if (this.pauseLeftBattleTime < (elapsedTime + Battle.RetainLeftTime)) {

            }

            if (elapsedTime > 20) {
                this.stopHeartBeat();
                BattleService.getInstance().exitRoom();
                SocketServer.getInstanceByBattle().close();
                BattleManager.getInstance().isInGame = false;
                SocketServer.getInstance().close();
                HeartBeatSystem.getInstance().stopHeartBeat();
            }
        }
    }

    public startHeartBeat(): void {
        if (this.heartBeating) {
            return;
        }

        this.heartBeating = true;
        this.heartBeatId = 0;
        this.lastSentTime = 0;
        this.delayHistory_ = [.05, .05, .05, .05, .05];
        this.heartBeatCountDown = RoomHeartbeatSystem.HEARTBEAT_INTERVAL;
        this.disconnectCountDown = RoomHeartbeatSystem.DISCONNECT_MAX_TIME;
        this.doHeartBeat();
    }

    public stopHeartBeat(): void {
        if (this.heartBeating) {
            this.heartBeating = false;
            this.heartBeatCountDown = RoomHeartbeatSystem.HEARTBEAT_INTERVAL;
        }
    }

    public getAveDelay(): number {
        let min: number = this.delayHistory_[0];
        let max: number = this.delayHistory_[0];
        let total: number = 0;

        for (let i = 0, len = this.delayHistory_.length; i < len; ++i) {
            const value: number = this.delayHistory_[i];
            total += value;
            min = Math.min(min, value);
            max = Math.max(max, value);
        }

        return (total - min - max) / (this.delayHistory_.length - 2);
    }

    public destroy(): void {
        BattleEvent.getInstance().removeEventListener(BattleEvent.OnGameFinish, this.onGameFinish, this);
    }

    public onEnterRoom(): void {
        this.heartBeating = false;
        this.startHeartBeat();
    }

    public onHeartBeat(data: any): void {
        data.serverTime = data.serverTime / 1000;
        const seqNo: number = data.seqNo;

        if (this.heartBeatId === seqNo) {
            const clientTime: number = Battle.getInstance().applicationUnscaledTotalTime;
            this.disconnectCountDown = RoomHeartbeatSystem.DISCONNECT_MAX_TIME;
            const elapsedTime: number = clientTime - this.lastSentTime;

            if (this.delayHistory_.length > RoomHeartbeatSystem.HISTORY_MAX_COUNT) {
                this.delayHistory_.shift();
            }

            this.delayHistory_.push(elapsedTime);
            const aveDelay: number = this.getAveDelay();
            const defaultDelay: number = .5;
            let delay: number = defaultDelay - aveDelay / 2;

            if (0 > delay) {
                delay = 0;
            }

            const serverTime: number = data.serverTime - delay;
            this.delayMillisecond = aveDelay * 1000;
            BattleService.getInstance().setTime(clientTime, serverTime);
        }
    }

    private doHeartBeat(): void {
        ++this.heartBeatId;
        this.lastSentTime = Battle.getInstance().applicationUnscaledTotalTime;
    }

    private reset(): void {
        this.heartBeating = false;
    }

    private onGameFinish(e: egret.Event): void {
        this.reset();
    }

    set heartBeating(value) {
        this.heartBeating_ = value;
    }

    get heartBeating() {
        return this.heartBeating_;
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

    set heartBeatCountDown(value) {
        this.heartBeatCountDown_ = value;
    }

    get heartBeatCountDown() {
        return this.heartBeatCountDown_;
    }

    set disconnectCountDown(value) {
        this.disconnectCountDown_ = value;
    }

    get disconnectCountDown() {
        return this.disconnectCountDown_;
    }

    set pauseTime(value) {
        this.pauseTime_ = value;
    }

    get pauseTime() {
        return this.pauseTime_;
    }

    set pauseLeftBattleTime(value) {
        this.pauseLeftBattleTime_ = value;
    }

    get pauseLeftBattleTime() {
        return this.pauseLeftBattleTime_;
    }

    set delayMillisecond(value) {
        this.delayMillisecond_ = value;
    }

    get delayMillisecond() {
        return this.delayMillisecond_;
    }
}