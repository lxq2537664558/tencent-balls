class PrimitiveElementList {
    private head_: PrimitiveElement;
    private tail_: PrimitiveElement;
    private length_: number;

    constructor() {
        this.head_ = PrimitiveElement.create();
        this.tail_ = this.head_;
        this.length_ = 0;
    }

    public add(elem: PrimitiveElement): void {
        this.tail_.next = elem;
        elem.prev = this.tail_;
        elem.next = null;
        this.tail_ = elem;
        this.length_ += 1;
    }

    public remove(elem: PrimitiveElement): void {
        const prev: PrimitiveElement = elem.prev;
        const next: PrimitiveElement = elem.next;
        prev.next = next;

        if (next) {
            next.prev = prev;
        }

        if (this.tail_ === elem) {
            this.tail_ = prev;
        }

        PrimitiveElement.release(elem);
        this.length_ -= 1;
    }
}