class ErrorCodeInfo {
    private rawJson_: Object;
    private errorCodeConfigMap_: any;
    private errorCodeConfigList_: Array<Object>;

    constructor() {
        this.rawJson = RES.getRes("res_errorcode_info_json");
        this.errorCodeConfigMap_ = {};
        this.getErrorCodeConfig();
    }

    public getErrorCodeConfig(): Object {
        this.parse();

        return this.errorCodeConfigMap_;
    }

    public getErrorCodeConfigList(): Array<Object> {
        this.parse();

        return this.errorCodeConfigList_;
    }

    public getErrorCode(id: string): string {
        const info: ErrorCodeConfig = this.errorCodeConfigMap_[id];

        if (info) {
            return info.errorCode;
        }

        return null;
    }

    public getErrorCodeDesc(id: string): string {
        const info: ErrorCodeConfig = this.errorCodeConfigMap_[id];

        if (info) {
            return info.desc;
        }

        return null;
    }    

    private parse(): void {
        this.errorCodeConfigList_ = new Array<Object>();

        for (const id in this.rawJson) {
            const error: any = this.rawJson[id];
            const info: ErrorCodeConfig = new ErrorCodeConfig();
            info.errorCode = error.errorcode;
            info.desc = error.desc;
            this.errorCodeConfigList_.push(info);
            this.errorCodeConfigMap_[info.errorCode] = info;
        }
    }

    set rawJson(value) {
        this.rawJson_ = value;
    }

    get rawJson() {
        return this.rawJson_;
    }
}