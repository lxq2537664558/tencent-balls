class Language {
    private static instance_: Language;
    private data_: Object;

    constructor() {
    }

    public static getInstance(): Language {
        if (!this.instance_) {
            this.instance_ = new Language();
        }

        return this.instance_;
    }

    public init(): void {
        this.data_ = RES.getRes("res_languages_json");
    }

    public getStr(key: string): string {
        if (this.data_ !== null && this.data_.hasOwnProperty(key)) {
            return this.data_[key];
        }

        return "Miss language key: " + key;
    }
}