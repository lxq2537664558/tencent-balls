class GameEnvInfo {
    public static env(): string {
        return URLParams.getEnv();
    }

    public static isDev(): boolean {
        return this.env().indexOf("dev") >= 0;
    }

    public static isQA(): boolean {
        return this.env().indexOf("qa") >= 0;
    }

    public static isDesign(): boolean {
        return this.env().indexOf("design") >= 0;
    }

    public static isProd(): boolean {
        return this.env().indexOf("prod") >= 0;
    }

    public static isRelese(): boolean {
        return this.env().indexOf("release") >= 0;
    }

    public static isTestRelease(): boolean {
        return this.env().indexOf("test-release") >= 0;
    }
}