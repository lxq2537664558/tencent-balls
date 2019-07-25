class SingletonPanelAddData {
    private type_: number;
    private delayTime_: number;
    private className_: string;
    private data_: any;

    constructor(className: string, data: any, type?: number, delayTime?: number) {
        this.type = (type === void 0 || type === null) ? SingletonPanelType.Wait : type;
        this.className = className;
        this.data = data;
        this.delayTime = (delayTime === void 0 || delayTime === null) ? 0 : delayTime;
    }

    set type(value) {
        this.type_ = value;
    }

    get type() {
        return this.type_;
    }

    set delayTime(value) {
        this.delayTime_ = value;
    }

    get delayTime() {
        return this.delayTime_;
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
}