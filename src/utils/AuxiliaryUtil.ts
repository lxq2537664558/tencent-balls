class AuxiliaryUtil {
    private static instance_: AuxiliaryUtil;
    private rootView_: any;
    private webPlayer_: any;
    private debugEnabled_: boolean;

    constructor() {
        
    }

    public static getInstance(): AuxiliaryUtil {
        if (!this.instance_) {
            this.instance_ = new AuxiliaryUtil();
        }

        return this.instance_;
    }

    public init(view: any, webPlayer: any): void {
        this.rootView_ = view;
        this.webPlayer_ = webPlayer;
        let debugEnabled: boolean = false;

        if (egret.getOption("login-enable-debug") === "true" || document.URL.indexOf("/dev/") >= 0) {
            debugEnabled = true;
        }

        const isPrivateModel = egret.localStorage.getItem("private-model") === "true";

        if (isPrivateModel) {
            console.log = console.warn = console.info = () => {};
        }

        this.debugEnabled = debugEnabled;
    }

    set debugEnabled(value) {
        this.debugEnabled_ = value;
    }

    get debugEnabled() {
        return this.debugEnabled_;
    }
}