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
    private isThemeLoadCompleted_: boolean;
    private isResourceLoadCompleted_: boolean;
    private isConfigLoadCompleted_: boolean;
    private loadingUI_: LoadingUI;
    private headingUI_: HeadingUI;

    public startLoadingConfig(): void {
        if (WXSDK.enabled) {
            wx.showLoading({
                title: "凯爷球吃球",
            });
        }

        RES.addEventListener(RES.ResourceEvent.CONFIG_COMPLETE, this.onLoadingConfigCompleted, this);
        RES.loadConfig(URLParams.getMainVersionConfigPath("default.res.json"), URLParams.baseResUrl);
    }

    public startLoading(): void {
        this.loadingUI_ = new LoadingUI();
        this.addChild(this.loadingUI_);
        this.loadingUI_.initAssets(this.stage);
        this.loadingUI_.setProgress(10);
        this.onConfigCompleted();
    }

    public startup(): void {
        if (this.isThemeLoadCompleted && this.isResourceLoadCompleted && this.isConfigLoadCompleted) {
            console.log("Main.startup:");
            this.removeChildren();
            this.loadingUI_ = null;
            this.headingUI_ = new HeadingUI(this);
            this.addChild(this.headingUI_);
        }
    }

    public startGame(): void {
        console.log("Main.startGame:");

        if (this.headingUI_ !== null && this.headingUI_ !== void 0) {
            this.removeChild(this.headingUI_);
            this.headingUI_ = null;
        }

        this.runGame()["catch"]((e) => {
            console.log(e);
        });
    }

    private onConfigCompleted(): void {
        console.log("Main.onConfigCompleted:");
        const theme: eui.Theme = new eui.Theme(URLParams.getMainVersionConfigPath("default.thm.json"), this.stage);
        theme.addEventListener(eui.UIEvent.COMPLETE, this.onThemeLoadCompleted, this);
        RES.addEventListener(RES.ResourceEvent.GROUP_COMPLETE, this.onResourceLoadCompleted, this);
        RES.addEventListener(RES.ResourceEvent.GROUP_LOAD_ERROR, this.onResourceLoadError, this);
        RES.addEventListener(RES.ResourceEvent.GROUP_PROGRESS, this.onResourceLoadProgress, this);
        RES.addEventListener(RES.ResourceEvent.ITEM_LOAD_ERROR, this.onItemLoadError, this);
        RES.loadGroup("config");
        this.loadingUI_.setProgress(40);
    }

    private onThemeLoadCompleted(e: eui.UIEvent): void {
        console.log("Main.onThemeLoadCompleted");
        this.isThemeLoadCompleted = true;
        this.startup();
    }

    private onResourceLoadCompleted(e: RES.ResourceEvent): void {
        if (e.groupName === "config") {
            this.isConfigLoadCompleted = true;
            this.loadingUI_.setProgress(70);
            RES.loadGroup("common");
        }
        else if (e.groupName === "common") {
            this.isResourceLoadCompleted = true;
            this.loadingUI_.setProgress(99);
        }

        if (this.isResourceLoadCompleted && this.isConfigLoadCompleted) {
            RES.removeEventListener(RES.ResourceEvent.GROUP_COMPLETE, this.onResourceLoadCompleted, this);
            RES.removeEventListener(RES.ResourceEvent.GROUP_LOAD_ERROR, this.onResourceLoadError, this);
            RES.removeEventListener(RES.ResourceEvent.GROUP_PROGRESS, this.onResourceLoadProgress, this);
            RES.removeEventListener(RES.ResourceEvent.ITEM_LOAD_ERROR, this.onItemLoadError, this);
            this.startup();
        }
    }

    private onResourceLoadError(e: RES.ResourceEvent): void {
        console.log("Main.onResourceLoadError: ", "GroupName: " + e.groupName + " has failed to load.");
        this.loadingUI_.showNoticeMessage();
    }

    private onResourceLoadProgress(e: RES.ResourceEvent): void {
        if (e.groupName === "common") {
            this.loadingUI_.setProgress(70 + e.itemsLoaded / e.itemsTotal * 30);
        }
        else  if (e.groupName === "config") {
            this.loadingUI_.setProgress(40 + e.itemsLoaded / e.itemsTotal * 30);
        }
    }

    private onItemLoadError(e: RES.ResourceEvent): void {
        console.log("Main.onItemLoadError: ", " Url: " + e.resItem.url + " has failed to load.");
    }

    private onLoadingConfigCompleted(e: RES.ResourceEvent): void {
        console.log("Main.onConfigLoadCompleted:");
        RES.removeEventListener(RES.ResourceEvent.CONFIG_COMPLETE, this.onLoadingConfigCompleted, this);
        RES.addEventListener(RES.ResourceEvent.GROUP_COMPLETE, this.onLoadingLoadCompleted, this);
        RES.loadGroup("loading");
    }

    private onLoadingLoadCompleted(e: RES.ResourceEvent): void {
        console.log("Main.onLoadingLoadCompleted:");
        RES.removeEventListener(RES.ResourceEvent.GROUP_COMPLETE, this.onLoadingLoadCompleted, this);

        if (WXSDK.enabled) {
            WXSDK.getInstance().init(this);
        }

        this.startLoading();
    }

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
            WXSDK.getInstance().enabled = true;
        }
        else if (platform.isH5Game()) {
            H5SDK.getInstance().enabled = true;
        }

        URLParams.init();
        this.startLoadingConfig();
    }

    private async runGame() {
        egret.Bitmap.defaultTouchEnabled = false;
        TextTextureCaches.getInstance().init();

        if (!WXSDK.enabled) {
            ApplicationFacade.getInstance().startup(this);
        }
    }

    private async loadResource() {
        try {
        }
        catch (e) {
            console.error(e);
        }
    }

    set isThemeLoadCompleted(value) {
        this.isThemeLoadCompleted_ = value;
    }

    get isThemeLoadCompleted() {
        return this.isThemeLoadCompleted_;
    }

    set isResourceLoadCompleted(value) {
        this.isResourceLoadCompleted_ = value;
    }

    get isResourceLoadCompleted() {
        return this.isResourceLoadCompleted_;
    }

    set isConfigLoadCompleted(value) {
        this.isConfigLoadCompleted_ = value;
    }

    get isConfigLoadCompleted() {
        return this.isConfigLoadCompleted_;
    }
}
