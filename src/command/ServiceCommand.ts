class ServiceCommand extends puremvc.SimpleCommand {
    public static readonly NAME: string = "ServiceCommand";

    public static readonly StartLogin: string = "StartLogin";
    public static readonly PTLogin: string = "PTLogin";
    public static readonly SocketServerEvent: string = "SocketServerEvent";
    public static readonly SocketServerConnect: string = "SocketServerConnect";
    public static readonly ReqGuestState: string = "ReqGuestState";
    public static readonly InitPlayerInfo: string = "InitPlayerInfo";

    public register(): void {
        this.facade().registerCommand(ServiceCommand.StartLogin, StartLoginCommond);
        this.facade().registerCommand(ServiceCommand.SocketServerConnect, ConnectServerCommand);
        this.facade().registerCommand(ServiceCommand.SocketServerEvent, SocketServerEventCommand);
        this.facade().registerCommand(ServiceCommand.ReqGuestState, GuestStateQueryCommand);
        this.facade().registerCommand(ServiceCommand.PTLogin, PTLoginReqCommand);
        this.facade().registerCommand(ServiceCommand.InitPlayerInfo, InitPlayerInfoReqCommand);
    }
}