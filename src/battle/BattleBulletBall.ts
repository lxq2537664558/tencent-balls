class BattleBulletBall extends egret.Bitmap {
    private isTopZ_: boolean;
    private depth_: number;
    private sizeOffset_: number;
    private size_: number;
    private x_: number;
    private y_: number;
    private forwardRad_: number;
    private ballVo_: BattleBallVo;

    constructor() {
        super();
    }

    public init(battleBall: BattleBall): void {
        this.ballVo_ = battleBall.ballVo;

        if (this.ballVo_.type !== BallType.Bullet && this.ballVo_.type !== BallType.Lightning) {
            return;
        }

        if (this.ballVo_.type === BallType.Bullet) {
            this.sizeOffset = 1;
        }
        else {
            this.sizeOffset = 4;
        }

        const url: string = Battle.getInstance().getItemResPath(this.ballVo_.charId);
        ResourceUtils.getResByUrlRelative(url, this.onLoad, this, RES.ResourceItem.TYPE_IMAGE);
    }

    public reset(): void {
        this.ballVo_ = null;
        this.sizeOffset = 1;
    }

    public setBallSize(size: number): void {
        this.size = size;
        this.depth = size;
        this.setPosition();
    }

    public setBallPosition(x: number, y: number, forwardRad: number): void {
        this.x_ = x;
        this.y_ = y;
        this.forwardRad = forwardRad;
        this.setPosition();
    }

    public playHurt(): void {
    }

    private setPosition(): void {
        this.x = this.x_;
        this.y = this.y_;
        this.rotation = this.forwardRad * MathUtils.DEGREE_180_TO_PI + 180;
    }

    private onLoad(texture: egret.Texture): void {
        if (!texture) {
            return;
        }

        this.texture = texture;
        this.anchorOffsetX = this.anchorOffsetY = 64;
        this.scaleX = this.scaleY = this.size / 64 * this.sizeOffset;
    }

    set forwardRad(value) {
        this.forwardRad_ = value;
    }

    get forwardRad() {
        return this.forwardRad_;
    }

    set isTopZ(value) {
        this.isTopZ_ = value;
    }

    get isTopZ() {
        return this.isTopZ_;
    }

    set depth(value) {
        this.depth = this.isTopZ ? 1e4 : value;
    }

    get depth() {
        return this.depth_;
    }

    set sizeOffset(value) {
        this.sizeOffset_ = value;
    }

    get sizeOffset() {
        return this.sizeOffset_;
    }

    set size(value) {
        this.size_ = value;
    }

    get size() {
        return this.size_;
    }    
}