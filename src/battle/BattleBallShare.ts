class BattleBallShare {
    private inStageBalls_: Array<BattleBallTitle>;
    private stageBallNum_: number;
    private sharePool_: ObjectPool;
    private battleUrlMark_: Dictionary;

    constructor() {
        this.inStageBalls_ = [];
        this.stageBallNum_ = 0;
        this.sharePool_ = new ObjectPool();
        this.battleUrlMark_ = new Dictionary();
    }

    public preCreate(): void {
        this.sharePool_.create("BattleBallTitle", 30);
    }

    public createBallTitle(): BattleBallTitle {
        return this.sharePool_.pop("BattleBallTitle");
    }

    public pushStageBall(ball: BattleBallTitle): boolean {
        if (this.stageBallNum_ >= 10) {
            return false;
        }

        ++this.stageBallNum_;
        this.inStageBalls_.push(ball);

        return true;
    }

    public popStageBall(): BattleBallTitle {
        return this.stageBallNum_ <= 0 ? null : (--this.stageBallNum_, this.inStageBalls_.pop());
    }

    public addUrlMark(url: string): void {
        this.battleUrlMark_.add(url, 0);
    }

    public reset(): void {
        this.sharePool_.clear("BattleBallTitle");
        this.inStageBalls_.length = 0;
        this.stageBallNum_ = 0;
    }

    public cleanup(): void {
        this.sharePool_ = null;
        const array: Array<string> = this.battleUrlMark_.keys;

        for (let i = 0, len = array.length; i < len; ++i) {
            RES.destroyRes(array[i]);
        }

        this.battleUrlMark_.clear();
        this.battleUrlMark_ = null;
        this.inStageBalls_ = null;
    }
}