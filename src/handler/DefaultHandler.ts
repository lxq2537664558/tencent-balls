class DefaultHandler {
    private receiveHandler_: ReceiveMessageHandler;
    private msgListeners_: Dictionary;

    constructor(receiveHandler: ReceiveMessageHandler) {
        this.receiveHandler_ = receiveHandler;
        this.msgListeners_ = new Dictionary();
    }

    public addMsgListener(listener: MessageListener): void {
        if (!(listener && listener.id && listener.decoder && listener.decoder !== "" && listener.msgHandler)) {
            console.log("DefaultHandler.addMsgListener: ", "msg listener not valid.");
            return;
        }

        let listenerArray: Array<any> = this.msgListeners_.getValue(listener.id);

        if (!listenerArray) {
            listenerArray = new Array();
            this.msgListeners_.add(listener.id, listenerArray);
        }

        listenerArray.push(listener);
    }

    public removeMsgListener(listener: MessageListener): void {
        if (!(listener && listener.id && listener.decoder && listener.decoder !== "" && listener.msgHandler)) {
            console.log("DefaultHandler.removeMsgListener: ", "msg listener not valid.");
            return;
        }

        let listenerArray: Array<any> = this.msgListeners_.getValue(listener.id);

        if (!listenerArray) {
            console.log("DefaultHandler.removeMsgListener: ", "msg listener " + listener.id.toString() + " has not added.");
            return;
        }

        const pos: number = listenerArray.indexOf(listener);

        if (pos === -1) {
            console.log("DefaultHandler.removeMsgListener: ", "msg listener " + listener.id.toString() + " has not added.");
            return;
        }

        listenerArray.splice(pos, 1);
    }

    public handler(id: number, data: any): void {
        if (!id) {
            console.log("DefaultHandler.handler: ", "invalid msg id.");
            return;
        }

        const listenerArray: Array<any> = this.msgListeners_.getValue(id);

        if (!listenerArray) {
            console.log("DefaultHandler.removeMsgListener: ", "msg listener " + id.toString() + " has not added.");
            return;
        }

        for (let i = 0, len = listenerArray.length; i < len; ++i) {
            const listener: MessageListener = listenerArray[i];
            listener.handleMessgae(id, data, null);
        }
    }
}