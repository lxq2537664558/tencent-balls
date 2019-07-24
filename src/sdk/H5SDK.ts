class H5SDK {
    private static instance_: H5SDK;

    private enabled_: boolean;

    public static getInstance(): H5SDK {
        if (!this.instance_) {
            this.instance_ = new H5SDK();
        }

        return this.instance_;
    }

    set enabled(value) {
        this.enabled_ = value;
    }

    get enabled() {
        return this.enabled_;
    }
}