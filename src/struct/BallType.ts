class BallType {
    public static readonly Spore: number = 1;
    public static readonly Ball: number = 2;
    public static readonly CiQiu: number = 3;
    public static readonly Boom: number = 4;
    public static readonly Bullet: number = 5;
    public static readonly Item: number = 6;
    public static readonly Lightning: number = 7;

    public static readonly BallNames: {[key: number]: string} = {};
}

BallType.BallNames[BallType.Spore] = "Spore";
BallType.BallNames[BallType.Ball] = "Ball";
BallType.BallNames[BallType.CiQiu] = "CiQiu";
BallType.BallNames[BallType.Boom] = "Boom";
BallType.BallNames[BallType.Bullet] = "Bullet";
BallType.BallNames[BallType.Item] = "Item";
BallType.BallNames[BallType.Lightning] = "Lightning";