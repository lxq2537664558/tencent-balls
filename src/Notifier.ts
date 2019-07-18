class Notifier {
    protected facade_: Facade;

    constructor() {
        this.facade_ = Facade.getInstance();
    }

    public sendNotification(name: string, params?: any, action?: string): void {
        this.facade_.sendNotification(name, params, action);
    }

    get facade() {
        return this.facade_;
    }
}