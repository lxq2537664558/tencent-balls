class SettingsProxy extends Proxy {
    public static readonly NAME: string = "SettingsProxy";

    private bmgEnabled_: boolean;

    constructor() {
        super();
    }

    set bmgEnabled(value) {
        this.bmgEnabled_ = value;
    }

    get bmgEnabled() {
        return this.bmgEnabled_;
    }
}