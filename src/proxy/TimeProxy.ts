class TimeProxy extends Proxy {
    public static NAME: string = "TimeProxy";
    public static TimeInit: string = "TimeInit";
    public static TimePoint: string = "TimePoint";

    private loginServerTime_: number;
    private loginLocalTime_: number;
    private checkTimePoint_: Array<TimePointInfo>;
    private updateTimer_: egret.Timer;
    private currTimePoint_: TimePointInfo;

    constructor() {
        super();

        this.checkTimePoint_ = new Array<TimePointInfo>();
        this.updateTimer_ = new egret.Timer(1000, 0);
        this.loginLocalTime = TimeUtils.getInstance().getCurrLocalTimestamp();
        this.init();
    }

    public formatTime(timestamp: number): Object {
        let now = timestamp;
        const day: number = Math.floor(now / Constants.SECOND_IN_DAY);
        now -= 24 * day * Constants.SECOND_IN_HOUR;
        const hours: number = Math.floor(now / Constants.SECOND_IN_HOUR);
        now -= Constants.SECOND_IN_HOUR * hours;
        const minutes: number = Math.floor(now / Constants.SECOND_IN_MINUTE);
        const seconds: number = now - Constants.SECOND_IN_MINUTE * minutes;

        return {
            day,
            hours,
            minutes,
            seconds,
        }
    }

    public getCurrTimestamp(): number {
        return this.loginServerTime + (TimeUtils.getInstance().getCurrLocalTimestamp() - this.loginLocalTime);
    }

    private init(): void {
        this.updateTimer_.addEventListener(egret.TimerEvent.TIMER, this.checkTimePoint, this);
    }

    private initTimePoint(): void {
        this.checkTimePoint_.push(new TimePointInfo(0, 0));
        this.checkTimePoint_.push(new TimePointInfo(5, 0));
        this.checkTimePoint_.push(new TimePointInfo(9, 0));
        this.checkTimePoint_.push(new TimePointInfo(12, 0));
        this.checkTimePoint_.push(new TimePointInfo(12, 30));
        this.checkTimePoint_.push(new TimePointInfo(14, 0));
        this.checkTimePoint_.push(new TimePointInfo(15, 0));
        this.checkTimePoint_.push(new TimePointInfo(18, 0));
        this.checkTimePoint_.push(new TimePointInfo(20, 0));
        this.checkTimePoint_.push(new TimePointInfo(21, 0));
        this.checkTimePoint_.push(new TimePointInfo(23, 0));
    }

    private restartTimer(): void {
        const date: Date = this.getNextTimePoint();

        if (this.updateTimer_) {
            this.updateTimer_.reset();
        }

        this.updateTimer_.start();
    }

    private getNextTimePoint(): Date {
        const timestamp: number = this.getCurrTimestamp();
        const now: Date = this.getCurrDate();

        for (let i = 0, len = this.checkTimePoint_.length; i < len; ++i) {
            const timePoint: TimePointInfo = this.checkTimePoint_[i];
            const date: Date = new Date(now.getFullYear(), now.getMonth(), now.getDate(), timePoint.hours, timePoint.minutes);

            if (timestamp < (date.getTime() / 1000)) {
                this.currTimePoint_ = timePoint;
                return date;
            }
        }

        this.currTimePoint_ = this.checkTimePoint_[0];

        return new Date(now.getFullYear(), now.getMonth(), now.getDate(), this.currTimePoint_.hours, this.currTimePoint_.minutes);
    }

    private checkTimePoint(): void {
        const timestamp: number = this.getCurrTimestamp();

        if (timestamp >= (this.getNextTimePoint().getTime() / 1000)) {
            this.facade.sendNotification(TimeProxy.TimePoint, {
                hours: this.currTimePoint_.hours,
                minutes: this.currTimePoint_.minutes,
            });
            this.restartTimer();
        }
    }

    public onRegister(): void {

    }

    public onRemove(): void {
    }

    private getCurrDate(): Date {
        const timestamp: number = this.getCurrTimestamp();
        const now: Date = new Date();
        now.setTime(timestamp * 1000);

        return now;
    }

    set loginServerTime(value) {
        this.loginServerTime_ = value;
    }

    get loginServerTime() {
        return this.loginServerTime_;
    }

    set loginLocalTime(value) {
        this.loginLocalTime_ = value;
    }

    get loginLocalTime() {
        return this.loginLocalTime_;
    }
}