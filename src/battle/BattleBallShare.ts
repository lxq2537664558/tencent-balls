class BattleBallShare {
    private inStageBall_: Array<any>;
    private stageBallNum_: number;
    private sharePool_: ObjectPool;
    private battleShareMark_: Dictionary;

    constructor() {
        this.inStageBall_ = [];
        this.stageBallNum = 0;
        this.sharePool_ = new ObjectPool();
        this.battleShareMark_ = new Dictionary();
    }

    public preCreate(): void {
        this.sharePool_.create("BattleBallTitle", 30);
    }

    public createBallTitle(): any {
        return this.sharePool_.pop("BattleBallTitle");
    }

    public push(ballTitle: BattleBallTitle): void {
        if (!ballTitle) {
            return;
        }

        if (ballTitle.parent !== null) {
            ballTitle.parent.removeChild(ballTitle);
        }

        this.sharePool_.push(ballTitle);
    }

    public addUrlMark(url: string): void {
        this.battleShareMark_.add(url, 0);
    }

    public reset(): void {
        this.sharePool_.clear("BattleBallTitle");
        this.inStageBall_.length = 0;
        this.stageBallNum = 0;
    }

    public destroy(): void {
        this.sharePool_ = null;
        const keys: Array<string> = this.battleShareMark_.keys;

        for (let i = 0, len = keys.length; i < len; ++i) {
            RES.destroyRes(keys[i]);
        }

        this.battleShareMark_.reset();
        this.battleShareMark_ = null;
        this.inStageBall_ = null;
        this.stageBallNum = 0;
    }

    set stageBallNum(value) {
        this.stageBallNum_ = value;
    }

    get stageBallNum() {
        return this.stageBallNum_;
    }
}