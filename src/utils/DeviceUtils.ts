class DeviceUtils {
    public static isHtml5(): boolean {
        return egret.Capabilities.runtimeType === egret.RuntimeType.WEB;
    }

    public static isNative(): boolean {
        return egret.Capabilities.runtimeType === egret.RuntimeType.NATIVE;
    }

    public static isMobile(): boolean {
        return egret.Capabilities.isMobile;
    }

    public static isPC(): boolean {
        return !egret.Capabilities.isMobile;
    }

    public static isIOS(): boolean {
        const os: string = egret.Capabilities.os;

        return os === "iOS" || os === "Mac OS";
    }

    public static isQQBrowser(): boolean {
        return this.isHtml5() && navigator.userAgent.indexOf("MQQBrowser") !== -1;
    }

    public static isIEBrowser(): boolean {
        return this.isHtml5() && navigator.userAgent.indexOf("MSIE") !== -1;
    }

    public static isFirefoxBrowser(): boolean {
        return this.isHtml5() && navigator.userAgent.indexOf("Firefox") !== -1;
    }

    public static isChromeBrowser(): boolean {
        return this.isHtml5() && navigator.userAgent.indexOf("Chrome") !== -1;
    }

    public static isSafariBrowser(): boolean {
        return this.isHtml5() && navigator.userAgent.indexOf("Safari") !== -1;
    }

    public static isOperaBrowser(): boolean {
        return this.isHtml5() && navigator.userAgent.indexOf("Opera") !== -1;
    }        
}