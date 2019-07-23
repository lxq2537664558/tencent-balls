class ReceiveMessageHandler {
    private registerHandler_: Dictionary;
    private userHandler_: UserHandler;
    private defaultHandler_: DefaultHandler;

    constructor() {
        this.registerHandler_ = new Dictionary();
        this.userHandler_ = new UserHandler(this);
        this.defaultHandler_ = new DefaultHandler(this);
    }

    public register(id: number, handler: any): void {
        if (this.registerHandler_.containKey(id.toString())) {
            console.log("ReceiveMessageHandler.register: ", "msg id " + id.toString() + " has registered.");
            return;
        }

        this.registerHandler_.add(id.toString(), handler);
    }

    public destroy(): void {
    }

    public update(): void {
    }

    public receive(id: number, msg: any): void {
        const msgHandler: any = this.registerHandler_.getValue(id);
        let data: any;

        if (msg && msg.data) {
            data = msg.data.toArrayBuffer();
        }

        if (msgHandler) {
            msgHandler.handler(id, data);
        }
        else {
            this.defaultHandler_.handler(id, data);
        }
    }

    public addMsgListener(listener: MessageListener): void {
        this.defaultHandler_.addMsgListener(listener);
    }

    public removeMsgListener(listener: MessageListener): void {
        this.defaultHandler_.removeMsgListener(listener);
    }
}