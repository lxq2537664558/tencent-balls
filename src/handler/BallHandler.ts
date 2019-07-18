class BallHandler {
    private msgArr_: Array<any>;
    private msgIdArr_: Array<number>;
    private msgCount_: number;
    
    constructor(receiver: BattleReceiveMessageHandler) {
        this.msgArr_ = [];
        this.msgIdArr_ = [];
        this.msgCount = 0;
    }

    public handleMessage(id: any, data: any, isImmediately?: boolean): void {
    }

    public processDeferredMsg(timestamp: number): void {
        const index: number = 0;

        if (index >= this.msgCount) {
            return;
        }

        for (; index < this.msgCount;) {
            const data: any = this.msgArr_[index];

            if (timestamp >= data.serverTime) {
                break;
            }

            this.handleMessage(this.msgIdArr_.shift(), this.msgArr_.shift(), true);
            --this.msgCount;
        }
    }

    public reset(): void {
        this.msgArr_.length = 0;
        this.msgIdArr_.length = 0;
        this.msgCount = 0;
    }

    private addMsg(id: any, data: any): void {
        if (Battle.Freeze) {
            return;
        }

        if (data.serverTime !== void 0 && data.serverTime !== null) {
            data.serverTime = data.serverTime / Constants.SECOND_IN_MILLISECONDS;
        }

        this.msgIdArr_.push(id);
        this.msgIdArr_.push(data);
        ++this.msgCount;
    }

    public onDestroy(): void {

    }

    set msgCount(value) {
        this.msgCount_ = value;
    }

    get msgCount() {
        return this.msgCount_;
    }
}