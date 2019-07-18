class TimePointInfo {
    private hours_: number;
    private minutes_: number;

    constructor(hours: number, minutes: number) {
        this.hours = hours;
        this.minutes = minutes;
    }

    set hours(value) {
        this.hours_ = value;
    }

    get hours() {
        return this.hours_;
    }

    set minutes(value) {
        this.minutes_ = value;
    }

    get minutes() {
        return this.minutes_;
    }
}