window.App = window.App || {};

window.App.Diagrams = {
    init: function () {
        this.btn = document.getElementById('diagramBtn');
        this.modal = document.getElementById('diagramModal');
        this.closeBtn = document.getElementById('closeDiagramBtn');
        this.dlBtn = document.getElementById('dlPngBtn');
        this.renderCtx = document.getElementById('diagramRenderCtx');

        if (!this.btn || !this.modal) return;
        if (typeof mermaid !== 'undefined') {
            mermaid.initialize({ startOnLoad: false, theme: document.documentElement.classList.contains('dark') ? 'dark' : 'default' });
        }

        this.btn.addEventListener('click', () => this.openModal());
        this.closeBtn.addEventListener('click', () => this.closeModal());
        this.modal.addEventListener('click', (e) => {
            if (e.target === this.modal) this.closeModal();
        });
        this.dlBtn.addEventListener('click', () => this.downloadPNG());
    },

    openModal: function () {
        const fileId = window.currentActiveHash.substring(1);
        const code = window.__CPP_CONTENTS__[fileId] || "";

        let pattern = "";
        const fileObj = window.App.Data.cppFiles.find(f => f.id === fileId);
        const manualOverride = window.__MANUAL_DIAGRAMS__ && window.__MANUAL_DIAGRAMS__[fileId];

        if (manualOverride) {
            pattern = manualOverride + "\n" + this.styles();
        } else if (fileObj && fileObj.diagramPattern) {
            pattern = fileObj.diagramPattern;
        } else {
            pattern = this.generatePatternFromCode(code, fileObj?.title || fileId);
        }

        this.renderDiagram(pattern, fileId);

        this.modal.classList.remove('hidden');
        void this.modal.offsetWidth; // Reflow
        this.modal.classList.remove('opacity-0');
        this.modal.firstElementChild.classList.remove('scale-95');
    },

    closeModal: function () {
        this.modal.classList.add('opacity-0');
        this.modal.firstElementChild.classList.add('scale-95');
        setTimeout(() => { this.modal.classList.add('hidden'); }, 300);
    },

    // 🔷 1. DETECT TYPE
    detectProgramType: function (code, title) {
        const header = title ? title.toLowerCase() : "";
        if (header.includes("recurs")) return "recursion";
        if (/class\s+\w+\s*:\s*(public|private|protected)\s+\w+/.test(code)) return "inheritance";
        if (/class\s+\w+/.test(code)) return "oop";
        if (/(for|while)\s*\(/.test(code)) return "loop";
        if (/if\s*\(/.test(code)) return "decision";
        return "simple";
    },

    // 🔷 2. EXTRACT ALGORITHM-AWARE LOGIC
    extractInfo: function (code) {
        let lines = code.split('\n');
        let initOps = [];
        let bodyOps = [];
        let inLoop = false;

        for (let l of lines) {
            let t = l.trim();
            if (t.startsWith("for") || t.startsWith("while")) inLoop = true;
            if (t === "}") inLoop = false;

            // Extract clean mathematical assignment instructions securely
            if (!t.startsWith("/") && !t.startsWith("cout") && !t.startsWith("cin") && !t.startsWith("return") && !t.startsWith("class") && !t.startsWith("#") && !t.startsWith("using")) {
                let isOp = t.includes("=") || t.includes("++") || t.includes("--") || t.includes("+=") || t.includes("-=");
                if (isOp && !t.includes("==") && !t.includes("for") && !t.includes("while")) {
                    let cleanOp = t.replace(";", "").replace("int ", "").replace("float ", "").replace("double ", "").trim();
                    if (cleanOp.length > 0 && cleanOp.length < 40) {
                        if (inLoop) bodyOps.push(cleanOp);
                        else initOps.push(cleanOp);
                    }
                }
            }
        }

        return {
            hasInput: /cin\s*>>/.test(code),
            hasOutput: /cout\s*<<|printf/.test(code),
            condition: (code.match(/if\s*\((.*?)\)/) || [])[1] || "Condition",
            loop: (code.match(/(for|while)\s*\((.*?)\)/) || [])[2] || "Condition",
            initOps: initOps.length > 0 ? initOps.slice(0, 3) : ["Initialize Variables"],
            bodyOps: bodyOps.length > 0 ? bodyOps.slice(0, 4) : ["Process Logic"]
        };
    },

    // 🔷 3. CLEAN TEXT
    clean: function (txt) {
        if (!txt) return "";
        return txt
            .replace(/&&/g, "AND")
            .replace(/\|\|/g, "OR")
            .replace(/"/g, "'")
            .slice(0, 50);
    },

    // 🔷 4. MAIN GENERATOR
    generatePatternFromCode: function (code, title) {
        const type = this.detectProgramType(code, title);
        const info = this.extractInfo(code);

        switch (type) {
            case "recursion": return this.templateRecursion(info);
            case "inheritance": return this.templateInheritance(info);
            case "oop": return this.templateOOP(info);
            case "loop": return this.templateLoop(info);
            case "decision": return this.templateDecision(info);
            default: return this.templateSimple(info);
        }
    },

    // 🔥 STRUCTURED TEMPLATES (DYNAMIC EDGE ROUTING & AUTO HIDING)
    templateRecursion: function (info) {
        let diag = `flowchart TD\n    A(["Start"]):::startEnd\n`;
        let prev = "A";

        if (info.hasInput) { diag += `    B[/"Enter Input"/]:::input\n    ${prev} --> B\n`; prev = "B"; }
        diag += `    C["Invoke Recursive Function"]:::process\n    ${prev} --> C\n`;

        diag += `    D{"Base Case Reached? (${this.clean(info.condition)})"}:::decision\n    C --> D\n`;

        diag += `    E["Call Self (Recursive Loop)"]:::process\n    D -- No --> E\n    E --> C\n`;

        diag += `    F["Base Return AND Unwind Stack"]:::process\n    D -- Yes --> F\n`;
        prev = "F";

        if (info.hasOutput) { diag += `    G[/"Display Output"/]:::output\n    ${prev} --> G\n`; prev = "G"; }
        diag += `    H(["End"]):::startEnd\n    ${prev} --> H\n\n    ${this.styles()}`;
        return diag;
    },

    templateDecision: function (info) {
        const initText = info.initOps.map(op => this.clean(op)).join("<br>");
        let diag = `flowchart TD\n    A(["Start"]):::startEnd\n`;
        let prev = "A";

        if (info.hasInput) { diag += `    B[/"Enter Input"/]:::input\n    ${prev} --> B\n`; prev = "B"; }
        diag += `    C["${initText}"]:::process\n    ${prev} --> C\n`;
        diag += `    D{"${this.clean(info.condition)} ?"}:::decision\n    C --> D\n`;
        diag += `    E["True Case Logic"]:::process\n    F["False Case Logic"]:::process\n`;

        if (info.hasOutput) {
            diag += `    G[/"Print Result"/]:::output\n    E --> G\n    F --> G\n    G --> H(["End"]):::startEnd\n`;
        } else {
            diag += `    E --> H(["End"]):::startEnd\n    F --> H\n`;
        }

        diag += `    D -- Yes --> E\n    D -- No --> F\n\n    ${this.styles()}`;
        return diag;
    },

    templateLoop: function (info) {
        const loopCond = info.loop ? this.clean(info.loop) : "Condition";
        const initText = info.initOps.map(op => this.clean(op)).join("<br>");
        const bodyText = info.bodyOps.map(op => this.clean(op)).join("<br>");

        let diag = `flowchart TD\n    A(["Start"]):::startEnd\n`;
        let prev = "A";

        if (info.hasInput) { diag += `    B[/"Enter Input"/]:::input\n    ${prev} --> B\n`; prev = "B"; }
        diag += `    C["${initText}"]:::process\n    ${prev} --> C\n`;
        diag += `    D{"${loopCond}"}:::decision\n    C --> D\n`;
        diag += `    E["${bodyText}"]:::process\n    D -- Yes --> E\n    E --> D\n`;

        if (info.hasOutput) {
            diag += `    F[/"Print Result"/]:::output\n    D -- No --> F\n    F --> G(["End"]):::startEnd\n`;
        } else {
            diag += `    D -- No --> G(["End"]):::startEnd\n`;
        }

        diag += `\n    ${this.styles()}`;
        return diag;
    },

    templateOOP: function (info) {
        let diag = `flowchart TD\n    A(["Start"]):::startEnd\n    B["Create Object"]:::process\n    C["Call Methods"]:::process\n    D["Process Inside Class"]:::process\n`;
        diag += `    A --> B --> C --> D\n`;
        if (info.hasOutput) {
            diag += `    E[/"Display Output"/]:::output\n    D --> E\n    E --> F(["End"]):::startEnd\n`;
        } else {
            diag += `    D --> F(["End"]):::startEnd\n`;
        }
        diag += `\n    ${this.styles()}`;
        return diag;
    },

    templateInheritance: function (info) {
        let diag = `flowchart TD\n    A(["Start"]):::startEnd\n    B["Create Derived Object"]:::process\n    C["Access Base Class Features"]:::process\n    D["Access Derived Class Features"]:::process\n`;
        diag += `    A --> B --> C --> D\n`;
        if (info.hasOutput) {
            diag += `    E[/"Display Output"/]:::output\n    D --> E\n    E --> F(["End"]):::startEnd\n`;
        } else {
            diag += `    D --> F(["End"]):::startEnd\n`;
        }
        diag += `\n    ${this.styles()}`;
        return diag;
    },

    templateSimple: function (info) {
        const usedInit = info.initOps[0] !== "Initialize Variables" ? info.initOps.map(op => this.clean(op)).join("<br>") : "Process Logic";
        let diag = `flowchart TD\n    A(["Start"]):::startEnd\n`;
        let prev = "A";

        if (info.hasInput) { diag += `    B[/"Enter Input"/]:::input\n    ${prev} --> B\n`; prev = "B"; }
        diag += `    C["${usedInit}"]:::process\n    ${prev} --> C\n`;
        prev = "C";

        if (info.hasOutput) { diag += `    D[/"Display Output"/]:::output\n    ${prev} --> D\n`; prev = "D"; }
        diag += `    E(["End"]):::startEnd\n    ${prev} --> E\n\n    ${this.styles()}`;
        return diag;
    },

    // 🎨 STYLE
    styles: function () {
        return `
classDef startEnd fill:#22c55e,stroke:#16a34a,color:white,rx:20,ry:20;
classDef input fill:#3b82f6,stroke:#1d4ed8,color:white;
classDef process fill:#facc15,stroke:#ca8a04,color:black;
classDef decision fill:#fb7185,stroke:#e11d48,color:white;
classDef output fill:#a78bfa,stroke:#7c3aed,color:white;
`;
    },

    renderDiagram: async function (patternString, id) {
        this.renderCtx.innerHTML = '<div class="text-gray-500"><i class="fa-solid fa-spinner fa-spin"></i> Rendering diagram...</div>';
        try {
            if (typeof mermaid === 'undefined') {
                this.renderCtx.innerHTML = '<div class="text-red-500">Mermaid.js failed to load.</div>';
                return;
            }
            const uniqueId = `mermaid-${Date.now()}`;

            patternString = patternString.trim();
            const { svg } = await mermaid.render(uniqueId, patternString);

            this.renderCtx.innerHTML = svg;

            const svgEl = this.renderCtx.querySelector('svg');
            if (svgEl) {
                svgEl.style.maxWidth = '100% !important';
                svgEl.style.maxHeight = '100% !important';
                svgEl.style.width = 'auto';
                svgEl.style.height = 'auto';
            }
        } catch (err) {
            console.error("Mermaid Render Error:", err);
            this.renderCtx.innerHTML = `<div class="text-red-500 text-sm p-4 whitespace-pre">Syntax Error generating diagram.\n\n${err.message}</div>`;
        }
    },

    downloadPNG: function () {
        if (typeof html2canvas === 'undefined') {
            window.App.UI.showToast("Error", "html2canvas library not loaded.", true);
            return;
        }

        html2canvas(this.renderCtx, {
            scale: 2,
            backgroundColor: "#ffffff",
            logging: false
        }).then(canvas => {
            const link = document.createElement('a');
            link.download = `diagram_${window.currentActiveHash.substring(1).replace('.cpp', '')}.png`;
            link.href = canvas.toDataURL('image/png');
            link.click();
            window.App.UI.showToast("Success", "Diagram saved as PNG");
        }).catch(err => {
            console.error("html2canvas Error:", err);
            window.App.UI.showToast("Error", "Failed to generate PNG", true);
        });
    }
};
