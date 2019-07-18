class BattleQuadNode {
    private offset_: number;
    private depth_: number;
    private rect_: BattleRect;
    private objectArr_: Array<StarStaticInfo>;
    private childrenNode_: Array<BattleQuadNode>;

    constructor(depth: number, rect: BattleRect) {
        this.depth = depth;
        this.rect_ = rect;
        this.objectArr_ = new Array<StarStaticInfo>();
        this.childrenNode_ = new Array<BattleQuadNode>();
    }

    public createChildren(rect: BattleRect): void {
        if (0 >= this.depth) {
            console.warn("BattleQuadNode.createChildren:", "节点深度小于等于0");
            return;
        }

        const rectArr: Array<BattleRect> = rect.split();

        if (rectArr.length !== 4) {
            return;
        }

        const depth = this.depth - 1;
        this.childrenNode_ = new Array<BattleQuadNode>();

        for (let i = 0, len = rectArr.length; i < len; ++i) {
            const node: BattleQuadNode = new BattleQuadNode(depth, rectArr[i]);
            node.createChildren(rectArr[i]);
            this.childrenNode_.push(node);
        }
    }

    public insertObject(star: StarStaticInfo): void {
        if (this.childrenNode_.length === 0) {
            this.objectArr_.push(star);
        }
        else {
            let childIndex;
            const x: number = star.x;
            const y: number = star.y;
            const xCenter: number = this.rect_.xCenter;
            const yCenter: number = this.rect_.yCenter;

            if (x > xCenter) {
                if (y > yCenter) {
                    childIndex = 0;
                }
                else {
                    childIndex = 3;
                }
            }
            else {
                if (y > yCenter) {
                    childIndex = 1;
                }
                else {
                    childIndex = 2;
                }
            }

            this.childrenNode_[childIndex].insertObject(star);
        }
    }

    public foreachObject(rect: BattleRect): void {
        if (this.childrenNode_.length === 0) {
            StarSystem.getInstance().processLeaf(this.objectArr_);
        }
        else {
            for (let i = 0; i < 4; ++i) {
                const child: BattleQuadNode = this.childrenNode_[i];
                
                if (child.rect.isIntersect(rect)) {
                    child.foreachObject(rect);
                }
            }
        }
    }

    public foreachRenderObject(rect: BattleRect): void {
        if (this.childrenNode_.length === 0) {
            StarSystem.getInstance().drawStaticStar(this.objectArr_);
        }
        else {
            this.offset = MathUtils.randomInt(0, 3);

            for (let i = this.offset; i < (this.offset + 4); ++i) {
                const index: number = i % 4;
                const child: BattleQuadNode = this.childrenNode_[index];

                if (child.rect.isIntersect(rect)) {
                    child.foreachRenderObject(rect);
                }
            }
        }
    }

    set depth(value) {
        this.depth_ = value;
    }

    get depth() {
        return this.depth_;
    }

    set rect(value) {
        this.rect_ = value;
    }

    get rect() {
        return this.rect_;
    }

    set offset(value) {
        this.offset_ = value;
    }

    get offset() {
        return this.offset_;
    }
}