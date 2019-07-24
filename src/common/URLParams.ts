class URLParams {
    public static readonly GameVersionKey: string = "GameVersionKey";
    public static uin: string = "";
    public static resType: string = "";
    public static resVersion: number = 0;
    public static mainVersion: number = 0;
    public static gameVersion: string = "";
    public static baseResUrl: string = "resource/";

    public static init(): void {
        const version: string = platform.getGameVersion();
        const versionParts: Array<string> = version.split("|");

        if (4 > versionParts.length) {
            return;
        }

        this.resType = versionParts[0];
        this.resVersion = +versionParts[1];
        this.mainVersion = +versionParts[2];
        this.gameVersion = versionParts[3];
        this.initGameRes();
    }

    public static setEnv(env: string): void {
        this.gameVersion = env;
        this.initGameRes();
    }

    public static getEnv(): string {
        return this.gameVersion;
    }

    public static getMainVersionConfigPath(path: string): string {
        if (this.resType === "local") {
            return this.baseResUrl + path;
        }

        return this.baseResUrl + path + "?v=" + this.mainVersion;
    }

    private static initGameRes(): void {
        switch (this.resType) {
            case "local": {
                this.baseResUrl = "resource/";
            }
            break;
            case "dev":
            case "test-release":
            case "qa": 
            case "design":
            case "prod": {
                this.baseResUrl = "https://dlied5.myapp.com/myapp/1105812367/wx/dev/" + this.resVersion + "/resource/";
            }
            break;
            case "release": {
                this.baseResUrl = "https://dlied5.myapp.com/myapp/1105812367/wx/release/" + this.resType + "/resource/";
            }
            break;
            default: {
                this.baseResUrl = "https://dlied5.myapp.com/myapp/1105812367/wx/dev/" + this.resVersion + "/resource/";
            }
            break;
        }
    }
}