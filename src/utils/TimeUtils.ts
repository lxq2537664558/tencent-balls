class TimeUtils {
    private static instance_: TimeUtils;

    private enterFrameTimer_: number;
    private enterFrameTimerSecond_: number;

    constructor() {
        this.enterFrameTimer = 0;
    }

    public static getInstance(): TimeUtils {
        if (!this.instance_) {
            this.instance_ = new TimeUtils();
        }

        return this.instance_;
    }

    public getCurrDayTimestamp(timestamp: string): number {
        if (!timestamp || 0 >= timestamp.length) {
            return 0;
        }

        const timestampParts: Array<string> = timestamp.split(":");

        if (!timestampParts || timestampParts.length !== 3) {
            return -1;
        }

        const hours: number = +timestampParts[0];
        const minutes: number = +timestampParts[1];
        const seconds: number = +timestampParts[2];
        const now: Date = new Date();
        const curr: Date = new Date(now.getFullYear(), now.getMonth(), now.getDate(), hours, minutes, seconds);

        return Date.parse(curr.toDateString());
    }

    public getCurrLocalTimestamp(): number {
        return Math.floor(new Date().getTime() / 1000);
    }

    public formatMMSS(timestamp: number): string {
        if (!timestamp) {
            timestamp = 0;
        }

        let result: string = "";
        let seconds: number = timestamp / Constants.SECOND_IN_MILLISECONDS;
        let minutes: number = Math.floor(seconds / 60);
        seconds = Math.floor(seconds % 60);

        if (10 > minutes) {
            result = "";
        }

        result += minutes.toString();
        result += ":";

        if (10 > seconds) {
            result += "0";
        }

        result += seconds.toString();

        return result;
    }

    public formatHMS(timestamp: number, isCeil?: boolean, isFillZero?: boolean): string {
        if (isCeil === void 0) {
            isCeil = true;
        }

        if (isFillZero === void 0) {
            isFillZero = true;
        }

        let result: string = "";
        const hours: number = Math.floor(timestamp / Constants.SECOND_IN_HOUR);
        result += 10 > hours ? isFillZero ? "0" + hours : hours.toString() : "" + hours;
        const minutes: number = Math.floor((timestamp % Constants.SECOND_IN_HOUR) / Constants.SECOND_IN_MINUTE);
        result += 10 > minutes ? isFillZero ? ":0" + minutes : minutes.toString() : ":" + minutes;
        const seconds: number = isCeil ? Math.ceil(timestamp % Constants.SECOND_IN_MINUTE) : Math.floor(timestamp % Constants.SECOND_IN_MINUTE);
        result += 10 > seconds ? isFillZero ? ":0" + seconds : seconds.toString() : ":" + seconds;

        return result;
    }

    public formatMS(timestamp: number, isCeil?: boolean, isFillZero?: boolean): string {
        if (isCeil === void 0) {
            isCeil = true;
        }

        if (isFillZero === void 0) {
            isFillZero = true;
        }

        let result: string = "";
        const minutes: number = Math.floor(timestamp / Constants.SECOND_IN_MINUTE);
        result += 10 > minutes ? isFillZero ? "0" + minutes : minutes.toString() : "" + minutes;
        const seconds: number = isCeil ? Math.ceil(timestamp % Constants.SECOND_IN_MINUTE) : Math.floor(timestamp % Constants.SECOND_IN_MINUTE);
        result += 10 > seconds ? isFillZero ? ":0" + seconds : seconds.toString() : ":" + seconds;

        return result;
    }

    public formatString(timestamp: number): string {
        return timestamp >= Constants.SECOND_IN_HOUR ? this.formatHMS(timestamp) : this.formatMS(timestamp);
    }

    public getTimeInterval(timestamp: number): string {
        if (timestamp === null || timestamp === void 0) {
            return "";
        }

        const timeProxy: TimeProxy = <TimeProxy>(ApplicationFacade.getInstance().retrieveProxy(TimeProxy.NAME));
        const now: number = timeProxy.getCurrTimestamp();
        const diffTimestamp: number = now - timestamp;

        if (Constants.SECOND_IN_MINUTE > diffTimestamp) {
            return "刚刚";
        }

        if (Constants.SECOND_IN_HOUR > diffTimestamp) {
            return Math.floor(diffTimestamp / Constants.MINUTE_IN_HOUR) + "分钟前";
        }

        if (Constants.SECOND_IN_DAY > diffTimestamp) {
            return Math.floor(diffTimestamp / Constants.SECOND_IN_HOUR) + "小时前";
        }

        if (Constants.SECOND_IN_THIRTY_DAYS > diffTimestamp) {
            return Math.floor(diffTimestamp / Constants.SECOND_IN_DAY) + "天前";
        }

        return "30天前";
    }

    public paddingDateElement(value: string): string {
        return "00".slice(value.toString().length) + value.toString();
    }

    public formatLocalDate(now: Date): string {
        const year: string = now.getFullYear().toString();
        const month: string = (now.getMonth() + 1).toString();
        const day: string = now.getDate().toString();
        const hours: string = now.getHours().toString();
        const minutes: string = now.getMinutes().toString();

        return year + "/" + this.paddingDateElement(month) + "/" + this.paddingDateElement(day) + " " + this.paddingDateElement(hours) + ":" + this.paddingDateElement(minutes);
    }

    public formatHHMM(seconds: number): string {
        const now: Date = new Date(Constants.SECOND_IN_MILLISECONDS * seconds);
        const hours: string = now.getHours().toString();
        const minutes: string = now.getMinutes().toString();

        return this.paddingDateElement(hours) + ":" + this.paddingDateElement(minutes);
    }

    public formatHHMMSS(seconds: number): string {
        const now: Date = new Date(Constants.SECOND_IN_MILLISECONDS * seconds);
        const hours: string = now.getHours().toString();
        const minutes: string = now.getMinutes().toString();
        const secs: string = now.getSeconds().toString();

        return this.paddingDateElement(hours) + ":" + this.paddingDateElement(minutes) + ":" + secs;
    }

    public formatYYYYMMDD(seconds: number): string {
        const now: Date = new Date(Constants.SECOND_IN_MILLISECONDS * seconds);
        const year: string = now.getFullYear().toString();
        const month: string = (now.getMonth() + 1).toString();
        const days: string = now.getDate().toString();

        return year + "-" + this.paddingDateElement(month) + "-" + this.paddingDateElement(days);
    }

    public formatMMDDHHMM(seconds: number): string {
        const now: Date = new Date(Constants.SECOND_IN_MILLISECONDS * seconds);
        const month: string = (now.getMonth() + 1).toString();
        const days: string = now.getDate().toString();
        const hours: string = now.getHours().toString();
        const minutes: string = now.getMinutes().toString();

        return this.paddingDateElement(month) + "月" + this.paddingDateElement(days) + "日" + " " + this.paddingDateElement(hours) + ":" + this.paddingDateElement(minutes);
    }

    public formatCountdown(seconds: number): string {
        const minutes: number = Math.floor(seconds / Constants.SECOND_IN_MINUTE);
        const secs: number = Math.floor(seconds - Constants.SECOND_IN_MINUTE * minutes);

        return this.paddingDateElement(minutes.toString()) + ":" + this.paddingDateElement(secs.toString());
    }

    public getAgeByBirthdayStr(birthday: string): number {
        if (birthday === void 0 || birthday === null || birthday.length < 8) {
            birthday = "19000101";
        }
        
        const year: number = +birthday.substr(0, 4);
        const month: number = +birthday.substr(4,  2);
        const days: number = +birthday.substr(6, 2);
        const now: Date = new Date();
        const nowYear: number = now.getFullYear() - year;
        const nowMonth: number = now.getMonth() + 1 - month;
        const nowDays: number = now.getDate() - days;
        const age: number = 0 > nowMonth ? nowYear - 1 : nowMonth > 0 ? nowYear : nowDays >= 0 ? nowYear : nowYear - 1;

        return age;
    }

    set enterFrameTimer(value) {
        this.enterFrameTimer_ = value;
        this.enterFrameTimerSecond = value / Constants.SECOND_IN_MILLISECONDS;
    }

    get enterFrameTimer() {
        return this.enterFrameTimer_;
    }

    set enterFrameTimerSecond(value) {
        this.enterFrameTimerSecond_ = value;
    }

    get enterFrameTimerSecond() {
        return this.enterFrameTimerSecond_;
    }

    get now() {
        return new Date().getTime();
    }
}