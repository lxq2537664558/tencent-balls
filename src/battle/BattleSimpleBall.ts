class BattleSimpleBall extends egret.Bitmap {
    private isTopZ_: boolean;
    private depth_: number;
    private size_: number;
    private x_: number;
    private y_: number;
    private ballVo_: BattleBallVo;

    constructor() {
        super();
    }

    public init(battleBall: BattleBall): void {
        this.ballVo_ = battleBall.ballVo;
        const type: number = this.ballVo_.type;

        switch (type) {
            case BallType.CiQiu: {
                this.initCiQiu();
            }
            break;
            case BallType.Boom: {
                this.initBoom();
            }
            break;
        }
    }

    public setBallSize(size: number): void {
        this.size = size;
        this.depth = size;
        this.width = this.height = size * 2;
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

    public reset(): void {
        this.ballVo_ = null;
    }

    private initCiQiu(): void {
        this.texture = RES.getRes("b_ciqiu_png");
    }

    private initBoom(): void {
        const url: string = Battle.getInstance().getItemResPath(this.ballVo_.charId);
        ResourceUtils.getResByUrlRelative(url, this.onLoad, this, RES.ResourceItem.TYPE_IMAGE);
    }

    private onLoad(texture: egret.Texture): void {
        if (!texture) {
            return;
        }

        this.texture = texture;
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

    set size(value) {
        this.size_ = value;
    }

    get size() {
        return this.size_;
    }
}