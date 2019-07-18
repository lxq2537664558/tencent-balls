class BattleBeadBall extends egret.Bitmap {
    private size_: number;
    private x_: number;
    private y_: number;

    constructor() {
        super();
    }

    public init(battleBall: BattleBall): void {
        this.texture = Battle.getInstance().getBeadTexture(battleBall.ballVo.charId);
    }

    public reset(): void {
    }

    public setBallSize(size: number): void {
        this.size = size;
        this.setPosition();
    }

    public setBallPosition(x: number, y: number, forwardRad: number): void {
        this.x_ = x;
        this.y_ = y;
        this.setPosition();
    }

    public playHurt(): void {
    }

    private setPosition(): void {
        this.x = this.x_ - this.size;
        this.y = this.y_ - this.size;
    }

    set size(value) {
        this.size_ = value;
    }

    get size() {
        return this.size_;
    }

    set isTopZ(value) {
    }

    get isTopZ() {
        return false;
    }

    set depth(value) {
    }

    get depth() {
        return 0;
    }
}