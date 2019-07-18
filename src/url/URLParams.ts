class URLParams {
    private static instance_: URLParams;
    private resType_: string;
    private resVersion_: number;
    private majorVersion_: number;
    private env_: string;
    private baseResUrl_: string;
    private uin_: string;

    constructor() {
        this.baseResUrl = "resource/";
    }

    public static getInstance(): URLParams {
        if (!this.instance_) {
            this.instance_ = new URLParams();
        }

        return this.instance_;
    }

    public init(): void {
        const params: string = platform.getGameType();
        const paramParts: Array<string> = params.split("|");
        this.resetResType(paramParts[0]);
        this.resVersion = +paramParts[1];
        this.majorVersion = +paramParts[2];
        this.env = paramParts[3];
        URLConst.getInstance().init(this.baseResUrl);
    }

    public resetResType(resType: string): void {
        this.resType = resType;

        switch (this.resType) {
            case "local": {
                this.baseResUrl = "resource/";
            }
            break;
            case "dev": {
            }
            break;
            case "release": {
            }
            break;
            case "qa": {
            }
            break;
            default: {
            }
            break;
        }
    }

    public getMainVerConfigPath(path): string {
        return this.resType === "local" ? this.baseResUrl + path : this.baseResUrl + path + "?v=" + this.majorVersion;
    }

    set resType(value) {
        this.resType_ = value;
    }

    get resType() {
        return this.resType_;
    }

    set resVersion(value) {
        this.resVersion_ = value;
    }

    get resVersion() {
        return this.resVersion_;
    }

    set majorVersion(value) {
        this.majorVersion_ = value;
    }

    get majorVersion() {
        return this.majorVersion_;
    }

    set env(value) {
        this.env_ = value;
    }

    get env() {
        return this.env_;
    }

    set baseResUrl(value) {
        this.baseResUrl_ = value;
    }

    get baseResUrl() {
        return this.baseResUrl_;
    }

    set uin(value) {
        this.uin_ = value;
    }

    get uin() {
        return this.uin_;
    }
}