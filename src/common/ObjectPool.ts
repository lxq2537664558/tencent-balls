class ObjectPool {
    private pool_: { [key: string]: Array<any> };

    constructor() {
        this.pool_ = {};
    }

    public create(className: string, size: number): void {
        const poolSize: number = this.getPoolSize(className);
        const count: number = size - poolSize;

        if (0 >= count) {
            return;
        }

        for (let i = 0; i < count; ++i) {
            this.push(this.pop(className));
        }
    }

    public push(instance: any): void {
        if (!instance || !instance.className) {
            console.log("ObjectPool.push: ", "instance has not className set/get method.");
            return;
        }

        const className: string = instance.className;

        if (this.pool_[className] === null) {
            console.log("ObjectPool.push: ", "instance " + className + " is not recyclable.");
            return;
        }

        this.pool_[className].push(instance);
    }

    public pop(className: string): any {
        if (this.pool_[className] === null || this.pool_[className] === void 0) {
            this.pool_[className] = [];
        }

        const array: Array<any> = this.pool_[className];

        if (array.length > 0) {
            return array.pop();
        }

        const Ctor: any = egret.getDefinitionByName(className);
        const instance: any = new Ctor();
        instance.className = className;

        return instance;
    }

    public clear(className: string, funcName?: string): void {
        if (funcName === void 0) {
            funcName = null;
        }

        if (!this.pool_[className]) {
            return;
        }

        if (funcName && funcName !== "") {
            this.dealFunc(className, funcName);
        }

        this.pool_[className] = null;
        delete this.pool_[className];
    }

    private getPoolSize(className: string): number {
        return this.pool_[className] ? this.pool_[className].length : 0;
    }

    private dealFunc(className: string, funcName: string): void {
        if (!this.pool_[className]) {
            return;
        }

        const instances: Array<any> = this.pool_[className];

        for (let i = 0, len = instances.length; i < len; ++i) {
            if (instances[i][funcName]) {
                instances[i][funcName]();
            }
        }
    }
}