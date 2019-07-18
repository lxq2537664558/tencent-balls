class BigMesh extends egret.Mesh {
    public static enable: boolean = false;

    private container_: egret.DisplayObjectContainer;
    private id_: number;
    private primitiveElementList_: PrimitiveElementList;
    private primitiveMap_: egret.MapLike<PrimitiveElement>;
    private spritesheetRes_: any;

    constructor(container: egret.DisplayObjectContainer) {
        super();

        this.id_ = 0;
        this.container_ = container;
        this.container_.addChild(this);
        this.primitiveElementList_ = new PrimitiveElementList();
        this.primitiveMap_ = egret.createMap<PrimitiveElement>();
        this.$renderNode = new BigMeshNode();
        // this.spritesheetRes_ = RES.getRes("");
        // this.texture = this.spritesheetRes_.
    }
}