class MessageErrorHandler {
    public handleError(id: number, data: any): void {
        console.log("MessageErrorHandler.handleError: ", "msg id: " + id.toString() + ", error code: " + data.errorcode);
    }
}