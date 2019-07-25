class AddPanelType {
    public static readonly Normal: number = 0;
    public static readonly NoRepeat: number = 1;
}

AddPanelType[AddPanelType.Normal.toString()] = "Normal";
AddPanelType[AddPanelType.NoRepeat.toString()] = "NoRepeat";