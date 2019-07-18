class BattleReceiveMessageHandler {
    private handlers_: Dictionary;
    private protoBuilder_: ByteArrayMsgByProtobuf;
    private ballHandler_: BallHandler;

    constructor() {
        this.handlers_ = new Dictionary();
        this.ballHandler_ = new BallHandler(this);
    }

    public register(key: any, thisObject: any): void {
        if (this.handlers_.containsKey(key)) {
            console.log("BattleReceiveMessageHandler.register: ", "重复注册协议解析");
            return;
        }

        this.handlers_.add(key, thisObject);
    }

    public update(timestamp: number): void {
        this.ballHandler_.processDeferredMsg(timestamp);
    }

    public receive(id: any, cmd: any): void {
        if (!this.ballHandler_) {
            console.log("BattleReceiveMessageHandler.receive: ", "no handler registered for msgId: " + id);
            return;
        }

        let data;

        if (cmd && cmd.data) {
            data = cmd.data;
        }

        this.ballHandler_.handleMessage(id, data);
    }

    public onDestroy(): void {
        this.ballHandler_.onDestroy();
        this.protoBuilder_ = null;
        this.ballHandler_ = null;
        this.handlers_.clear();
        this.handlers_ = null;
    }

    set protoBuilder(value) {
        this.protoBuilder_ = value;
    }

    get protoBuilder() {
        return this.protoBuilder_;
    }
}