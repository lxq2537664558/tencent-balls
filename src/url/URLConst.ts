class URLConst {
    public static RES_URL_REAL_ROOT: string;
    public static RES_URL_ANIMATION: string = "animation";
    public static URL_SHARE_PICTURE: string = "https://dlied5.myapp.com/myapp/1105812367/wx/share/";
    public static URL_OTHER_PICTURE: string = "http://dlied5.myapp.com/myapp/1105812367/wx/pic/";
    public static ASYNC_ASSETS_URL: string = "";

    private static instance_: URLConst;

    constructor() {
    }

    public static getInstance(): URLConst {
        if (!this.instance_) {
            this.instance_ = new URLConst();
        }

        return this.instance_;
    }

    public init(baseUrl: string): void {
        URLConst.RES_URL_REAL_ROOT = baseUrl;
        URLConst.RES_URL_ANIMATION = baseUrl + "animation/";
        URLConst.ASYNC_ASSETS_URL = "assets_url/";
    }
}