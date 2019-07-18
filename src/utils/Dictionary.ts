class Dictionary {
    private keys_: Array<any>;
    private values_: Array<any>;

    constructor() {
        this.keys_ = new Array<any>();
        this.values_ = new Array<any>();
    }

    public add(key, value): void {
        this.doAdd(key, value);
    }

    public remove(key): void {
        const index: number = this.keys_.indexOf(key, 0);

        if (index >= 0) {
            this.keys_.splice(index, 1);
            this.values_.splice(index, 1);
            delete this[key];
        }
    }

    public removeByValue(value: any): void {
        const index: number = this.values_.indexOf(value, 0);

        if (index >= 0) {
            const key: any = this.keys_[index];
            this.keys_.splice(index, 1);
            this.values_.splice(index, 1);
            delete this[key];
        }
    }

    public removeAllByValue(value): void {
        for (let canBreak = false; !canBreak;) {
            const index: number = this.values_.indexOf(value, 0);

            if (index >= 0) {
                const key: any = this.keys_[index];
                this.keys_.splice(index, 1);
                this.values_.splice(index, 1);
                delete this[key];
            }
            else {
                canBreak = true;
            }
        }
    }

    public setValue(key: any, value: any): void {
        this.remove(key);
        this.doAdd(key, value);
    }

    public getValue(key: any): any {
        const index: number = this.keys_.indexOf(key, 0);

        if (index >= 0) {
            return this.values_[index];
        }

        return null;
    }

    public containsKey(key): boolean {
        return typeof this[key] === "undefined" ? false : true;
    }

    public clear(): void {
        for (; this.keys.length > 0;) {
            this.remove(this.keys_[0]);
        }
    }

    private doAdd(key, value): void {
        this[key] = value;
        this.keys_.push(key);
        this.values_.push(value);
    }

    public isNumberOrString(value): boolean {
        if (typeof value === "number") {
            return true;
        }

        return Object.prototype.toString.call(value) === "[object String]";
    }

    get keys() {
        return this.keys_;
    }

    get values() {
        return this.values_;
    }
}