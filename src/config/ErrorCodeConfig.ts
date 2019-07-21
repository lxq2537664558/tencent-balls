class ErrorCodeConfig {
    private errorCode_: string;
    private desc_: string;

    constructor() {
    }

    set errorCode(value) {
        this.errorCode_ = value;
    }

    get errorCode() {
        return this.errorCode_;
    }

    set desc(value) {
        this.desc_ = value;
    }

    get desc() {
        return this.desc_;
    }
}