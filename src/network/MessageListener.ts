class MessageListener {
    private static listenerIdCounter_: number = 0;

    private thisObject_: any;
    private listenerId_: number;
    private id_: number;
    private decoder_: any;
    private msgHandler_: any;
    private msgFilters_: Array<any>;
    private defaultErrorHandler_: any;

    constructor(id: number, decoder: any, msgHandler: any, thisObject?: any) {
        this.listenerId_ = ++MessageListener.listenerIdCounter_;
        this.msgFilters_ = [];
        this.thisObject_ = thisObject;
        this.id_ = id;
        this.decoder_ = decoder;
        this.msgHandler_ = msgHandler;
        this.defaultErrorHandler_ = new MessageErrorHandler();
    }

    public addMsgFilter(filter: any): void {
        this.msgFilters_.push(filter);
    }

    public handleMessgae(id: number, data: any, handler: any): void {
        if (this.id !== id) {
            return;
        }

        const msg: any = handler[this.decoder_].decode(data);

        if (!msg) {
            console.log("MessageListener.handleMessage: ", "decode message failed, id = " + id.toString(), ", decoder = " + this.decoder_);
            return;
        }

        if (this.isInterestedOnMessage(msg)) {
            if (this.thisObject_ !== null) {
                this.msgHandler_.call(this.thisObject_, msg);
            }
            else {
                this.msgHandler_(msg);
            }
        }

        if (msg.errorCode !== 0 && msg.errorCode !== null && msg.errorCode !== void 0) {
            this.defaultErrorHandler_.handleError(id, msg);
        }
    }

    private isInterestedOnMessage(msg: any): boolean {
        if (!this.msgFilters_) {
            return true;
        }

        for (let i = 0, len = this.msgFilters_.length; i < len; ++i) {
            const filter: any = this.msgFilters_[i];

            if (filter && !filter.isInterrestedOnMessage(msg)) {
                return false;
            }
        }

        return true;
    }

    get listenerId() {
        return this.listenerId_;
    }

    get id() {
        return this.id_;
    }

    get decoder() {
        return this.decoder_;
    }

    get msgHandler() {
        return this.msgHandler_;
    }
}