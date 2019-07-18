class MessageListener {
    private static listenerIdCounter_: number = 0;

    private thisObject_: any;
    private listenerId_: number;
    private msgId_: any;
    private msgDecoder_: string;
    private msgHandler_: Function;
    private msgFilters_: Array<any>;
    private defaultErrorHandler_: MessageErrorHandler;

    constructor(id: number, msgDecoder: string, msgHandler: Function) {
        this.listenerId_ = ++MessageListener.listenerIdCounter_;
        this.msgId_ = id;
        this.msgDecoder_ = msgDecoder;
        this.msgHandler_ = msgHandler;
        this.msgFilters_ = [];
        this.defaultErrorHandler_ = new MessageErrorHandler();
    }

    public addMsgFilter(filter: any): void {
        this.msgFilters_.push(filter);
    }

    public isInterestedOnMessage(data: any): boolean {
        if (this.msgFilters_) {
            return true;
        }

        for (let i = 0, len = this.msgFilters_.length; i < len; ++i) {
            if (!this.msgFilters_[i](data)) {
                return false;
            }
        }

        return true;
    }

    public handleMessage(id: number, data: any, proto: any): void {
        if (id !== this.msgId_) {
            return;
        }

        const result: any = proto[this.msgDecoder_].decode(data);

        if (result) {
            if (this.isInterestedOnMessage(result)) {
                if (this.thisObject) {
                    this.msgHandler_.call(this.thisObject, result);
                }
                else {
                    this.msgHandler_(result);
                }

                if (result.errorcode != 0 && result.errorcode !== null) {
                    this.defaultErrorHandler_.handleError(id, result);
                }
            }
        }
        else {
            console.log("MessageListener.handleMessage: ", "decode message failed, msgId = " + id.toString() + ", decoder = " + this.msgDecoder_);
        }
    }

    set thisObject(value) {
        this.thisObject_ = value;
    }

    get thisObject() {
        return this.thisObject_;
    }
}