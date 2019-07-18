class ByteArrayMsgByProtobuf extends ByteArrayMsg {
    private data_: MessageProtoBufModel;
    private protobuf_: ProtobufUtils;
    private msgClass_: { [key: number]: any };
    private isInit_: boolean;

    constructor(socketServer: SocketServer) {
        super();

        this.socketServer = socketServer;
        this.data_ = new MessageProtoBufModel();
        this.msgClass_ = {};
        this.protobuf_ = this.socketServer.protobuf;
        this.isInit_ = false;
    }

    public destroy(): void {
        super.destroy();
        this.socketServer = null;
        this.msgClass_ = null;
    }

    public receive(data: any): void {
        if (!this.isInit_) {
            this.isInit_ = true;

            if (data.byteLength === 0) {

            }

            return;
        }

        const cmd: any = this.getMsgClass("HLCmd.Cmd_SC").decode(data);

        if (cmd) {
            this.socketServer.msgHandler.receive(cmd);
        }
    }

    public getMsgClass(path: string): any {
        let Ctor: any = this.msgClass_[path];

        if (Ctor === void 0 || Ctor === null) {
            Ctor = this.protobuf_.root.lookupType(path);
            this.msgClass_[path] = Ctor;
        }

        return Ctor;
    }
}