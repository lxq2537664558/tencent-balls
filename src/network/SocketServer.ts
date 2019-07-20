class SocketConstants {
    public static SERVER_CONNECTED: string = "SERVER_CONNECTED";
    public static SOCKET_CONNECT: string = "SOCKET_CONNECT";
    public static SOCKET_RECONNECT: string = "SOCKET_RECONNECT";
    public static SOCKET_START_RECONNECT: string = "SOCKET_START_RECONNECT";
    public static SOCKET_CLOSE: string = "SOCKET_CLOSE";
    public static SOCKET_DATA: string = "SOCKET_DATA";
    public static SOCKET_NOCONNECT: string = "SOCKET_NOCONNECT";
    public static SOCKET_DEBUG_INFO: string = "SOCKET_DEBUG_INFO";
}

class SocketServer {
    public static readonly HallServerType: string = "hall";
    public static readonly BattleServerType: string = "battle";

    private static instance_: SocketServer;
    private static battleInstance_: SocketServer;
    private needReconnect_: boolean;
    private maxRecconectCount_: number;
    private reconnectCount_: number;
    private connectFlag_: boolean;
    private type_: string;
    private protobuf_: ProtobufUtils;
    private messageHandler_: any;
    private socket_: any;
    private msg_: any;
    private host_: string;
    private port_: number;
    private isConnecting_: boolean;
    private isConnected_: boolean;

    constructor(type: string, messageHandler: any) {
        this.needReconnect = false;
        this.maxRecconectCount = 1;
        this.reconnectCount = 0;
        this.connectFlag = false;
        this.type = type;
        this.protobuf_ = new ProtobufUtils();
        this.messageHandler_ = messageHandler;
        this.isConnecting = false;

        if (this.messageHandler_ instanceof BattleReceiveMessageHandler) {
            this.messageHandler_.protoBuilder = this.msg_;
        }
    }

    public static getInstance(): SocketServer {
        if (!this.instance_) {
            this.instance_ = new SocketServer(SocketServer.HallServerType, new ReceiveMessageHandler());
        }

        return this.instance_;
    }

    public static getInstanceByBattle(): SocketServer {
        if (!this.battleInstance_) {
            this.battleInstance_ = new SocketServer(SocketServer.BattleServerType, new BattleReceiveMessageHandler());
        }

        return this.battleInstance_;
    }

    public initServer(host: string, msg: any): void {
        this.host = host;

        if (msg) {
            this.msg_ = msg;
        }
    }

    public connect(): void {
        this.socket_ = new egret.WebSocket();

        if (this.msg_ instanceof ByteArrayMsg) {
            this.socket_.type = egret.WebSocket.TYPE_BINARY;
        }

        egret.warn("SocketServer: 发起连接" + this.type);
        this.socket_.connectByUrl(this.host);
        this.isConnecting = true;
        this.addEvents();
        CustomLogger.trace("SocketServer.connect: ", this.host);

        if (this.type === SocketServer.BattleServerType) {
            this.socket_.socket.onSocketData = (data: any) => {
                SocketServer.getInstanceByBattle().onSocketReceive(data);
            }
        }
        else {
            this.socket_.socket.onSocketData = (data: any) => {
                SocketServer.getInstance().onSocketReceive(data);
            };
        }
    }

    public receiveCompleteCallback(): void {

    }

    public close(): void {
        egret.warn("SocketServer.close: ", this.type);
        this.disconnect();
        this.connectFlag = false;

        if (this.msg_ !== null) {
            this.msg_.destroy();
            this.msg_ = null;
        }
    }

    public send(data: any): void {
        if (this.msg_ !== null) {
            this.msg_.send(this.socket_, data);
        }
    }

    public sendEncode(): void {
        if (this.msg_ !== null) {
            this.msg_.sendEncode(this.socket_);
        }
    }

    public onDestroy(): void {
        this.close();
        this.removeEvents();
    }

