interface Vector2D {
    x: number;
    y: number;
}

interface PositionRect {
    minX: number;
    minY: number;
    maxX: number;
    maxY: number;
}

interface BallRoomUserInfo {
    uid?: number;
    name?: string;
    country?: number;
    province?: number;
    level?: number;
    index?: number;
    teamId?: number;
    teamName?: string;
    initLife?: number;
    currLife?: number;
    killCount?: number;
    headImage?: string;
    charId?: number;
    tail?: number;
    ring?: number;
    spore?: number;
    watcher?: number;
    realCharacter?: number;
    sex?: number;
}

interface SplitCollisionInfo {
    id: number;
    x: number;
    y: number;
}

interface PositionUpdateInfo {
    id: number;
    x: number;
    y: number;
    vx: number;
    vy: number;
    score: number;
}

interface ForceInfo {
    type: number;
    vSrcX: number;
    vSrcY: number;
    vDstX: number;
    vDstY: number;
    remainTime: number;
}

interface BallForceUpdate {
    id: number;
    x: number;
    y: number;
    forceList: Array<ForceInfo>;
    score: number;
}

interface Score2WeightInfo {
    suffix?: string;
    weight?: string;
}