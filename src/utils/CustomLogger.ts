class CustomLogger {
    public static isOpen: boolean = true;

    public static trace(prefix: string, ...args): void {
        let msgArr = [];

        for (let i = 0, len = args.length; i < len; ++i) {
            msgArr[i] = args[i];
        }

        if (this.isOpen) {
            console.log("[TRACE] " + prefix + msgArr);
        }
    }

    public static debug(prefix: string, ...args): void {
        let msgArr = [];

        for (let i = 0, len = args.length; i < len; ++i) {
            msgArr[i] = args[i];
        }

        if (this.isOpen) {
            console.log("[DEBUG] " + prefix + msgArr);
        }
    }

    public static info(prefix: string, ...args): void {
        let msgArr = [];

        for (let i = 0, len = args.length; i < len; ++i) {
            msgArr[i] = args[i];
        }

        if (this.isOpen) {
            console.log("[INFO] " + prefix + msgArr);
        }
    }

    public static warn(prefix: string, ...args): void {
        let msgArr = [];

        for (let i = 0, len = args.length; i < len; ++i) {
            msgArr[i] = args[i];
        }

        if (this.isOpen) {
            console.log("[WARN] " + prefix + msgArr);
        }
    }

    public static error(prefix: string, ...args): void {
        let msgArr = [];

        for (let i = 0, len = args.length; i < len; ++i) {
            msgArr[i] = args[i];
        }

        if (this.isOpen) {
            console.log("[ERROR] " + prefix + msgArr);
        }
    }

    public static fatal(prefix: string, ...args): void {
        let msgArr = [];

        for (let i = 0, len = args.length; i < len; ++i) {
            msgArr[i] = args[i];
        }

        if (this.isOpen) {
            console.log("[FATAL] " + prefix + msgArr);
        }
    }
}