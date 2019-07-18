//////////////////////////////////////////////////////////////////////////////////////
//
//  Copyright (c) 2014-present, Egret Technology.
//  All rights reserved.
//  Redistribution and use in source and binary forms, with or without
//  modification, are permitted provided that the following conditions are met:
//
//     * Redistributions of source code must retain the above copyright
//       notice, this list of conditions and the following disclaimer.
//     * Redistributions in binary form must reproduce the above copyright
//       notice, this list of conditions and the following disclaimer in the
//       documentation and/or other materials provided with the distribution.
//     * Neither the name of the Egret nor the
//       names of its contributors may be used to endorse or promote products
//       derived from this software without specific prior written permission.
//
//  THIS SOFTWARE IS PROVIDED BY EGRET AND CONTRIBUTORS "AS IS" AND ANY EXPRESS
//  OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES
//  OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED.
//  IN NO EVENT SHALL EGRET AND CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT,
//  INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
//  LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;LOSS OF USE, DATA,
//  OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF
//  LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
//  NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE,
//  EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
//
//////////////////////////////////////////////////////////////////////////////////////

class Main extends eui.UILayer {
    private loadingUI_: LoadingUI;
    private headingUI_: HeadingUI;
    private isThemeLoadCompleted_: boolean;
    private isResLoadCompleted_: boolean;
    private isConfigLoadCompleted_: boolean;

    protected createChildren(): void {
        super.createChildren();

        egret.lifecycle.addLifecycleListener((context) => {
            // custom lifecycle plugin
        })

        egret.lifecycle.onPause = () => {
            egret.ticker.pause();
        }

        egret.lifecycle.onResume = () => {
            egret.ticker.resume();
        }

        //inject the custom material parser
        //注入自定义的素材解析器
        let assetAdapter = new AssetAdapter();
        egret.registerImplementation("eui.IAssetAdapter", assetAdapter);
        egret.registerImplementation("eui.IThemeAdapter", new ThemeAdapter());
        RES.setMaxLoadingThread(2);

        if (platform.isWXGame()) {
            wxsdk.enabled = true;
        }
        else if (platform.isH5Game()) {
            h5sdk.enabled = true;
        }

        URLParams.getInstance().init();
        console.log("Main.createChildren");
        this.startLoadingConfig();
    }

    private async runGame() {
        console.log("Main.runGame");
        await platform.login();
        await platform.getUserInfo();
        ApplicationFacade.getInstance().startup(this);
        this.getServiceState();
    }

    private getServiceState(): void {
        // const http: egret.HttpRequest = new egret.HttpRequest();
        // http.responseType = egret.HttpResponseType.TEXT;
        // http.open(SocketConfig.getInstance().httpsServiceState + "?v=" + TimeUtils.getInstance().now, egret.HttpMethod.GET);
        // http.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
        // http.send();
        // http.addEventListener(egret.Event.COMPLETE, this.onGetServiceStateCompleted, this);
        // http.addEventListener(egret.IOErrorEvent.IO_ERROR, this.onGetServiceStateError, this);
    }

    private startLoadingConfig(): void {
        if (wxsdk.enabled) {
            wx.showLoading({
                title: "全民球吃球",
            });
        }

        RES.addEventListener(RES.ResourceEvent.CONFIG_COMPLETE, this.onLoadingConfigCompleted, this);
        RES.loadConfig(URLParams.getInstance().getMainVerConfigPath("default.res.json"), URLParams.getInstance().baseResUrl);
    }

    public startLoading(): void {
        this.loadingUI = new LoadingUI();
        this.addChild(this.loadingUI);
        this.loadingUI.initAssets(this.stage);
        this.loadingUI.setProgress(10);
        this.onConfigComplete();
    }

    public startGame(): void {
        console.log("Main.startGame");

        // if (this.headingUI !== null) {
        //     this.removeChild(this.headingUI);
        //     this.headingUI = null;
        // }

        this.runGame()["catch"](e => {
            console.log("Main.startGame.runGame:", e);
        });
        this.otherInit();
    }

    private otherInit(): void {
        console.log("Main.otherInit");
        egret.Bitmap.defaultTouchEnabled = false;
        TextTextureCaches.getInstance().init();
    }

    private startup(): void {
        if (this.isThemeLoadCompleted && this.isResLoadCompleted && this.isConfigLoadCompleted) {
            // console.log("Main.startup");
            // this.removeChildren();
            // this.loadingUI = null;
            // this.headingUI = new HeadingUI(this);
            // this.addChild(this.headingUI);
            this.startGame();
        }
    }

    private onLoadingConfigCompleted(e: RES.ResourceEvent): void {
        console.log("Main.onLoadingConfigCompleted");
        RES.removeEventListener(RES.ResourceEvent.CONFIG_COMPLETE, this.onLoadingConfigCompleted, this);
        RES.addEventListener(RES.ResourceEvent.GROUP_COMPLETE, this.onLoadingGroupCompleted, this);
        RES.loadGroup("preload");
    }

    private onLoadingGroupCompleted(e: RES.ResourceEvent): void {
        console.log("Main.onLoadingGroupCompleted");
        RES.removeEventListener(RES.ResourceEvent.GROUP_COMPLETE, this.onLoadingGroupCompleted, this);

        if (wxsdk.enabled) {
            wx.hideLoading({});
        }

        if (wxsdk.enabled && wxsdk.init(this)) {
            console.log("Main.onLoadingGroupCompleted: ", "wait for wx login complete.");
        }
        else {
            this.startLoading();
        }
    }

