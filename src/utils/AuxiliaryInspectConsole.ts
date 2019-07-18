class AuxiliaryInspectConsole {
    public static MAX_MESSAGE_LEN: number = 100;
    public static MAX_MESSAGE_UNHANDLE_ERROR_LEN: number = 2;
    public static DOUBLE_TAP_THRESHOLD: number = 200;

    private messageArr_: Array<Object>;
    private messageUnhandledErrorArr_: Array<Object>;
    private lastTapTimestamp_: number;
    private webPlayer_: any;
    private rootView_: any;
    private messageDiv_: any;

    constructor(view: any, webPlayer: any) {
        this.rootView_ = view;
        this.webPlayer_ = webPlayer;
        this.messageArr_ = new Array<Object>();
        this.messageUnhandledErrorArr_ = new Array<Object>();
        this.lastTapTimestamp_ = 0;
        this.createMessageDiv();
        this.init();
    }

    public init(): void {
        const self = this;
        const log: Function = console.log;
        console.log = (...args) => {
            log.apply(console, args);
            self.addConsoleMessage(args, kConsole.LOG);
        };
        const warn: Function = console.warn;
        console.warn = (...args) => {
            warn.apply(console, args);
            self.addConsoleMessage(args, kConsole.WARN);
        };
        const info: Function = console.info;
        console.info = (...args) => {
            info.apply(console, args);
            self.addConsoleMessage(args, kConsole.INFO);
        };
        const error: Function = console.error;
        console.error = (...args) => {
            error.apply(console, args);
            self.addConsoleMessage(args, kConsole.ERROR);
        };
        const debug: Function = console.debug;
        console.debug = (...args) => {
            debug.apply(console, args);
            self.addConsoleMessage(args, kConsole.DEBUG);
        };
        const trace: Function = console.trace;
        console.trace = (...args) => {
            trace.apply(console, args);
            self.addConsoleMessage(args, kConsole.TRACE);
        };
        window.onerror = (message, source, lineno, colno, error) => {
            const str: string = error.stack.toString().substr(0, 300);
            self.addMsg(str, kConsole.UNHANDLE_ERROR);
            return false;
        };
        window.addEventListener("error", (e: any) => {
            self.addMsg(e.error.message, kConsole.UNHANDLE_ERROR);
        });
    }

    public addMsg(msg: string, type: string): void {
        const object = {
            msg,
            type,
        };

        if (type !== kConsole.UNHANDLE_ERROR) {
            this.messageArr_.push(object);

            if (this.messageArr_.length > AuxiliaryInspectConsole.MAX_MESSAGE_LEN) {
                this.messageArr_.shift();
            }
            else {
                if (msg === null || msg === void 0) {
                    return;
                }

                this.messageUnhandledErrorArr_.push(object);

                if (this.messageUnhandledErrorArr_.length > AuxiliaryInspectConsole.MAX_MESSAGE_UNHANDLE_ERROR_LEN) {
                    this.messageUnhandledErrorArr_.shift();
                }
                this.showDiv(true);  
            }
        }
    }

    public onLongTap(): void {
    }

    public onTapEnd(): void {
    }

    private addConsoleMessage(args: any, type: string): void {
        let msg: string = "";

        if (args === null || args.length === 0 || args.length === null) {
            msg = "[AuxiliaryInspectConsole][addMessage]no arguments: " + type;
        }
        else {
            msg = args[0];
        }

        this.addMsg(msg, type);
    }

    private showDiv(isShow?: boolean): void {
        if (isShow === void 0) {
            isShow = false;
        }

        const logState: string = egret.localStorage.getItem("logstate");

        if (isShow || logState !== null && logState !== "false") {
            if (DeviceUtils.isMobile()) {
                this.messageDiv_.style.left = this.webPlayer_.canvas.style.left;
                this.messageDiv_.style.top = this.webPlayer_.canvas.style.top;
                this.messageDiv_.style.width = this.webPlayer_.canvas.style.width;
                this.messageDiv_.style.height = this.webPlayer_.canvas.style.height;
                this.messageDiv_.style.transform = this.webPlayer_.canvas.style.transform;
                this.messageDiv_.style.transformOrigin = "0% 0% 0px";
            }

            let clientHeight = 0;
            let scrollTop = 0;
            let scrollHeight = 0;

            do {
                this.refreshDiv();
                clientHeight = this.messageDiv_.clientHeight;
                scrollTop = this.messageDiv_.scrollTop;
                scrollHeight = this.messageDiv_.scrollHeight;
            } while((scrollTop + scrollHeight) > clientHeight && this.messageArr_.shift());

            this.messageDiv_.style.visibility = "visible";
        }
    }

    private refreshDiv(): void {
        for (; this.messageDiv_.firstChild;) {
            this.messageDiv_.removeChild(this.messageDiv_.firstChild);
        }

        const elements: any = document.createElement("elements");
        const socketHall: any = document.createElement("socketHall");
        socketHall.innerHTML = "hall: ";

        
    }

    private createMessageDiv(): void {
        this.messageDiv_ = document.createElement("div");
        this.messageDiv_.id = "MessageDiv";
        document.body.appendChild(this.messageDiv_);
        this.messageDiv_.style.position = "absolute";
        this.messageDiv_.style.pointerEvents = "none";
        this.messageDiv_.style.background = "rgba(0, 0, 0, 7)";
        this.messageDiv_.style.fontSize = "12px";
        this.messageDiv_.style.width = "100%";
        this.messageDiv_.style.height = "100%";
        this.messageDiv_.style.left = "0px";
        this.messageDiv_.style.right = "0px";
        this.messageDiv_.style.bottom = "0px";
        this.messageDiv_.style.top = "0px";
        this.messageDiv_.style.visibility = "hidden";
    }
}