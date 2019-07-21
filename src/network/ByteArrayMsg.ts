class ByteArrayMsg {
    private buffer_: egret.ByteArray;
    private socketServer_: SocketServer;

    constructor() {
        this.buffer_ = new egret.ByteArray();
    }

    public receive(socket: egret.WebSocket): void {
        if (!this.buffer_ || !socket) {
            return;
        }

        socket.readBytes(this.buffer_);
    }

    public send(socket: egret.WebSocket, msg: HLMsg): void {
        const buffer: egret.ByteArray = this.encode(msg);

        if (!buffer) {
            return;
        }

        buffer.position = 0;
        socket.writeBytes(buffer, 0, buffer.bytesAvailable);
    }

    public encode(data: any): any {
        console.log("ByteArrayMsg.decode:", "需要子类重写，根据项目协议结构解析");
        return;
    }

    public decode(data: any): any {
        console.log("ByteArrayMsg.decode:", "需要子类重写，根据项目协议结构解析");
        return;
    }

    public destroy(): void {
        if (this.buffer_ !== null) {
            this.buffer_.clear();
            this.buffer_ = null;
        }

        this.socketServer = null;
    }

    set socketServer(value) {
        this.socketServer_ = value;
    }

    get socketServer() {
        return this.socketServer_;
    }
}