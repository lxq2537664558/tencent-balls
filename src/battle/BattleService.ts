class BattleService {
    private static instance_: BattleService;

    private balls_: {[key: number]: BattleBallVo};
    private startWaiting_: boolean;
    private startWaitingTime_: number;
    private rolePlayer_: BattlePlayerVo;
    private clientTimeBase_: number;
    private cameraScale_: number;

    constructor() {
        this.balls_ = {};
        this.clientTimeBase = -.05;
    }

    public static getInstance(): BattleService {
        if (!this.instance_) {
            this.instance_ = new BattleService();
        }

        return this.instance_;
    }

    public isRoleBall(ballVo: BattleBallVo): boolean {
        if (!ballVo || !this.rolePlayer) {
            return false;
        }

        return this.rolePlayer.uid === ballVo.uid && ballVo.uid === BallType.Ball;
    }

    public getBall(ballId: number): BattleBallVo {
        return this.balls_[ballId];
    }

    public getTimeLeft(): number {
        return;
    }

    set clientTimeBase(value) {
        this.clientTimeBase_ = value;
    }

    get clientTimeBase() {
        return this.clientTimeBase_;
    }

    get rolePlayer() {
        return this.rolePlayer_;
    }

    set cameraScale(value) {
        this.cameraScale_ = value;
    }

    get cameraScale() {
        return this.cameraScale_;
    }
}