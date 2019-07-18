class BattleQuadTree {
    private depth_: number;
    private objectCount_: number;
    private rect_: BattleRect;
    private rootNode_: BattleQuadNode;

    constructor() {
        this.depth = 0;
        this.objectCount = 0;
    }

    public create(depth: number, rect: BattleRect): void {
        this.depth = depth;
        this.rect_ = rect;
        this.rootNode_ = new BattleQuadNode(depth, rect);
        this.rootNode_.createChildren(rect);
    }

    public buildTree(starArr: Array<StarStaticInfo>): void {
        for (let i = 0; i < starArr.length; ++i) {
            this.insertObject(starArr[i]);
        }
    }

    public insertObject(data: StarStaticInfo): void {
        this.rootNode_.insertObject(data);
        ++this.objectCount;
    }

    public foreachObject(rect: BattleRect): void {
        if (rect.isValid() && this.rect_.isIntersect(rect)) {
            this.rootNode_.foreachObject(rect);
        }
    }

    public foreachRenderObject(rect: BattleRect): void {
        if (rect.isValid() && this.rect_.isIntersect(rect)) {
            this.rootNode_.foreachRenderObject(rect);
        }
    }

    set depth(value) {
        this.depth_ = value;
    }

    get depth() {
        return this.depth_;
    }

    set objectCount(value) {
        this.objectCount_ = value;
    }

    get objectCount() {
        return this.objectCount_;
    }
}