class Announcement {
    private content_: string;
    private showTimes_: number;
    private showInterval_: number;
    private coolDown_: boolean;
    private nextShowTimestamp_: number;

    constructor(content: string, showTimes: number, showInterval: number) {
        this.content_ = content;
        this.showTimes_ = showTimes;
        this.showInterval_ = showInterval;
        this.nextShowTimestamp_ = 0;
        this.coolDown_ = false;
    }

    public updateCoolDown(timestamp: number): void {
        if (this.nextShowTimestamp_ === 0) {
            this.nextShowTimestamp_ = timestamp + 100;
            return;
        }

        if (this.nextShowTimestamp_ === -1) {
            this.nextShowTimestamp_ = timestamp + 1000 * this.showInterval_;
            this.coolDown_ = false;
        }

        if (!this.coolDown_ && this.nextShowTimestamp_ <= timestamp) {
            this.coolDown_ = true;
            this.nextShowTimestamp_ = timestamp + 1000 * this.showInterval_;
        }
    }

    public showAnnouncement(): void {
        const announcementUI: AnnouncementUI = AnnouncementManager.getInstance().announcementUI;
        AnnouncementManager.getInstance().topView.addChild(announcementUI);
        announcementUI.showAnnouncement(this.content_);
    }

    set showTimes(value) {
        this.showTimes_ = value;
    }

    get showTimes() {
        return this.showTimes_;
    }

    set nextShowTimestamp(value) {
        this.nextShowTimestamp_ = value;
    }

    get nextShowTimestamp() {
        return this.nextShowTimestamp_;
    }

    set coolDown(value) {
        this.coolDown_ = value;
    }

    get coolDown() {
        return this.coolDown_;
    }
}