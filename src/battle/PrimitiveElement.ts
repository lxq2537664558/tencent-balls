class PrimitiveElement {
    public static readonly INVISIBLE_X: number = 99999999;
    public static readonly INVISIBLE_Y: number = 99999999;
    public static readonly MAX_SIZE_ONE_DRAW_CALL = 2e3;

    private id_: number;
    private vertices_: Float32Array;
    private uvs_: Float32Array;
    private size_: Uint16Array;
    private next_: any;
    private prev_: any;
    private static primitivePool_: Array<PrimitiveElement> = [];

    constructor() {
        this.reset();
    }

    public isValid(): boolean {
        return this.id >= 0;
    }

    public static preAllocate(): void {
        for (let i = 0; i < 150; ++i) {
            this.primitivePool_.push(new PrimitiveElement());
        }
    }

    public static create(): PrimitiveElement {
        let elem: PrimitiveElement = this.primitivePool_.pop();

        if (!elem) {
            elem = new PrimitiveElement();
        }

        return elem;
    }

    public static release(elem: PrimitiveElement): void {
        if (elem) {
            this.primitivePool_.push(elem)
        }
    }

    private reset(): void {
        this.id = -1;
        this.vertices_ = new Float32Array(8);
        this.vertices_[0] = PrimitiveElement.INVISIBLE_X;
        this.vertices_[1] = PrimitiveElement.INVISIBLE_Y;
        this.vertices_[2] = PrimitiveElement.INVISIBLE_X;
        this.vertices_[3] = PrimitiveElement.INVISIBLE_Y;
        this.vertices_[4] = PrimitiveElement.INVISIBLE_X;
        this.vertices_[5] = PrimitiveElement.INVISIBLE_Y;
        this.vertices_[6] = PrimitiveElement.INVISIBLE_X;
        this.vertices_[7] = PrimitiveElement.INVISIBLE_Y;
        this.uvs_ = new Float32Array(8);
        this.uvs_[0] = 0;
        this.uvs_[1] = 0;
        this.uvs_[2] = 1;
        this.uvs_[3] = 0;
        this.uvs_[4] = 1;
        this.uvs_[5] = 1;
        this.uvs_[6] = 0;
        this.uvs_[7] = 1;
        this.size_ = new Uint16Array(2);
        this.size_[0] = 0;
        this.size_[1] = 0;
        this.next = null;
        this.prev = null;
    }

    set id(value) {
        this.id_ = value;
    }

    get id() {
        return this.id_;
    }

    set next(value) {
        this.next_ = value;
    }

    get next() {
        return this.next_;
    }

    set prev(value) {
        this.prev_ = value;
    }

    get prev() {
        return this.prev_;
    }
}