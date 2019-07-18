class GameEnvInfo {
    private static instance_: GameEnvInfo;

    constructor() {

    }

    public static getInstance(): GameEnvInfo {
        if (!this.instance_) {
            this.instance_ = new GameEnvInfo();
        }

        return this.instance_;
    }

    get env() {
        return URLParams.getInstance().env;
    }

    get isDev() {
        const env: string = this.env;

        return env && env.indexOf("dev") >= 0;
    }

    get isTest() {
        const env: string = this.env;

        return env && env.indexOf("test") >= 0;
    }

    get isRelease() {
        const env: string = this.env;

        return env && env.indexOf("release") >= 0;
    }    
}