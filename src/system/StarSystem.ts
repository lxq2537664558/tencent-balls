class StarSystem {
    private static instance_: StarSystem;

    private hideStar_: Array<number>;
    private zoom_: number;
    private half_: boolean;
    private efStarAdd_: number;
    private maxNum_: number;
    private starDic_: { [key: number]: boolean };
    private starCount_: number;
    private stagePool_: Array<BattleStarFly>;
    private settingProxy_: SettingsProxy;
    private starConfig_: Array<StarStaticInfo>;
    private starTotalNum_: number;
    private ballRect_: BattleRect;
    private starRenderRect_: BattleRect;
    private flyStarDic_: Dictionary;
    private processContext_: any;
    private starTree_: BattleQuadTree;
    private starMeshLayer_: any;

    constructor() {
        this.hideStar_ = new Array<number>();
        this.zoom = 1;
        this.half = true;
        this.efStarAdd = 0;
        this.maxNum = 0;
        this.starDic_ = {};
        this.stagePool_ = new Array<BattleStarFly>();
        // this.settingProxy_ = ApplicationFacade.getInstance().retrieveProxy(SettingsProxy.NAME);
    }

    public static getInstance(): StarSystem {
        if (!this.instance_) {
            this.instance_ = new StarSystem();
        }

        return this.instance_;
    }

    public destoryData(): void {
        this.reset();
        this.starTree_ = null;
        this.starMeshLayer_ = null;
        this.starDic_ = {};
        this.starCount = 0;
        this.stagePool_.length = 0;
        this.flyStarDic_.clear();
    }

    public initStar(): void {
        this.starMeshLayer_ = null;
        ConfigManager.getInstance().starInfo.resetStarArray();
        this.starConfig_ = ConfigManager.getInstance().starInfo.starArr;
        this.starTotalNum = this.starConfig_.length;
        this.initStarTree();
    }

    public showAllStar(active: boolean): void {
        for (let i = 0, len = this.starConfig_.length; i < len; ++i) {
            this.starConfig_[i].active = active;
        }
    }

    public eatStar(x: number, y: number, radius: number, ballId: number): void {
        this.processContext_.x = x;
        this.processContext_.y = y;
        this.processContext_.rsqr = radius * radius;
        this.processContext_.type = 2;
        this.processContext_.ballId = ballId;
        this.ballRect_.init(x - radius, y - radius, x + radius, y + radius);
    }

    public processLeaf(starArr: Array<StarStaticInfo>): void {
        for (let x = this.processContext_.x, y = this.processContext_.y, radius = this.processContext_.rsqr, i = 0, len = starArr.length; i < len; ++i) {
            const offsetX: number = x - starArr[i].x;
            const offsetY: number = y - starArr[i].y;
            const distance: number = offsetX * offsetX + offsetY * offsetY;

            if (radius >= distance) {
                starArr[i].active = false;

                if (this.processContext_.type === 2) {

                }
            }
        }
    }

    public drawStaticStar(starArr: Array<StarStaticInfo>): void {

    }

    private initStarTree(): void {
        this.starTree_ = new BattleQuadTree();
        this.starTree_.create(5, new BattleRect(0, 0, Battle.WorldSqrEdgeLength, Battle.WorldSqrEdgeLength));
        this.starTree_.buildTree(this.starConfig_);
    }

    private initStarInfo(data: Array<any>): void {
        if (data.length === 0) {
            this.showAllStar(false);
            return;
        }

        for (let row = 0; row < data.length; ++row) {
            for (let col = 0; col < 32; ++col) {
                const index: number = 32 * row + col;

                if (index <= this.starTotalNum) {
                    const active: boolean = (data[row] & 1 << col) !== 0;
                    const starData: StarStaticInfo = this.starConfig_[index];

                    if (starData.x < Battle.WorldSqrEdgeLength && starData.y < Battle.WorldSqrEdgeLength) {
                        starData.active = active;
                    }
                    else {
                        starData.active = false;
                    }
                }
            }
        }
    }

    private showStar(index: number, active: boolean): void {
        if (0 > index || index >= this.starTotalNum) {
            console.log("StarSystem.showStar: invalid index " + index);
            return;
        }

        if (index < this.starTotalNum) {
            const starData: StarStaticInfo = this.starConfig_[index];

            if (starData.active === active) {
                return;
            }

            const rect: egret.Rectangle = Battle.getInstance().viewRect;
            starData.active = active;

            if (!active && rect.contains(starData.x, starData.y)) {
                this.hideStar_.push(index);
            }
        }
    }

    private recordStar(starData: StarStaticInfo, ballId: number): void {
        //this.flyToBall(starData, ballId);
    }

    private flyToBall(starData: StarStaticInfo, ballId: number): void {
        const starFly: BattleStarFly = this.getStagePoolStar();
        starFly.flyToBall(starData, ballId);
    }

    private getStagePoolStar() {
        return this.stagePool_.length > 0 ? this.stagePool_.pop() : new BattleStarFly();
    }

    private reset(): void {
        this.starConfig_ = null;
        this.starTotalNum = 0;
        this.starCount = 0;
        this.ballRect_ = new BattleRect();
        this.starRenderRect_ = new BattleRect();
        this.processContext_ = {
            x: 0,
            y: 0,
            rsqr: 0,
            type: 1,
            ballId: 0,
        };
        this.flyStarDic_ = new Dictionary();
    }

    public onEnterRoom(cmd: any): void {
        this.starDic_ = {};
        this.starCount = 0;
        this.initStar();
        this.initStarInfo(cmd.stars);
    }

    public onExitRoom(cmd: any): void {
        this.flyStarDic_.clear();
    }

    set starCount(value) {
        this.starCount_ = value;
    }

    get starCount() {
        return this.starCount_;
    }

    set starTotalNum(value) {
        this.starTotalNum_ = value;
    }

    get starTotalNum() {
        return this.starTotalNum_;
    }

    set zoom(value) {
        this.zoom_ = value;
    }

    get zoom() {
        return this.zoom_;
    }

    set half(value) {
        this.half_ = value;
    }

    get half() {
        return this.half_;
    }

    set efStarAdd(value) {
        this.efStarAdd_ = value;
    }

    get efStarAdd() {
        return this.efStarAdd_;
    }

    set maxNum(value) {
        this.maxNum_ = value;
    }

    get maxNum() {
        return this.maxNum_;
    }
}