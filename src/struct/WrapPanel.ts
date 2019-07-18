class WrapPanel {
    private panel_: any;
    private isShowing_: boolean;

    constructor(panel: any) {
        this.panel = panel;
        this.isShowing = false;
    }

    set isShowing(value) {
        this.isShowing_ = value;
    }

    get isShowing() {
        return this.isShowing_;
    }

    set panel(value) {
        this.panel_ = value;
    }

    get panel() {
        return this.panel_;
    }
}