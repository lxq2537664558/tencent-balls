class Model {
    protected static instance_: Model;
    private proxyMap_: any;

    constructor() {
        this.proxyMap_ = {};
        this.initializeModel();
    }

    public static getInstance(): Model {
        if (!this.instance_) {
            this.instance_ = new Model();
        }

        return this.instance_;
    }

    public registerProxy(proxy: Proxy): void {
        this.proxyMap_[proxy.name] = proxy;
        proxy.onRegister();
    }

    public removeProxy(name: string): Proxy {
        const proxy: Proxy = this.proxyMap_[name];

        if (proxy) {
            delete this.proxyMap_[name];
            proxy.onRemove();
        }

        return proxy;
    }

    public retrieveProxy(name: string): Proxy {
        return this.proxyMap_[name] || null;
    }

    public hasProxy(name: string): boolean {
        return this.proxyMap_[name] !== null;
    }

    public initializeModel(): void {
    }
}