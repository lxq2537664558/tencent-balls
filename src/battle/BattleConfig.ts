class BattleConfig {
    public static stageWidth: number = 0;
    public static stageHeight: number = 0;
    public static stageRect: egret.Rectangle = new egret.Rectangle();
    public static stageCenterX: number = 0;
    public static stageCenterY: number = 0;

    public static setStage(stage: egret.Stage): void {
        this.stageWidth = stage.stageWidth;
        this.stageHeight = stage.stageHeight;
        this.stageRect.setTo(0, 0, this.stageWidth, this.stageHeight);
        this.stageCenterX = this.stageWidth / 2;
        this.stageCenterY = this.stageHeight / 2;
    }
}