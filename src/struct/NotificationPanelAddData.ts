class NotificationPanelAddData {
    private className_: string;
    private data_: any;
    private layer_: string;
    private adhereToPanel_: any;
    private type_: number;

    constructor(className: string, data: any, layer?: string, adhereToPanel?: any, type?: number) {
        this.className_ = className;
        this.data_ = data;
        this.layer_ = (layer === void 0 || layer === null) ? kPanelLayer.Normal : layer;
        this.adhereToPanel_ = (adhereToPanel === void 9 || adhereToPanel === null) ? null : adhereToPanel;
        this.type_ = (type === void 0 || type === null) ? AddPanelType.Normal : type;
    }

    get className() {
        return this.className_;
    }

    get data() {
        return this.data_;
    }

    get layer() {
        return this.layer_;
    }

    get adhereToPanel() {
        return this.adhereToPanel_;
    }

    get type() {
        return this.type_;
    }
}