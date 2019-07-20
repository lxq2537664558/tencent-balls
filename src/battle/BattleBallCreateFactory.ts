class BattleBallCreateFactory {
    private pool_: ObjectPool;
    private share_: BattleBallShare;

    constructor() {
        this.pool_ = new ObjectPool();
        this.share_ = new BattleBallShare();
    }

    public preCreate(): void {
        for (;BattleUtils.bitmapPoolSize() < 100;) {
            BattleUtils.pushBitmap(new egret.Bitmap());
        }

        this.pool_.create("BattleDisplayBall", 30);
        this.pool_.create("BattleSimpleBall", 20);
        this.pool_.create("BattleBallVo", 60);
        this.pool_.create("BattleBeadBall", 30);
        this.share_.preCreate();
    }

    public preCreateStage(): void {
        for (let i = 0; i < 10; ++i) {
            const ball: BattleDisplayBall = this.pool_.pop("BattleDisplayBall");
            
        }
    }

    public onDestroy(): void {
        
    }

    public addUrlMark(url: string): void {
        this.share_.addUrlMark(url);
    }
}