    private onConfigComplete(): void {
        console.log("Main.onConfigComplete");
        const theme: eui.Theme = new eui.Theme(URLParams.getInstance().getMainVerConfigPath("default.thm.json"), this.stage);
        theme.addEventListener(eui.UIEvent.COMPLETE, this.onThemeLoadCompleted, this);
        RES.addEventListener(RES.ResourceEvent.GROUP_COMPLETE, this.onResGroupLoadCompleted, this);
        RES.addEventListener(RES.ResourceEvent.GROUP_LOAD_ERROR, this.onResGroupLoadError, this);
        RES.addEventListener(RES.ResourceEvent.GROUP_PROGRESS, this.onResGroupProgress, this);
        RES.addEventListener(RES.ResourceEvent.ITEM_LOAD_ERROR, this.onItemLoadError, this);
        RES.loadGroup("config");
        this.loadingUI.setProgress(40);
    }

    private onThemeLoadCompleted(e: eui.UIEvent): void {
        console.log("Main.onThemeLoadCompleted");
        this.isThemeLoadCompleted = true;
        this.startup();
    }

    private onResGroupLoadCompleted(e: RES.ResourceEvent): void {
        console.log("Main.onResGroupLoadCompleted:", e.groupName);

        if (e.groupName === "config") {
            this.isConfigLoadCompleted = true;
            this.loadingUI.setProgress(70);
            RES.loadGroup("common");
        }
        else if (e.groupName === "common") {
            this.isResLoadCompleted = true;
            this.loadingUI.setProgress(99);
        }

        if (this.isResLoadCompleted && this.isConfigLoadCompleted) {
            RES.removeEventListener(RES.ResourceEvent.GROUP_COMPLETE, this.onResGroupLoadCompleted, this);
            RES.removeEventListener(RES.ResourceEvent.GROUP_LOAD_ERROR, this.onResGroupLoadError, this);
            RES.removeEventListener(RES.ResourceEvent.GROUP_PROGRESS, this.onResGroupProgress, this);
            RES.removeEventListener(RES.ResourceEvent.ITEM_LOAD_ERROR, this.onItemLoadError, this);
            this.startup();
        }
    }

    private onResGroupLoadError(e: RES.ResourceEvent): void {
        console.warn("Main.onResGroupLoadError.groupName:", e.groupName + "加载失败");
        this.loadingUI.showNoticeMessage(e.groupName + "加载失败");
    }

    private onResGroupProgress(e: RES.ResourceEvent): void {
        if (e.groupName === "common") {
            this.loadingUI.setProgress(70 + e.itemsLoaded / e.itemsTotal * 30);
        }
        else if (e.groupName === "config") {
            this.loadingUI.setProgress(40 + e.itemsLoaded / e.itemsTotal * 30);
        }
    }

    private onItemLoadError(e: RES.ResourceEvent): void {
        console.warn("Main.onResGroupLoadError.url:", e.resItem.url, e.resItem.name);
    }

    private onGetServiceStateCompleted(e: egret.Event): void {
        const self = this;
        const http: egret.HttpRequest = e.currentTarget;
        http.removeEventListener(egret.Event.COMPLETE, this.onGetServiceStateCompleted, this);
        http.removeEventListener(egret.IOErrorEvent.IO_ERROR, this.onGetServiceStateError, this);
        const serverStatusInfo: any = JSON.parse(http.response);
        console.log("Main.onGetServiceStateCompleted.serverStatusInfo:", serverStatusInfo.status);
        let tips: string = "服务器状态";

        if (serverStatusInfo.status === 0) {
            ApplicationFacade.getInstance().startup(this);
        }
        else if (serverStatusInfo.status === -1) {
            tips = "服务器：维护";
        }
        else {
            tips = "服务器: 爆满";
        }

        if (wxsdk.enabled) {
            wx.showModal({
                title: "服务器状态",
                content: tips,
                showCancel: false,
                cancelText: "",
                cancelColor: "#000000",
                confirmText: "确定",
                confirmColor: "#000000",
                success: (res: any) => {
                    egret.setTimeout(self.getServiceState, self, 5000);
                },
            });
        }
    }

    private onGetServiceStateError(e: egret.IOErrorEvent): void {
        const self = this;
        const http: egret.HttpRequest = e.currentTarget;
        console.log("Main.onGetServiceStateError: ", e);
        http.removeEventListener(egret.Event.COMPLETE, this.onGetServiceStateCompleted, this);
        http.removeEventListener(egret.IOErrorEvent.IO_ERROR, this.onGetServiceStateError, this);

        if (wxsdk.enabled) {
            wx.showModal({
                title: "服务器状态",
                content: "状态请求失败",
                showCancel: false,
                cancelText: "",
                cancelColor: "#000000",
                confirmText: "重试",
                confirmColor: "#000000",
                success: function (e) {
                    egret.setTimeout(self.getServiceState, self, 5000);
                },
            });
        }
    }

    set loadingUI(value) {
        this.loadingUI_ = value;
    }

    get loadingUI() {
        return this.loadingUI_;
    }

    set headingUI(value) {
        this.headingUI_ = value;
    }

    get headingUI() {
        return this.headingUI_;
    }

    set isThemeLoadCompleted(value) {
        this.isThemeLoadCompleted_ = value;
    }

    get isThemeLoadCompleted() {
        return this.isThemeLoadCompleted_;
    }

    set isResLoadCompleted(value) {
        this.isResLoadCompleted_ = value;
    }

    get isResLoadCompleted() {
        return this.isResLoadCompleted_;
    }

    set isConfigLoadCompleted(value) {
        this.isConfigLoadCompleted_ = value;
    }

    get isConfigLoadCompleted() {
        return this.isConfigLoadCompleted_;
    }
}
