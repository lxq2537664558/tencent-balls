class Dictionary {
    private keys_: Array<number | string>;
    private values_: Array<any>;

    constructor() {
        this.keys_ = [];
        this.values_ = [];
    }

    public add(key: number | string, value: any): void {
        if (key === null || key === void 0) {
            return;
        }

        this.remove(key);
        this.keys_.push(key);
        this.values_.push(value);
        this[key] = value;
    }

    public remove(key: number | string): void {
        const pos: number = this.keys_.indexOf(key, 0);

        if (pos === -1) {
            return;
        }

        this.keys_.splice(pos, 1);
        this.values_.splice(pos, 1);
        delete this[key];
    }

    public removeByValue(value: any): void {
        const pos: number = this.values_.indexOf(value);

        if (pos === -1) {
            return;
        }

        const key: number | string = this.keys_[pos];
        this.keys_.splice(pos, 1);
        this.values_.splice(pos, 1);
        delete this[key];
    }

    public removeAllByValue(value: any): void {
        for (; ;) {
            const pos: number = this.values_.indexOf(value);

            if (pos === -1) {
                break;
            }

            const key: number | string = this.keys_[pos];
            this.keys_.splice(pos, 1);
            this.values_.splice(pos, 1);
            delete this[key];
        }
    }

    public setValue(key: number | string, value: any): void {
        this.remove(key);
        this.add(key, value);
    }

    public getValue(key: number | string): any {
        const pos: number = this.keys_.indexOf(key, 0);

        if (pos === -1 || pos >= this.values_.length) {
            return null;
        }

        return this.values[pos];
    }

    public containKey(key: number | string): boolean {
        return typeof this[key] === "undefined" ? false : true;
    }

    public reset(): void {
        for (; this.keys_.length > 0;) {
            this.remove(this.keys_[0]);
        }
    }

    get keys() {
        return this.keys_;
    }

    get values() {
        return this.values_;
    }
}