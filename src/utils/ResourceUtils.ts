class ResourceUtils {
    public static getResByUrlGeneral(url: string, func: Function, thisObject: any, type: string): void {
        RES.getResByUrl(url, func, thisObject, type);
    }

    public static getResByUrlRelative(url: string, func: Function, thisObject: any, type: string): void {
        RES.getResByUrl(url, func, thisObject, type);
    }

    public static getResUrl(url: string): string {
        let prefix: string = url.substr(0, 6);

        if (prefix === "https:") {
            return url;
        }

        prefix = url.substr(0, 9);

        if (prefix === "resource/") {
            return URLConst.RES_URL_REAL_ROOT + url.slice(9);
        }

        return URLConst.RES_URL_REAL_ROOT + url;
    }
}