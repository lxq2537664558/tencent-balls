class ServiceCommand extends puremvc.SimpleCommand {
    public static readonly NAME: string = "ServiceCommand";

    public static readonly StartLogin: string = "StartLogin";
    public static readonly PTLogin: string = "PTLogin";
    public static readonly SocketServerEvent: string = "SocketServerEvent";
    public static readonly SocketServerConnect: string = "SocketServerConnect";
    public static readonly ReqGuestState: string = "ReqGuestState";
    public static readonly InitPlayerInfo: string = "InitPlayerInfo";

    public register(): void {
    }
}