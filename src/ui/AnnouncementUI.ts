class AnnouncementUI extends eui.Component {
    private nextTimestamp_: number;
    private deltaTime_: number;
    private speed_: number;
    private scroller_: eui.Scroller;
    private content_: eui.Label;
    private tail_: eui.Label;
    private targetScrollH_: number;

    constructor() {
        super();

        this.nextTimestamp = 0;
        this.deltaTime = 30;
        this.speed = 3;
        this.skinName = "AnnoucementSkin";
        this.addEventListener(egret.Event.ADDED_TO_STAGE, this.onAddToStage, this);
    }

    public showAnnouncement(content: string): void {
        this.content_.textFlow = new egret.HtmlTextParser().parse(content);
        this.tail_.width = this.content_.width;
        this.scroller_.viewport.scrollH = 0;
        this.targetScrollH = 600 + this.content_.width;
    }

    public onTick(timestamp: number): void {
        if (this.nextTimestamp === 0) {
            this.nextTimestamp = timestamp;
            this.move(timestamp);
            return;
        }

        if (timestamp >= this.nextTimestamp) {
            this.move(timestamp);
        }
    }

    private move(timestamp: number): void {
        this.nextTimestamp += this.deltaTime;
        this.scroller_.viewport.scrollH += this.speed;
        
        if (this.scroller_.viewport.scrollH >= this.targetScrollH) {
            this.nextTimestamp = 0;
            AnnouncementManager.getInstance().hideUI();
        }
    }

    private onAddToStage(e: egret.Event): void {
        this.removeEventListener(egret.Event.ADDED_TO_STAGE, this.onAddToStage, this);
        this.scroller_.enabled = false;
    }

    set nextTimestamp(value) {
        this.nextTimestamp_ = value;
    }

    get nextTimestamp() {
        return this.nextTimestamp_;
    }

    set deltaTime(value) {
        this.deltaTime_ = value;
    }

    get deltaTime() {
        return this.deltaTime_;
    }

    set speed(value) {
        this.speed_ = value;
    }

    get speed() {
        return this.speed_;
    }

    set targetScrollH(value) {
        this.targetScrollH_ = value;
    }

    get targetScrollH() {
        return this.targetScrollH_;
    }
}