class ByteArrayMsg {
    private buffer_: egret.ByteArray;
    protected socketServer_: SocketServer;

    constructor() {
        this.buffer_ = new egret.ByteArray();
    }

    public receive(reader: any): void {
        if (this.buffer_ !== null) {
            reader.readBytes(this.buffer_);
        }
    }

    public send(socket: egret.WebSocket, msg: any): void {
        const result: egret.ByteArray = this.encode(msg);

        if (result) {
            result.position = 0;
            socket.writeBytes(result, 0, result.bytesAvailable);
        }
    }

    public decode(msg: any): any {
        CustomLogger.trace("ByteArrayMsg: ", "decode需要子类重写，根据项目的协议结构解析");
        return null;
    }

    public encode(msg: any): egret.ByteArray {
        CustomLogger.trace("ByteArrayMsg: ", "encode需要子类重写，根据项目的协议结构解析");
        return null;
    }

    public destroy(): void {
        if (this.buffer_) {
            this.buffer_.clear();
            this.buffer_ = null;
        }

        this.socketServer_ = null;
    }

    set socketServer(value) {
        this.socketServer_ = value;
    }

    get socketServer() {
        return this.socketServer_;
    }
}