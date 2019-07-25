class PanelLayer {
    public static readonly Below: number = 0;
    public static readonly Normal: number = 1;
    public static readonly GuideSystem: number = 2;
    public static readonly GuestSystem: number = 3;
    public static readonly DebugPanel: number = 4;
    public static readonly FatalError: number = 5;
}

PanelLayer[PanelLayer.Below.toString()] = "Below";
PanelLayer[PanelLayer.Normal.toString()] = "Normal";
PanelLayer[PanelLayer.GuideSystem.toString()] = "GuideSystem";
PanelLayer[PanelLayer.GuestSystem.toString()] = "GuestSystem";
PanelLayer[PanelLayer.DebugPanel.toString()] = "DebugPanel";
PanelLayer[PanelLayer.FatalError.toString()] = "FatalError";