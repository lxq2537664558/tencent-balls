class BattleItemBall extends egret.DisplayObjectContainer {
    private isTopZ_: boolean;
    private depth_: number;
    private size_: number;
    private itemBase_: BitmapURL;
    private item_: BitmapURL;
    private x_: number;
    private y_: number;
    private ballVo_: BattleBallVo;

    constructor() {
        super();

        this.isTopZ = false;
        this.depth = 0;
        this.size = 20;
        this.itemBase_ = new BitmapURL();
        this.addChild(this.itemBase_);
        this.item_ = new BitmapURL();
        this.addChild(this.item_);
    }

    public init(battleBall: BattleBall): void {
        this.ballVo_ = battleBall.ballVo;
        this.initItem();
    }

    public setBallSize(size: number): void {
        this.setPosition();
    }

    public setBallPosition(x: number, y: number, forwardRad: number): void {
        this.x_ = x;
        this.y_ = y;
        this.setPosition();
    }

    public playHurt(): void {
    }    

    public reset(): void {
        this.ballVo_ = null;
        this.removeEventListener(egret.Event.ENTER_FRAME, this.onEnterFrame, this);
    }    

    private setPosition(): void {
        this.x = this.x_ - this.size;
        this.y = this.y_ - this.size;
    }    

    private initItem(): void {
        const path: string = Battle.getInstance().getItemResPath(this.ballVo_.charId);
        this.item_.load(path);
        this.item_.setOffsetXY();
        this.item_.setSize(this.size * 2, this.size * 2);
        const url: string = URLConst.ASYNC_ASSETS_URL + "battle/skin/yindaohuan_1.png";
        this.itemBase_.load(url);
        this.itemBase_.setOffsetXY();
        this.addEventListener(egret.Event.ENTER_FRAME, this.onEnterFrame, this);
    }

    private onEnterFrame(timestamp: number): void {
        ++this.itemBase_.rotation;
        this.scaleX = this.scaleY = 1 / BattleManager.getInstance().zoom * .8;
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

    }

    get size() {
        return this.size_;
    }
}