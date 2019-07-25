class SceneBase extends eui.Component {
    private customEvents_: Array<any>;
    private panels_: Array<PanelBase>;

    constructor(className: string) {
        super();

        this.name = className;
        this.customEvents_ = new Array();
        this.panels_ = new Array();
        this.initScene();
    }

    public initScene(): void {
    }

    public enterScene(): void {
    }

    public leaveScene(): void {
        this.clearPanel();

        for (let i = 0, len = this.customEvents_.length; i < len; ++i) {
            const ui: any = this.customEvents_[i].ui;
            const eventName: string = this.customEvents_[i].eventName;
            const listener: Function = this.customEvents_[i].listener;
            const thisObject: any = this.customEvents_[i].thisObject;
            ui.removeEventListener(eventName, listener, thisObject);
        }
    }

    public containsPanel(panelName: string): boolean {
        const index: number = this.findPanelByName(panelName);

        return index >= 0;
    }

    public isTopPanel(panelName: string): boolean {
        const index: number = this.findPanelByName(panelName);

        return index === this.panels_.length - 1;
    }

    public addPanel(panel: PanelBase): void {
        let index: number = -1;
        let count: number = 0;
        let insertPos: number = -1;

        if (panel.adhereToPanel === null) {
            for (let i = 0; i < this.numChildren; ++i) {
                const child: any = this.getChildAt(i);

                if (child instanceof PanelBase) {
                    if (child.layer > panel.layer) {
                        index = i;
                        insertPos = count + 1;
                        break;
                    }
                    ++count;
                }
            }
        }
        else {
            for (let i = 0; i < this.numChildren; ++i) {
                const child: any = this.getChildAt(i);

                if (child instanceof PanelBase) {
                    if (child === panel.adhereToPanel) {
                        index = i + 1;
                        insertPos = count + 1;
                        break;
                    }
                }
            }
        }

        if (insertPos !== -1) {
            this.addChildAt(panel, index);
            this.panels_.splice(insertPos, 0, panel);
        }
        else {
            this.addChild(panel);
            this.panels_.push(panel);
        }
        panel.makeMeCenter();
        panel.addToScene();
    }

    public removePanel(panel: PanelBase): void {
        if (panel === void 0 || panel === null) {
            return;
        }

        const index: number = this.findPanel(panel);

        if (index === -1) {
            console.error("SceneBase.removePanel: ", "remove panel " + panel.name + " is failed.");
            return;
        }

        this.panels_.splice(index, 1);

        if (this.contains(panel)) {
            this.removeChild(panel);
        }

        panel.leavePanel();
        panel.removeFromScene();
    }

    public removePanelByName(panelName: any): void {
        let panel: PanelBase;

        for (let i = this.panels_.length - 1; i > 0; --i) {
            if (this.panels_[i].panelName.indexOf(panelName) === 0) {
                panel = this.panels_[i];
                break;
            }
        }

        this.removePanel(panel);
    }

    public findPanel(panel: PanelBase): number {
        if (panel === void 0 || panel === null) {
            return -1;
        }

        for (let len = this.panels_.length - 1; len > 0; --len) {
            if (this.panels_[len] === panel) {
                return len;
            }
        }

        return -1;
    }

    public findPanelByName(panelName: string): number {
        if (panelName === void 0 || panelName === null || panelName === "") {
            return -1;
        }

        for (let len = this.panels_.length - 1; len > 0; --len) {
            if (this.panels_[len].panelName.indexOf(panelName) === 0) {
                return len;
            }
        }

        return -1;
    }

    public getPanelsNum(): number {
        return this.panels_.length;
    }

    public addCustomEventListener(ui: any, eventName: string, listener: Function, thisObject: any): void {
        ui.addEventListener(eventName, listener, thisObject);
        const obj: any = {
            ui,
            eventName,
            listener,
            thisObject,
        }
        this.customEvents_.push(obj);
    }

    private clearPanel(): void {
        for (let i = 0, len = this.panels_.length; i < len; ++i) {
            this.removePanel(this.panels_[i]);
        }
        this.panels_ = [];
    }
}