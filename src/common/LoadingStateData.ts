class LoadingStateData {
    public static readonly NETWORK_LOW: string = "NetworkLow";

    private state_: string;
    private loaded_: number;
    private total_: number;

    constructor() {
        this.state = "Loading...";
        this.loaded = 0;
        this.total = 100;
    }

    set state(value) {
        this.state_ = value;
    }

    get state() {
        return this.state_;
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