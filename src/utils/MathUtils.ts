class MathUtils {
    public static readonly PI_180: number = Math.PI / 180;
    public static readonly DEGREE_180_TO_PI: number = 180 / Math.PI;
    private static readonly EPS: number = 10000;

    public static getDegreeListByRange(a: number, b: number, c: number): Array<number> {
        const array: Array<number> = new Array<number>();
        const r: number = (b - a) / (c * 2) + a;
        const o: number = (b - a) / c;
        array.push(r);

        for (let i = 0; (c - 1) > i; ++i) {
            const s: number = r + (i + 1) * o;
            array.push(s);
        }

        for (let i = 0; c > i; ++i) {
            if (array[i] < 0) {
                array[i] = array[i] + 360;
            }
            else if (array[i] > 360) {
                array[i] = array[i] - 360;
            }
        }

        return array;
    }

    public static getEndPoint(pos: Vector2D, i: number, n: number): Vector2D {
        const r: number = MathUtils.PI_180 * n;
        const o: number = Math.sin(r) * i;
        const a: number = Math.cos(r) * i;

        return { x: pos.x + a, y: pos.y + o };
    }

    public static randomInt(min, max): number {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
}