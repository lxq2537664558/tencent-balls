class StartLoginCommond extends puremvc.SimpleCommand {
    public static NAME: string = "StartLoginCommond";

    public execute(notification: puremvc.INotification): void {
        console.log("StartLoginCommond.execute:");

        if (h5sdk.enabled) {
            // this.facade().sendNotification(H5SDKCommand.LOGIN_SUCCESS);
        }
        else if (wxsdk.enabled && !wxsdk.isGuestLogin) {
            console.log("StartLoginCommond.execute.wx.login: ", "account sign in.");
            this.sendNotification(ServiceCommand.SOCKET_SERVER_CONNECT);
        }
        else if (wxsdk.enabled && wxsdk.isLoggedIn) {
            console.log("StartLoginCommond.execute.wx.login: ", "guest sign in.");
            let uin: string = egret.localStorage.getItem("uin");

            if (uin === null || uin === void 0 || uin.length < 3) {
                uin = "uin" + Math.random().toFixed(8).toString().slice(2);
            }

            URLParams.getInstance().uin = uin;
            egret.localStorage.setItem("uin", uin);
            this.sendNotification(ServiceCommand.SOCKET_SERVER_CONNECT);
        }
        else {
            this.sendNotification(ApplicationFacade.CHANGE_SCENE, SceneName.Login, UIConfig.ADD_SCENE);
        }
    }
}