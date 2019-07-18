class WXSDK {
    private enabled_: boolean;
    private main_: Main;
    private query_: Object;
    private code_: string;
    private credentialsUserInfo_: Object;
    private userInfo_: Object;
    private isLoggedIn_: boolean;
    private isGuestLogin_: boolean;

    constructor() {
        this.enabled_ = false;
        this.isLoggedIn = true;
        this.isGuestLogin = false;
    }

    public init(main): boolean {
        if (this.enabled) {
            if (main !== null) {
                this.main_ = main;
            }

            this.getOptions();
            this.checkSettings();

            return true;
        }

        return false;
    }

    public login(): void {
        console.log("WXSDK.login:");
        const self = this;

        wx.login({
            success: (res) => {
                if (res.code) {
                    console.log("WXSDK.login:", "获取用户登录态:" + res.code);
                    self.code = res.code;
                    self.getUserInfo();
                }
                else {
                    console.log("WXSDK.login:", "获取用户登录态失败！" + res.errMsg);
                }
            },
        });
    }

    private getUserInfo(): void {
        console.log("WXSDK.getUserInfo:");
        const self = this;

        wx.getUserInfo({
            withCredentials: true,
            success: (res) => {
                console.log("WXSDK.getUserInfo.success:", res.errMsg);
                self.credentialsUserInfo = res;
                self.userInfo = res.userInfo;
                self.getFriends();
            },
            fail: (res) => {
                if (res && res.errMsg && ((res.errMsg.indexOf("auth deny") > -1)
                    || (res.errMsg.indexOf("auth denied") > -1))) {
                    wx.showModal({
                        title: "授权失败",
                        content: "请点击->获取用户信息 授权使用基本信息",
                        showCancel: !1,
                        cancelText: "",
                        cancelColor: "#000000",
                        confirmText: "重试",
                        confirmColor: "#000000",
                        success: (res) => {
                            console.log("WXSDK.getUserInfo.fail.showModal.success:");
                            self.createButton();
                        },
                    });
                }
            },
        });
    }

    private getFriends(): void {
        this.onGetCodeComplete();
    }

    private getOptions(): void {
        const params: LaunchOptions = wx.getLaunchOptionsSync();
        console.log("WXSDK.getOptions.getLaunchOptionsSync:", JSON.stringify(params.query));
        this.query = params.query;
    }

    private checkSettings(): void {
        const self = this;

        wx.getSettings({
            success: (res) => {
                const authSetting = res.authSetting;

                if (authSetting["scope.userInfo"] === !0) {
                    console.log("WXSDK.checkSettings.getSettings:", "用户已授权，可以直接调用相关 API");
                    self.login();
                }
                else if (authSetting["scope.userInfo"] === !1) {
                    console.log("WXSDK.checkSettings.getSettings:", "用户已拒绝授权，再调用相关 API 或者 wx.authorize 会失败，需要引导用户到设置页面打开授权开关");
                    wx.showModal({
                        title: "授权失败",
                        content: "请使用微信登录授权",
                        showCancel: false,
                        cancelText: "",
                        cancelColor: "#000000",
                        confirmText: "重试",
                        confireColor: "#000000",
                        success: (res) => {
                            self.createButton();
                        },
                    });
                }
                else {
                    console.log("WXSDK.checkSettings.getSettings:", "未询问过用户授权，调用相关 API 或者 wx.authorize 会弹窗询问用户");
                    self.createButton();
                }
            },
        });
    }

    private createButton(): void {
    }

    private onGetCodeComplete(): void {
        console.log("wxsdk.onGetCodeComplete");
        this.onPostComplete();
    }

    private onPostComplete(): void {
        if (this.main_) {
            this.main_.startLoading();
        }
    }

    set enabled(value) {
        this.enabled_ = value;
    }

    get enabled() {
        return this.enabled_;
    }

    set query(value) {
        this.query_ = value;
    }

    get query() {
        return this.query_;
    }

    set code(value) {
        this.code_ = value;
    }

    get code() {
        return this.code_;
    }

    set credentialsUserInfo(value) {
        this.credentialsUserInfo_ = value;
    }

    get credentialsUserInfo() {
        return this.credentialsUserInfo_;
    }

    set userInfo(value) {
        this.userInfo_ = value;
    }

    get userInfo() {
        return this.userInfo_;
    }

    set isLoggedIn(value) {
        this.isLoggedIn_ = value;
    }

    get isLoggedIn() {
        return this.isLoggedIn_;
    }

    set isGuestLogin(value) {
        this.isGuestLogin_ = value;
    }

    get isGuestLogin() {
        return this.isGuestLogin_;
    }
}

if (!window.wxsdk) {
    window.wxsdk = new WXSDK();
}

declare let wxsdk: WXSDK;

declare interface Window {
    wxsdk: WXSDK;
}