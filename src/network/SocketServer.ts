class SocketServer {
    public static readonly BattleServerType: string = "battle";
    public static readonly HallServerType: string = "hall";
    public static readonly MaxReconnectTimes: number = 1;

    private static hallInstance_: SocketServer;
    private static battleInstance_: SocketServer;

    private serverType_: string;
    private socket_: any;
    private isConnecting_: boolean;
    private doConnecting_: boolean;
    private connectedFlag_: boolean;
    private msgHandler_: ReceiveMessageHandler | BattleReceiveMessageHandler;
    private reconnectCount_: number;
    private needReconnect_: boolean;
    private msgParser_: any;
    private host_: string;
    private protobuf_: ProtoBufUtil;

    constructor(serverType: string, msgHandler: ReceiveMessageHandler | BattleReceiveMessageHandler) {
        this.needReconnect = false;
        this.reconnectCount = 0;
        this.connectedFlag = false;
        this.serverType_ = serverType;
        this.msgHandler_ = msgHandler;
        this.isConnecting = false;
        this.doConnecting = false;
        this.msgParser_ = null;
        // this.protobuf_ = new ProtoBufUtil();
    }

    public static getHallInstance(): SocketServer {
        if (!this.hallInstance_) {
            this.hallInstance_ = new SocketServer(SocketServer.HallServerType, null);
        }

        return this.hallInstance_;
    }

    public static getBattleInstance(): SocketServer {
        if (!this.battleInstance_) {
            this.battleInstance_ = new SocketServer(SocketServer.BattleServerType, null);
        }

        return this.battleInstance_;
    }

    public initServer(host: string, msgParser: any): void {
        this.host_ = host;
        this.msgParser_ = msgParser;
    }

    public connect(): void {
        console.log("SocketServer.connect: ", "connect to " + this.host + ", " + this.serverType + " server.");
        this.socket_ = new egret.WebSocket();
        
        if (this.msgHandler_ instanceof ByteArrayMsg) {
            this.socket_.type = egret.WebSocket.TYPE_BINARY;
        }

        this.socket_.connectByUrl(this.host);
        this.doConnecting = true;
        this.addEvents();
        this.socket_.socket.onSocketData = this.onReceiveRawMessage;
    }

    public send(data: any): void {
        if (this.msgParser_) {
            this.msgParser_.send(this.socket_, data);
        }
    }

    public receiveCompletedCallback(): void {
        if (this.msgParser_) {
            this.msgParser_.receiveCompletedCallback();
        }
    }

    public destroy(): void {
        this.close();

        if (this.msgHandler_ !== null) {
            this.msgParser_.destroy();
            this.msgHandler_ = null;
        }

        this.protobuf_ = null;
    }

    public close(): void {
        console.log("SocketServer.close: ", "socket type " + this.serverType);
        this.disconnect();
        this.connectedFlag = false;

        if (this.msgParser_ !== null) {
            this.msgParser_.destroy();
            this.msgParser_ = null;
        }
    }

    private addEvents(): void {
        if (this.socket_ === null || this.socket_ === void 0) {
            return;
        }

        this.socket_.addEventListener(egret.Event.CONNECT, this.onSocketOpen, this);
        this.socket_.addEventListener(egret.IOErrorEvent.IO_ERROR, this.onSocketError, this);
        this.socket_.addEventListener(egret.Event.CLOSE, this.onSocketClose, this);
    }

    private removeEvents(): void {
        if (this.socket_ === null || this.socket_ === void 0) {
            return;
        }

        this.socket_.removeEventListener(egret.Event.CONNECT, this.onSocketOpen, this);
        this.socket_.removeEventListener(egret.IOErrorEvent.IO_ERROR, this.onSocketError, this);
        this.socket_.removeEventListener(egret.Event.CLOSE, this.onSocketClose, this);
    }

    private disconnect(): void {
        this.removeEvents();

        if (this.socket_ !== null) {
            this.socket_.close();
            this.socket_ = null;
        }

        this.isConnecting = false;
        this.doConnecting = false;
    }

    private reconnect(): void {
        this.disconnect();
        ++this.reconnectCount;

        if (this.reconnectCount < SocketServer.MaxReconnectTimes) {
            this.connect
        }
    }

    private onSocketOpen(): void {
        console.log("SocketServer.onSocketOpen:");
        this.reconnectCount = 0;
        this.isConnecting = true;
        this.doConnecting = false;

        if (this.connectedFlag) {
            console.log("SocketServer.onSocketOpen: ", SocketConstant.SocketReconnect);
            ApplicationFacade.getInstance().sendNotification(ServiceCommand.SocketServerEvent, SocketConstant.SocketReconnect, this.serverType);
        }
        else {
            console.log("SocketServer.onSocketOpen: ", SocketConstant.SocketConnect);
            ApplicationFacade.getInstance().sendNotification(ServiceCommand.SocketServerEvent, SocketConstant.SocketConnect, this.serverType);
            this.connectedFlag = true;
        }
    }

    private onSocketError(): void {
        console.log("SocketServer.onSocketError:");
        this.isConnecting = false;
        this.doConnecting = false;

        if (this.needReconnect) {
            this.reconnect();
            console.log("SocketServer.onSocketClose: ", SocketConstant.SocketStartReconnect);
        }
        else {
            ApplicationFacade.getInstance().sendNotification(ServiceCommand.SocketServerEvent, SocketConstant.SocketNoConnect, this.serverType);
        }
    }

    private onSocketClose(): void {
        console.log("SocketServer.onSocketClose:");
        this.isConnecting = false;
        this.doConnecting = false;

        if (this.needReconnect) {
            this.reconnect();
            console.log("SocketServer.onSocketClose: ", SocketConstant.SocketStartReconnect);
        }
        else {
            ApplicationFacade.getInstance().sendNotification(ServiceCommand.SocketServerEvent, SocketConstant.SocketClose, this.serverType);
        }
    }

    private onReceiveRawMessage(data: any): void {
        if (this.msgParser_) {
            this.msgParser_.receive(data);
        }
    }

    get serverType() {
        return this.serverType_;
    }

    set isConnecting(value) {
        this.isConnecting_ = value;
    }

    get isConnecting() {
        return this.isConnecting_;
    }

    set doConnecting(value) {
        this.doConnecting_ = value;
    }

    get doConnecting() {
        return this.doConnecting_;
    }

    set connectedFlag(value) {
        this.connectedFlag_ = value;
    }

    get connectedFlag() {
        return this.connectedFlag_;
    }

    set reconnectCount(value) {
        this.reconnectCount_ = value;
    }

    get reconnectCount() {
        return this.reconnectCount_;
    }

    set needReconnect(value) {
        this.needReconnect_ = value;
    }

    get needReconnect() {
        return this.needReconnect_;
    }

    get host() {
        return this.host_;
    }

    get msgHandler() {
        return this.msgHandler_;
    }
}