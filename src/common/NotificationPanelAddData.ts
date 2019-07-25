class NotificationPanelAddData {
    private className_: string;
    private data_: any;
    private layer_: number;
    private adhereToPanel_: any;
    private type_: number;

    constructor(className: string, data: any, layer?: number, adhereToPanel?: any, type?: number) {
        this.className = className;
        this.data = data;
        this.layer = (layer === null || layer === void 0) ? PanelLayer.Normal : layer;
        this.adhereToPanel = (adhereToPanel === null || adhereToPanel === void 0) ? null : adhereToPanel;
        this.type = (type === null || type === void 0) ? AddPanelType.Normal : type;
    }

    set className(value) {
        this.className_ = value;
    }

    get className() {
        return this.className_;
    }

    set data(value) {
        this.data_ = value;
    }

    get data() {
        return this.data_;
    }

    set layer(value) {
        this.layer_ = value;
    }

    get layer() {
        return this.layer_;
    }

    set adhereToPanel(value) {
        this.adhereToPanel_ = value;
    }

    get adhereToPanel() {
        return this.adhereToPanel_;
    }

    set type(value) {
        this.type_ = value;
    }

    get type() {
        return this.type_;
    }
}