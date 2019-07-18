class Observer {
    private notify_: Function;
    private context_: any;

    constructor(notify: Function, context: any) {
        this.notify = notify;
        this.context = context;
    }

    public notifyObserver(notifier: Notifier): void {
        this.notify.call(this.context, notifier);
    }

    public isSameContext(context: any): boolean {
        return this.context === context;
    }

    set notify(value) {
        this.notify_ = value;
    }

    get notify() {
        return this.notify_;
    }

    set context(value) {
        this.context_ = value;
    }

    get context() {
        return this.context_;
    }
}