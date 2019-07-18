class VersionInfo {
    private rawJson_: any;
    private major_: number;
    private minor_: number;
    private build_: number;
    private date_: number;

    constructor() {
        this.rawJson_ = RES.getRes("res_version_json");
        this.parse();
    }

    public getVersionString(): string {
        return "v" + this.major.toString() + "." + this.minor.toString() + "." + this.build.toString() + "." + this.date.toString();
    }

    private parse(): void {
        this.major = this.rawJson_.major;
        this.minor = this.rawJson_.minor;
        this.build = this.rawJson_.build;
        this.date = this.rawJson_.date;
    }

    set major(value) {
        this.major_ = value;
    }

    get major() {
        return this.major_;
    }

    set minor(value) {
        this.minor_ = value;
    }

    get minor() {
        return this.minor_;
    }

    set build(value) {
        this.build_ = value;
    }

    get build() {
        return this.build_;
    }

    set date(value) {
        this.date_ = value;
    }

    get date() {
        return this.date_;
    }
}