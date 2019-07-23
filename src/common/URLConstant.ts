class URLConstant {
    public static ResBaseUrl: string;
    public static ResUrlAnimation: string;
    public static readonly UrlSharePic: string = "https://dlied5.myapp.com/myapp/1105812367/wx/share/";
    public static readonly UrlOtherPic: string = "http://dlied5.myapp.com/myapp/1105812367/wx/pic/";
    public static readonly AsyncAssetsUrl: string = "assets_url/";

    public static init(baseUrl: string): void {
        this.ResBaseUrl = baseUrl;
        this.ResUrlAnimation = baseUrl + "animation/";
    }
}