    private reconnect(): void {
        this.disconnect();
        ++this.reconnectCount;

        if (this.reconnectCount < this.maxRecconectCount) {
            this.connect();
        }
        else {
            this.reconnectCount = 0;
        }
    }

    private disconnect(): void {
        this.removeEvents();

        if (this.socket_ !== null) {
            this.socket_.close();
            this.socket_ = null;
        }

        this.isConnected = false;
        this.isConnecting = false;
    }

    private addEvents(): void {
        this.socket_.addEventListener(egret.Event.CONNECT, this.onSocketOpen, this);
        this.socket_.addEventListener(egret.Event.CLOSE, this.onSocketClose, this);
        this.socket_.addEventListener(egret.IOErrorEvent.IO_ERROR, this.onSocketError, this);
        this.socket_.addEventListener(egret.ProgressEvent.SOCKET_DATA, this.onSocketReceive, this);
    }

    private removeEvents(): void {
        if (this.socket_ !== null) {
            this.socket_.removeEventListener(egret.Event.CONNECT, this.onSocketOpen, this);
            this.socket_.removeEventListener(egret.Event.CLOSE, this.onSocketClose, this);
            this.socket_.removeEventListener(egret.IOErrorEvent.IO_ERROR, this.onSocketError, this);
            this.socket_.removeEventListener(egret.ProgressEvent.SOCKET_DATA, this.onSocketReceive, this);
        }
    }

    private onSocketOpen(e: egret.Event): void {
        this.reconnectCount = 0;
        this.isConnecting = false;
        this.isConnected = true;
        CustomLogger.trace("SocketServer.onSocketOpen: ", "连接成功");
        
        if (this.connectFlag) {
            CustomLogger.trace("SocketServer.onSocketOpen: ", SocketConstants.SOCKET_RECONNECT);
        }
        else {
            CustomLogger.trace("SocketServer.onSocketOpen: ", SocketConstants.SOCKET_CONNECT);
        }
    }

    private onSocketClose(e: egret.Event): void {
        CustomLogger.trace("SocketServer.onSocketClose:");
        this.isConnected = false;
        this.isConnecting = false;
        
        if (this.needReconnect) {
            CustomLogger.trace("SocketServer.onSocketClose:", SocketConstants.SOCKET_START_RECONNECT);
        }
        else {
            CustomLogger.trace("SocketServer.onSocketClose:", SocketConstants.SOCKET_CLOSE);
        }
    }

    private onSocketError(e: egret.IOErrorEvent): void {
        this.isConnecting = false;
        this.isConnected = false;

        if (this.needReconnect) {

        }
        else {
            CustomLogger.trace("SocketServer.onSocketError: ", "socket连接错误");
        }
    }

    private onSocketReceive(data: any): void {
        if (this.msg_) {
            this.msg_.receive(data);
        }
    }

    set needReconnect(value) {
        this.needReconnect_ = value;
    }

    get needReconnect() {
        return this.needReconnect_;
    }

    set maxRecconectCount(value) {
        this.maxRecconectCount_ = value;
    }

    get maxRecconectCount() {
        return this.maxRecconectCount_;
    }

    set reconnectCount(value) {
        this.reconnectCount_ = value;
    }

    get reconnectCount() {
        return this.reconnectCount_;
    }

    set connectFlag(value) {
        this.connectFlag_ = value;
    }

    get connectFlag() {
        return this.connectFlag_;
    }

    set type(value) {
        this.type_ = value;
    }

    get type() {
        return this.type_;
    }

    set host(value) {
        this.host_ = value;
    }

    get host() {
        return this.host_;
    }

    set port(value) {
        this.port_ = value;
    }

    get port() {
        return this.port_;
    }

    set isConnecting(value) {
        this.isConnecting_ = value;
    }

    get isConnecting() {
        return this.isConnecting_;
    }

    set isConnected(value) {
        this.isConnected_ = value;
    }

    get isConnected() {
        return this.isConnected_;
    }

    get protobuf() {
        return this.protobuf_;
    }

    get msgHandler() {
        return this.messageHandler_;
    }
}