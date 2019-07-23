class ResourceUtil {
    public static getResByUrlGeneral(url: string, listener: Function, thisObject: any, resType: string): void {
        RES.getResByUrl(url, listener, thisObject, resType);
    }

    public static getResByUrlRelative(url: string, listener: Function, thisObject: any, resType: string): void {
        RES.getResByUrl(url, listener, thisObject, resType);
    }

    public static getResUrl(path: string): string {
        if (path.substr(0, 6) === "https:") {
            return path;
        }

        if(path.substr(0, 9) === "resource/") {
            return URLConstant.ResBaseUrl + path.slice(9);
        }

        return URLConstant.ResBaseUrl + path;
    }
}