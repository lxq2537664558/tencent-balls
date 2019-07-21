class HeartBeatSystem {
    public static readonly HeartBeatInterval: number = 3;
    public static readonly DisconnectMaxTime: number = 30;
    public static readonly HistoryMaxCount: number = 10;
    public static readonly MaxDelayMilliseconds: number = 460;

    private static instance_: HeartBeatSystem;

    private waitNum_: number;
    private pauseTimestamp_: number;
    private isHeartBeating_: boolean;
    private heartBeatTimer_: egret.Timer;
    private heartBeatId_: number;
    private lastSentTimestamp_: number;
    private heartBeatDelayTime_: number;
    private disconnectCountDown_: number;

    contructor() {
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
        this.heartBeatTimer = new egret.Timer(1000 * HeartBeatSystem.HeartBeatInterval, 0);
        this.heartBeatId = 0;
        this.lastSentTimestamp = 0;
    }

    public startHeartBeat(): void {
        if (this.isHeartBeating) {
            return;
        }

        this.isHeartBeating = true;
        this.heartBeatId = 0;
        this.lastSentTimestamp = 0;
        this.heartBeatDelayTime = 0;
        this.disconnectCountDown = HeartBeatSystem.DisconnectMaxTime;
        this.heartBeatTimer.addEventListener(egret.TimerEvent.TIMER, this.onHeartBeat, this);
        this.heartBeatTimer.start();
        this.onHeartBeat();
    }

    private onHeartBeat(): void {
        if (!this.isHeartBeating) {
            return;
        }

        ++this.heartBeatId;
        const protoPath: string = "HLCmd.CmdUser_HeartBeat_CS";
        const model: any = new MessageProtoBufModel();
        model.seqId = this.heartBeatId;
        const msg: HLMsg = new HLMsg(305, model, protoPath);
        SocketServer.getHallInstance().send(msg);
        this.lastSentTimestamp = 0;
        this.update(HeartBeatSystem.HeartBeatInterval);
    }

    private update(heartBeatInterval: number): void {
        if (!this.isHeartBeating) {
            return;
        }

        if (heartBeatInterval > HeartBeatSystem.DisconnectMaxTime) {
            return;
        }

        this.disconnectCountDown = this.disconnectCountDown - heartBeatInterval;
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

    set lastSentTimestamp(value) {
        this.lastSentTimestamp_ = value;
    }

    get lastSentTimestamp() {
        return this.lastSentTimestamp_;
    }

    set heartBeatDelayTime(value) {
        this.heartBeatDelayTime_ = value;
    }

    get heartBeatDelayTime() {
        return this.heartBeatDelayTime_;
    }

    set disconnectCountDown(value) {
        this.disconnectCountDown_ = value;
    }

    get disconnectCountDown() {
        return this.disconnectCountDown_;
    }
}