class ObjectPool {
    private pool_: { [key: string]: Array<any> };

    constructor() {
        this.pool_ = {};
    }

    public create(name: string, size: number): void {
        const len: number = this.getPoolSize(name);
        const diff: number = size - len;

        if (diff > 0) {
            const array: Array<any> = [];

            for (let i = 0; i < diff; ++i) {
                array.push(this.pop(name));
            }

            for (let i = 0; i < diff; ++i) {
                this.push(array.pop());
            }
        }
    }

    public push(object: any): void {
        const className: string = object.className || "";

        if (!this.pool_[className]) {
            console.log("ObjectPool.push:", "回收对象的数组不存在 " + className);
            return;
        }

        this.pool_[className].push(object);
    }

    public pop(name: string): any {
        if (!this.pool_[name]) {
            this.pool_[name] = [];
        }

        const array: Array<any> = this.pool_[name];

        if (array.length > 0) {
            return array.pop();
        }

        const Ctor: any = egret.getDefinitionByName(name);
        const object: any = new Ctor();
        object.className = name;

        return object; 
    }

    public getPoolSize(name): number {
        if (this.pool_[name]) {
            return this.pool_[name].length;
        }

        return 0;
    }

    public clear(name: string, funcName?: string): void {
        if (!funcName) {
            funcName = null;
        }

        if (!this.pool_[name]) {
            return;
        }

        if (funcName) {
            this.execCleanup(name, funcName);
        }

        this.pool_[name] = null;
        delete this.pool_[name];
    }

    private execCleanup(name: string, funcName: string) {
        if (!this.pool_[name]) {
            return;
        }

        const array: Array<any> = this.pool_[name];

        for (let i = 0; i < array.length; ++i) {
            if (array[i][funcName] instanceof Function) {
                array[i][funcName]();
            }
        }
    }
}