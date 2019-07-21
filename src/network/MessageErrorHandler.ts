class MessageErrorHandler {
    public handleError(id: number, msg: any) {
        console.log("MessageErrorHandler.handleError: ", "id = " + id.toString(), ", error code = " + msg.errorCode);
    }
}