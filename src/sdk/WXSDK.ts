class WXSDK {
    private static instance_: WXSDK;
    public static enabled: boolean = false;

    private code_: string;
    private isLogon_: boolean;
    private query_: any;
    private sdkVersion_: string;
    private clubBtn_: any;
    private main_: Main;
    private userInfoBtn_: any;
    private icon_: egret.Bitmap;
    private code2Session_: any;
    private credentialsUserInfo_: any;
    private userInfo_: any;
    private enabled_: boolean;

    constructor() {
        this.sdkVersion = "1.0.0";
        this.isLogon = false;

        if (WXSDK.enabled) {
            this.getSystemInfo();
            wx.showShareMenu({
                withShareTicket: true,
            });
            wx.onShareAppMessage(this.onShareAppMessage);
        }
    }

    public static getInstance(): WXSDK {
        if (!this.instance_) {
            this.instance_ = new WXSDK();
        }

        return this.instance_;
    }

    public init(main: Main): void {
        if (!WXSDK.enabled) {
            return;
        }

        this.main = main;
        this.getOptions();
        this.checkSettings();
    }

    public share(object: any): void {
        wx.shareAppMessage({
            title: object.title,
            imageUrl: object.imageUrl,
            query: object.query,
            success: this.shareSuccessCallback,
            fail: this.shareFailedCallback,
        });
        console.log("w.share: ", object.query);
    }

    public getSystemInfo(): void {
        if (!WXSDK.enabled) {
            return;
        }

        wx.getSystemInfo({
            success: this.systemSuccessCallback,
            fail: this.commonFailedCallback,
        });
    }

    public compareVersion(version: string): boolean {
        if (version === null || version === void 0) {
            version = "1.0.0";
        }

        const versionParts: Array<string> = version.split(".");
        const sdkVersionParts: Array<string> = this.sdkVersion.split(".");
        const length: number = Math.max(versionParts.length, sdkVersionParts.length);

        for (; versionParts.length < length;) {
            versionParts.push("0");
        }

        for (; sdkVersionParts.length < length;) {
            sdkVersionParts.push("0");
        }

        for (let i = 0; i < length; ++i) {
            const lhs: number = parseInt(versionParts[i]);
            const rhs: number = parseInt(sdkVersionParts[i]);

            if (lhs > rhs) {
                return false;
            }
            else if (lhs < rhs) {
                return true;
            }
        }

        return true;
    }

    public showClubButton(isShow: boolean): void {
        if (!this.compareVersion("2.0.3")) {
            return;
        }

        if (!this.clubBtn_) {
            this.clubBtn_ = wx.createGameClubButton({
                icon: "light",
                style: {
                    left: 5,
                    top: GlobalConstant.ScreenHeight - 45,
                    width: 40,
                    height: 40,
                }
            });
        }

        if (isShow) {
            this.clubBtn_.show();
        }
        else {
            this.clubBtn_.hide();
        }
    }

    public getUserInfo(): void {
        console.log("WXSDK.getUserInfo:");
        const self = this;

        wx.getUserInfo({
            withCredentials: true,
            success: (res: any) => {
                self.credentialsUserInfo = res;
                self.userInfo = res.userInfo;
                self.getFriends();
            }
        });
    }

    private getFriends(): void {
        this.onGetCodeCompleted();
    }

    private getOptions(): void {
        if (!WXSDK.enabled) {
            return;
        }

        const options: any = wx.getLaunchOptionsSync();
        this.query = options.query;
        this.referrerInfo(options.referrerInfo);
    }

    private checkSettings(): void {
        if (!WXSDK.enabled) {
            return;
        }

        const self = this;

        wx.getSetting({
            success: (res: any) => {
                const authSetting: any = res.authSetting;

                if (authSetting["scope.userInfo"] === true) {
                    console.log("WXSDK.checkSetting: ", "用户已授权，可以直接调用相关api");
                    self.wxLogin();
                }
                else if (authSetting["scope.userInfo"] === false) {
                    console.log("WXSDK.checkSetting: ", "用户已拒绝授权，引导用户到设置页面打开授权。");
                    wx.showModal({
                        title: "授权失败",
                        content: "请使用微信登录授权",
                        showCancel: false,
                        cancelText: "",
                        cancelColor: "#000000",
                        confirmText: "重试",
                        confirmColor: "#000000",
                        success: () => {
                            self.createButton();
                        },
                        fail: self.commonFailedCallback,
                    });
                }
                else {
                    console.log("WXSDK.checkSetting: ", "未询问过用户授权");
                    self.createButton();
                }
            },
        });
    }

    private wxLogin(): void {

    }

    private createButton(): void {
        if (this.userInfoBtn !== void 0 && this.userInfoBtn !== null) {
            return;
        }

        const self = this;
        const iconUrl: string = URLConstant.UrlOtherPic + "icon.png";
        this.icon = new egret.Bitmap();
        this.main.addChild(this.icon);
        this.icon.x = this.main.stage.stageWidth / 2 - 72;
        this.icon.y = 400;
        ResourceUtil.getResByUrlRelative(iconUrl, this.onIconCallback, this, RES.ResourceItem.TYPE_IMAGE);
        this.userInfoBtn = wx.createUserInfoButton({
            type: "text",
            text: "微信登录",
            style: {
                left: GlobalConstant.ScreenWidth / 2 - 100,
                top: 100,
                width: 200,
                height: 40,
                lineHeight: 40,
                backgroundColor: "#589800",
                color: "#ffffff",
                textAlign: "center",
                fontSize: 16,
                borderRadius: 4
            }
        });
        this.userInfoBtn.onTap((res: any) => {
            self.userInfoBtn.destroy();
            self.userInfoBtn = null;

            if (self.icon !== null && self.icon !== void 0) {
                if (self.icon.parent) {
                    self.icon.parent.removeChild(self.icon);
                }

                self.icon = null;
            }
        });
    }

    private referrerInfo(referrerInfo: any): void {
        if (referrerInfo === void 0 || referrerInfo === null) {
            return;
        }
    }

    private onIconCallback(): void {

    }

    private onShareAppMessage(): any {
        return {
            title: "我要吃你",
            imageUrl: URLConstant.UrlSharePic + "share1.png",
            query: "inviter_uid=0",
            success: this.shareSuccessCallback,
            fail: this.shareFailedCallback,
        };
    }

    private onGetCodeCompleted(): void {
        if (this.isLogon) {
            return;
        }

        this.isLogon = true;
        const serverInfo: ServerInfo = ConfigManager.getInstance().serverInfo.getServerInfoConfig(GameEnvInfo.env());
        const httpRequest: egret.HttpRequest = new egret.HttpRequest();
        httpRequest.responseType = egret.HttpResponseType.TEXT;
        httpRequest.open(serverInfo.loginUrl, egret.HttpMethod.POST);
        httpRequest.setRequestHeader("Content-Type", "application/json");
        const options: any = wx.getLaunchOptionsSync();
        const query: any = options.query;
        const scene: any = options.scene;
        const params: any = {
            js_code: this.code,
            js_userinfo: null,
            js_friendinfo: null,
            inviter_uid: 0,
            referrer_scene: scene,
        };
        httpRequest.send(JSON.stringify(params));
        httpRequest.addEventListener(egret.Event.COMPLETE, this.onPlatformPostCompleted, this);
        httpRequest.addEventListener(egret.IOErrorEvent.IO_ERROR, this.onPlatformPostIOError, this);
    }

    private onPlatformPostCompleted(e: egret.Event): void {
        if (!this.main) {
            return;
        }

        this.main.startLoading();
        const httpRequest: egret.HttpRequest = e.currentTarget;
        httpRequest.removeEventListener(egret.Event.COMPLETE, this.onPlatformPostCompleted, this);
        httpRequest.removeEventListener(egret.IOErrorEvent.IO_ERROR, this.onPlatformPostIOError, this);
        console.log("WXSDK.onPlatformPostCompleted:");
        const response: any = JSON.parse(httpRequest.response);
        this.code2Session = response;
        this.main.startLoading();
        wx.onShow(this.onShowChange);
        wx.onHide(this.onHideChange);
    }

    private onPlatformPostIOError(e: egret.IOErrorEvent): void {
        const self = this;
        const httpRequest: egret.HttpRequest = e.currentTarget;
        console.log("WXSDK.onPlatformPostIOError:");
        httpRequest.removeEventListener(egret.Event.COMPLETE, this.onPlatformPostCompleted, this);
        httpRequest.removeEventListener(egret.IOErrorEvent.IO_ERROR, this.onPlatformPostIOError, this);
        wx.showModal({
            title: "服务器异常",
            content: "登录服务器失败",
            showCancel: !1,
            cancelText: "",
            cancelColor: "#000000",
            confirmText: "重试",
            confirmColor: "#000000",
            success: function (t) {
                egret.setTimeout(self.onGetCodeCompleted, self, 3000);
            },
            fail: self.commonFailedCallback
        });
    }

    private onShowChange(): void {

    }

    private onHideChange(): void {
        ApplicationFacade.getInstance().sendNotification(GameCommand.PauseGame, false);
    }

    private shareSuccessCallback(): void {
        ApplicationFacade.getInstance().sendNotification(CommonCommand.ToShare, null, GlobalConstant.ShareSuccess);
    }

    private shareFailedCallback(): void {

    }

    private commonFailedCallback(res: any): void {
        console.log("WXSDK.commonFailedCallback: ", res);
    }

    private systemSuccessCallback(res: any): void {
        console.log("WXSDK.systemSuccessCallback: ", res);
        this.sdkVersion = res.SDKVersion;
        GlobalConstant.ScreenWidth = res.screenWidth;
        GlobalConstant.ScreenHeight = res.screenHeight;
        GlobalConstant.SafeHeight = Math.min(GlobalConstant.ScreenWidth / 1280 * 720 - 720, 720);
    }

    set code(value) {
        this.code_ = value;
    }

    get code() {
        return this.code_;
    }

    set isLogon(value) {
        this.isLogon_ = value;
    }

    get isLogon() {
        return this.isLogon_;
    }

    set query(value) {
        this.query_ = value;
    }

    get query() {
        return this.query_;
    }

    set sdkVersion(value) {
        this.sdkVersion_ = value;
    }

    get sdkVersion() {
        return this.sdkVersion_;
    }

    set main(value) {
        this.main_ = value;
    }

    get main() {
        return this.main_;
    }

    set userInfoBtn(value) {
        this.userInfoBtn_ = value;
    }

    get userInfoBtn() {
        return this.userInfoBtn_;
    }

    set icon(value) {
        this.icon_ = value;
    }

    get icon() {
        return this.icon_;
    }

    set code2Session(value) {
        this.code2Session_ = value;
    }

    get code2Session() {
        return this.code2Session_;
    }

    get inviterUid() {
        let uid: string = "";

        if (this.query !== null && this.query !== void 0 && this.query.inviter_uid !== null
            && this.query.inviter_uid !== void 0) {
            uid = this.query.inviter_uid;
        }

        return uid;
    }

    get inviterTeamId() {
        let teamid: string = "";

        if (this.query !== null && this.query !== void 0 && this.query.inviter_teamid !== null
            && this.query.inviter_teamid !== void 0) {
            teamid = this.query.inviter_teamid;
        }

        return teamid;
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

    set enabled(value) {
        this.enabled_ = value;
    }

    get enabled() {
        return this.enabled_;
    }
}