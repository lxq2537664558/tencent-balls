class WrapData {
    private isShowing_: boolean;
    private data_: SingletonPanelAddData;

    constructor(data: SingletonPanelAddData) {
        this.isShowing = false;
        this.data = data;
    }

    set isShowing(value) {
        this.isShowing_ = value;
    }

    get isShowing() {
        return this.isShowing_;
    }

    set data(value) {
        this.data_ = value;
    }

    get data() {
        return this.data_;
    }
}