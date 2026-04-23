window.App = window.App || {};

window.App.Diagrams = {
    init: function () {
        this.btn = document.getElementById('diagramBtn');
        this.modal = document.getElementById('diagramModal');
        this.closeBtn = document.getElementById('closeDiagramBtn');
        this.dlBtn = document.getElementById('dlPngBtn');
        this.renderCtx = document.getElementById('diagramRenderCtx');

        if (!this.btn || !this.modal) return;

        // Initialize Mermaid
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

        if (fileObj && fileObj.diagramPattern) {
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
        setTimeout(() => {
            this.modal.classList.add('hidden');
        }, 300);
    },

    generatePatternFromCode: function (code, title) {
        let definitions = [];
        let edges = [];
        let n = 1;

        definitions.push(`NodeStart(["Start"]):::greenOut`);
        let current = "NodeStart";

        // Check file characteristics
        const hasInput = code.includes("cin >>");
        const hasOutput = code.includes("cout <<");
        const loops = code.match(/(for|while)\s*\((.*?)\)/);
        const ifCondition = code.match(/if\s*\((.*?)\)/);
        const functions = code.match(/\w+\s+(\w+)\s*\(.*\)\s*\{/g);
        const isInheritance = code.match(/class\s+(\w+)\s*:\s*.*?(public|protected|private)\s+(\w+)/);
        const isOOP = code.match(/class\s+(\w+)/);

        const cleanCondition = (txt) => txt.replace(/"/g, "'").substring(0, 70).trim();

        // 1. Input
        if (hasInput) {
            let id = `N${n++}`;
            definitions.push(`${id}[/"Input Param(s)"/]:::blue`);
            edges.push(`    ${current} --> ${id}`);
            current = id;
        }

        // 2. Logic processing based on predominant paradigm
        if (isInheritance) {
            let derived = isInheritance[1];
            let base = isInheritance[3];

            let id1 = `N${n++}`; definitions.push(`${id1}["Instantiate Object of ${derived}"]:::blue`);
            edges.push(`    ${current} --> ${id1}`); current = id1;

            let id2 = `N${n++}`; definitions.push(`${id2}["Use Inherited Base (${base}) Features"]:::yellow`);
            edges.push(`    ${current} --> ${id2}`); current = id2;

            let id3 = `N${n++}`; definitions.push(`${id3}["Use Specific Derived (${derived}) Features"]:::yellow`);
            edges.push(`    ${current} --> ${id3}`); current = id3;
        }
        else if (isOOP) {
            let id1 = `N${n++}`; definitions.push(`${id1}["Instantiate Class Object"]:::blue`);
            edges.push(`    ${current} --> ${id1}`); current = id1;

            let id2 = `N${n++}`; definitions.push(`${id2}["Invoke Object Methods / Encapsulated Logic"]:::yellow`);
            edges.push(`    ${current} --> ${id2}`); current = id2;
        }
        let tokens = [];
        let ifMatches = [...code.matchAll(/(?:else\s+)?if\s*\((.*)\)/g)];
        let loopMatches = [...code.matchAll(/(for|while)\s*\((.*)\)/g)];
        let switchMatches = [...code.matchAll(/switch\s*\((.*)\)/g)];
        let funcMatches = [...code.matchAll(/\w+\s+(\w+)\s*\(.*\)\s*\{/g)].filter(m => m[1] !== 'main');

        tokens.push(...ifMatches.map(m => ({ type: 'if', cond: m[1], index: m.index })));
        tokens.push(...loopMatches.map(m => ({ type: 'loop', cond: m[2], index: m.index })));
        tokens.push(...switchMatches.map(m => ({ type: 'switch', cond: m[1], index: m.index })));
        if (funcMatches.length > 0) tokens.push({ type: 'func', index: funcMatches[0].index });

        tokens.sort((a, b) => a.index - b.index);

        let i = 0;
        while (i < tokens.length) {
            let t = tokens[i];
            if (t.type === 'if') {
                let condList = [t];
                // Gather adjacent conditions logically to form an else if ladder
                while (i + 1 < tokens.length && tokens[i + 1].type === 'if') {
                    condList.push(tokens[i + 1]); i++;
                }

                let convergeId = `N${n++}`; definitions.push(`${convergeId}(( )):::yellow`);
                for (let j = 0; j < condList.length; j++) {
                    let c = condList[j];
                    let condId = `N${n++}`;
                    let logicStr = cleanCondition(c.cond);
                    if (logicStr.includes('400')) logicStr = "(year % 400 == 0) OR (year % 4 == 0 AND year % 100 != 0)";

                    definitions.push(`${condId}{"${logicStr} ?"}:::yellow`);
                    if (j === 0) edges.push(`    ${current} --> ${condId}`);
                    else edges.push(`    ${current} -- "No" --> ${condId}`);

                    let trueId = `N${n++}`; definitions.push(`${trueId}["Execute Condition ${j + 1} True"]:::blue`);
                    edges.push(`    ${condId} -- "Yes" --> ${trueId}`);
                    edges.push(`    ${trueId} --> ${convergeId}`);

                    current = condId;
                }

                let falseId = `N${n++}`; definitions.push(`${falseId}["Execute Else/Fallback"]:::blue`);
                edges.push(`    ${current} -- "No" --> ${falseId}`);
                edges.push(`    ${falseId} --> ${convergeId}`);
                current = convergeId;
            }
            else if (t.type === 'loop') {
                let loopId = `N${n++}`; definitions.push(`${loopId}{{"Loop: ${cleanCondition(t.cond)}"}}:::yellow`);
                edges.push(`    ${current} --> ${loopId}`);
                let bodyId = `N${n++}`; definitions.push(`${bodyId}["Process Loop Logic"]:::blue`);
                edges.push(`    ${loopId} -- "True" --> ${bodyId}`);
                edges.push(`    ${bodyId} -- "Iterate" --> ${loopId}`);
                let contId = `N${n++}`; definitions.push(`${contId}(( )):::yellow`);
                edges.push(`    ${loopId} -- "False" --> ${contId}`);
                current = contId;
            }
            else if (t.type === 'switch') {
                let swId = `N${n++}`; definitions.push(`${swId}{"Switch: ${cleanCondition(t.cond)}"}:::yellow`);
                edges.push(`    ${current} --> ${swId}`);
                let case1 = `N${n++}`; definitions.push(`${case1}["Match Evaluated Case"]:::blue`);
                let case2 = `N${n++}`; definitions.push(`${case2}["Match Default"]:::blue`);
                edges.push(`    ${swId} -- "Matches" --> ${case1}`);
                edges.push(`    ${swId} -- "Default" --> ${case2}`);
                let convergeId = `N${n++}`; definitions.push(`${convergeId}(( )):::yellow`);
                edges.push(`    ${case1} --> ${convergeId}`);
                edges.push(`    ${case2} --> ${convergeId}`);
                current = convergeId;
            }
            else if (t.type === 'func') {
                let callId = `N${n++}`; definitions.push(`${callId}["Call Helper Function(s)"]:::yellow`);
                edges.push(`    ${current} --> ${callId}`);
                let retId = `N${n++}`; definitions.push(`${retId}["Apply Return Logic"]:::blue`);
                edges.push(`    ${callId} --> ${retId}`);
                current = retId;
            }
            i++;
        }

        // 3. Output
        if (hasOutput && current) {
            let outId = `N${n++}`;
            definitions.push(`${outId}[/"Display / Print Results"/]:::blue`);
            edges.push(`    ${current} --> ${outId}`);
            current = outId;
        }

        // 4. End
        definitions.push(`NodeEnd(["End"]):::redOut`);
        if (current) {
            edges.push(`    ${current} --> NodeEnd`);
        }

        let graphDef = "flowchart TD\n" + edges.join('\n') + "\n\n" + definitions.join('\n');
        graphDef += `\n    classDef greenOut fill:#4ade80,stroke:#22c55e,color:black,rx:15,ry:15;\n`;
        graphDef += `    classDef blue fill:#60a5fa,stroke:#3b82f6,color:black,rx:5,ry:5;\n`;
        graphDef += `    classDef yellow fill:#fde047,stroke:#eab308,color:black,rx:5,ry:5;\n`;
        graphDef += `    classDef redOut fill:#f87171,stroke:#ef4444,color:white,rx:15,ry:15;\n`;
        return graphDef;
    },

    renderDiagram: async function (patternString, id) {
        this.renderCtx.innerHTML = '<div class="text-gray-500"><i class="fa-solid fa-spinner fa-spin"></i> Rendering diagram...</div>';
        try {
            if (typeof mermaid === 'undefined') {
                this.renderCtx.innerHTML = '<div class="text-red-500">Mermaid.js failed to load.</div>';
                return;
            }
            // ensure unique id across rerenders
            const uniqueId = `mermaid-${Date.now()}`;
            const { svg } = await mermaid.render(uniqueId, patternString.replace(/\r/g, ""));
            this.renderCtx.innerHTML = svg;
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
