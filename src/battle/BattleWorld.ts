class BattleWorld extends egret.DisplayObjectContainer {
    private starLayer_: egret.DisplayObjectContainer;
    private starMeshLayer_: StarMesh;
    private beadLayer_: egret.DisplayObjectContainer;
    private ballLayer_: egret.DisplayObjectContainer;
    private effectLayer_: egret.DisplayObjectContainer;

    constructor() {
        super();

        this.starLayer_ = new egret.DisplayObjectContainer();
        this.starLayer_.name = "StarLayer";
        this.addChild(this.starLayer_);
        this.starMeshLayer_ = new StarMesh(this.starLayer_);
        this.beadLayer_ = new egret.DisplayObjectContainer();
        this.beadLayer_.name = "BeadLayer";
        this.addChild(this.ballLayer_);
        this.ballLayer_ = new egret.DisplayObjectContainer();
        this.ballLayer_.name = "BallLayer";
        this.addChild(this.ballLayer_);
        this.effectLayer_ = new egret.DisplayObjectContainer();
        this.effectLayer_.name = "EffectLayer";
        this.addChild(this.effectLayer_);
        this.touchChildren = false;
        this.touchEnabled = false;
        UIUtils.ignoreHitTest(this);
    }

    public update(): void {
        const count: number = this.ballLayer_.numChildren;

        if (2 > count) {
            return;
        }

        for (let i = 0, index = 0, len = count - 1; i < len;) {
            const child: any = this.ballLayer_.getChildAt(i);
            index = i;

            for (let j = i + 1; j < count; ++j) {
                const nextChild: any = this.ballLayer_.getChildAt(j);

                if (child.depth > nextChild.depth) {
                    index = j;
                }
            }

            if (index !== i) {
                this.ballLayer_.setChildIndex(child, index);
            }
            else {
                ++i;
            }
        }
    }

    public onExitRoom(): void {
        this.starMeshLayer_.removeChildren();
        this.beadLayer_.removeChildren();
        this.ballLayer_.removeChildren();
        this.effectLayer_.removeChildren();
    }
}