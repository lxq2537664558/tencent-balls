class LoadingStateData {
    public static LOW_NETWORK: string = "LOW_NETWORK";

    private stateName_: string;
    private loaded_: number;
    private total_: number;

    constructor() {
        this.stateName = "Loading...";
        this.loaded = 0;
        this.total = 100;
    }

    set stateName(value) {
        this.stateName_ = value;
    }

    get stateName() {
        return this.stateName_;
    }

    set loaded(value) {
        this.loaded_ = value;
    }

    get loaded() {
        return this.loaded_;
    }

    set total(value) {
        this.total_ = value;
    }

    get total() {
        return this.total_;
    }
}