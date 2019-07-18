class BattleStarFly {
    private g_: number;
    private x_: number;
    private y_: number;
    private ballVo_: BattleBallVo;
    private starVo_: StarStaticInfo;

    constructor() {
        this.g = 1.005;
        this.x = 0;
        this.y = 0;
    }

    public flyToBall(starVo: StarStaticInfo, ballId: number): void {
        if (this.isFlying()) {
            return;
        }

        this.ballVo_ = BattleService.getInstance().getBall(ballId);
        this.starVo_ = starVo;
        this.x = starVo.x;
        this.y = starVo.y;
    }

    private isFlying(): boolean {
        return this.ballVo_ !== null;
    }

    set g(value) {
        this.g_ = value;
    }

    get g() {
        return this.g_;
    }

    set x(value) {
        this.x_ = value;
    }

    get x() {
        return this.x_;
    }

    set y(value) {
        this.y_ = value;
    }

    get y() {
        return this.y_;
    }
}