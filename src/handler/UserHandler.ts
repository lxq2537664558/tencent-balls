class UserHandler {
    private receiveHandler_: ReceiveMessageHandler;

    constructor(receiveHandler: ReceiveMessageHandler) {
        this.receiveHandler_ = receiveHandler;
    }

    public handler(id: number, data: any): void {
    }
}