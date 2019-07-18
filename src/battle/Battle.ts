class Battle {
    public static WorldSqrEdgeLength: number = 5500;
    public static readonly BallSizeParam: number = 30;
    public static readonly InitViewScale: number = .83;
    public static readonly PanelHeight: number = 720;
    public static readonly PanelWidth: number = 1280;
    public static readonly Freeze: boolean = false;
    public static readonly RetainLeftTime: number = 3;

    private static instance_: Battle;

    private viewRect_: egret.Rectangle;
    private velocityList_: ObjectPool;

    constructor() {
        this.viewRect = new egret.Rectangle();
        this.velocityList_ = new ObjectPool();
    }

    public static getInstance(): Battle {
        if (!this.instance_) {
            this.instance_ = new Battle();
        }

        return this.instance_;
    }

    public calcVelocityByR(size: number): number {
        size /= Battle.BallSizeParam;

        return (.23 * Math.min(5, 9 / (size + 1) + .7) + .85) * Math.min(5, 9 / (size + 1) + .7) * Battle.BallSizeParam * 1;
    }

    public getRadiusByScore(score: number): number {
        return 50 * Math.sqrt(.165 * score + .6) * .01 * 30;
    }

    public pushVelocityInfo(info: VelocityInfo): void {
        this.velocityList_.push(info);
    }

    public popVelocityInfo(): any {
        return this.velocityList_.pop("VelocityInfo");
    }

    public getBeadTexture(id: number): egret.Texture {
        const config: ItemAttrInfo = ConfigManager.getInstance().itemAttrInfo.getItemAttrInfo(id);
        const url: string = config.resource.slice(config.resource.indexOf("/") + 1);

        return RES.getRes("battle_bead_json." + url + "_png");
    }

    public getItemResPath(id: number): string {
        const config: ItemAttrInfo = ConfigManager.getInstance().itemAttrInfo.getItemAttrInfo(id);
        const url: string = URLConst.ASYNC_ASSETS_URL + "battle/" + config.resource + ".png";

        return ResourceUtils.getResUrl(url);
    }

    set viewRect(value) {
        this.viewRect_ = value;
    }

    get viewRect() {
        return this.viewRect_;
    }
}