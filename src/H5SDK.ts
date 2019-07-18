class H5SDK {
    private enabled_: boolean;

    constructor() {
        this.enabled_ = false;
    }

    set enabled(value) {
        this.enabled_ = value;
    }

    get enabled() {
        return this.enabled_;
    }
}

if (!window.h5sdk) {
    window.h5sdk = new H5SDK();
}

declare let h5sdk: H5SDK;

declare interface Window {
    h5sdk: H5SDK;
}