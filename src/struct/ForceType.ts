class ForceType {
    public static readonly None: number = 0;
    public static readonly Normal: number = 1;
    public static readonly Center: number = 2;
    public static readonly Other: number = 3;
    public static readonly Exclusive: number = 4;
    public static readonly Count: number = 5;

    public static readonly ForceTypeNames: {[key: number]: string} = {};
}

ForceType.ForceTypeNames[ForceType.None] = "None";
ForceType.ForceTypeNames[ForceType.Normal] = "Normal";
ForceType.ForceTypeNames[ForceType.Center] = "Center";
ForceType.ForceTypeNames[ForceType.Other] = "Other";
ForceType.ForceTypeNames[ForceType.Exclusive] = "Exclusive";
ForceType.ForceTypeNames[ForceType.Count] = "Count";