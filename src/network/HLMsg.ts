class HLMsg {
    private msgId_: number;
    private msg_: any;
    private msgDecoder_: string;

    constructor(msgId: number, msg: any, msgDecoder: string) {
        this.msgId_ = msgId;
        this.msg_ = msg;
        this.msgDecoder_ = msgDecoder;
    }

    get msgId() {
        return this.msgId_;
    }

    get msg() {
        return this.msg_
    }

    get msgDecoder() {
        return this.msgDecoder_;
    }
}