class AnnouncementManager {
    private static instance_: AnnouncementManager;

    private isShowing_: boolean;
    private cacheList_: Array<Announcement>;
    private annoucementUI_: AnnouncementUI;
    private topView_: egret.DisplayObjectContainer;
    private currAnnouncement_: Announcement;

    constructor() {
        this.cacheList_ = [];
    }

    public static getInstance(): AnnouncementManager {
        if (!this.instance_) {
            this.instance_ = new AnnouncementManager();
        }

        return this.instance_;
    }

    public init(topView: egret.DisplayObjectContainer): void {
        this.topView_ = topView;
        this.annoucementUI_ = new AnnouncementUI();
    }

    public pushAnnounce(announcement: Announcement): void {
        this.cacheList_.push(announcement);
    }

    public onTick(timestamp: number): void {
        if (BattleManager.getInstance().isInGame) {
            this.hideUI();
            return;
        }

        if (this.isShowing) {
            this.annoucementUI_.onTick(timestamp);
        }

        for (let i = 0, len = this.cacheList_.length; i < len; ++i) {
            this.cacheList_[i].updateCoolDown(timestamp);
        }

        if (this.cacheList_.length !== 0 && !this.isShowing) {
            const announcement: Announcement = this.cacheList_[0];

            if (announcement.showTimes > 0 && announcement.coolDown) {
                this.isShowing = true;
                this.currAnnouncement_ = announcement;
                announcement.showAnnouncement();
                --announcement.showTimes;
                announcement.coolDown = false;
                this.cacheList_.shift();

                if (announcement.showTimes > 0) {
                    this.cacheList_.push(announcement);
                }
            }
        }
    }

    public hideUI(): void {
        this.isShowing = false;

        if (this.annoucementUI_ && this.annoucementUI_.parent) {
            this.topView_.removeChild(this.annoucementUI_);
        }

        if (this.currAnnouncement_) {
            this.currAnnouncement_.nextShowTimestamp = -1;
            this.currAnnouncement_ = null;
        }
    }

    set isShowing(value) {
        this.isShowing_ = value;
    }

    get isShowing() {
        return this.isShowing_;
    }

    get announcementUI() {
        return this.annoucementUI_;
    }

    get topView() {
        return this.topView_;
    }
}