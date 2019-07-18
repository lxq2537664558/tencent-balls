class ServiceCommand extends SimpleCommand {
    public static readonly NAME: string = "ServiceCommand";
    public static readonly SOCKET_SERVER_EVENT: string = "SocketServerEvent";
    public static readonly SOCKET_SERVER_CONNECT: string = "SocketServerConnect";
    public static readonly START_LOGIN: string = "StartLogin";
    public static readonly REQ_GUEST_STATE: string = "ReGuestState";
    public static readonly PT_LOGIN: string = "PTLogin";
    public static readonly INIT_PLAYER_INFO: string = "InitPlayerInfo";

    public register(): void {
        this.facade.registerCommand(ServiceCommand.START_LOGIN, StartLoginCommond);
        this.facade.registerCommand(ServiceCommand.SOCKET_SERVER_CONNECT, ConnectServerCommand);
        this.facade.registerCommand(ServiceCommand.SOCKET_SERVER_EVENT, SocketServerEventCommand);
        this.facade.registerCommand(ServiceCommand.REQ_GUEST_STATE, GuestStateQueryCommand);
        this.facade.registerCommand(ServiceCommand.PT_LOGIN, PTLoginReqCommand);
        this.facade.registerCommand(ServiceCommand.INIT_PLAYER_INFO, InitPlayerInfoReqCommand);
    }
}