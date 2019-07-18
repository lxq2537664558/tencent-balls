class StarMesh {
    private bitmapStarDic_: Dictionary;
    private bitmapStarPool_: ObjectPool;
    private hideStarList_: Array<any>;
    private container_: egret.DisplayObjectContainer;

    constructor(container: egret.DisplayObjectContainer) {
        this.bitmapStarDic_ = new Dictionary();
        this.bitmapStarPool_ = new ObjectPool();
        this.hideStarList_ = [];

        if (!BigMesh.enable) {
            this.container_ = container;
        }
    }

    public removeChildren(): void {
        if (BigMesh.enable) {
            return;
        }

        this.container_.removeChildren();
        this.bitmapStarDic_.clear();
        this.bitmapStarPool_.clear("BattleStar");
        this.hideStarList_.length = 0;
    }

    public setVisble(): void {
        
    }
}