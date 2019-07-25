class SingletonPanelType {
    public static readonly Wait: number = 1;
    public static readonly WaitUntilClick: number = 2;
    public static readonly Replace: number = 3;
}

SingletonPanelType[SingletonPanelType.Wait.toString()] = "Wait";
SingletonPanelType[SingletonPanelType.WaitUntilClick.toString()] = "WaitUntilClick";
SingletonPanelType[SingletonPanelType.Replace.toString()] = "Replace";