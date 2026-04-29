window.App.Viewer = {
    handleHashRouting: function () {
        const hash = window.location.hash;
        window.currentActiveHash = hash;

        window.App.UI.initSidebar(document.getElementById('searchInput').value);
        // Scroll the active sidebar link into view (keyboard nav, button clicks)
        setTimeout(() => window.App.UI.scrollActiveSidebarItem(), 50);

        const fileId = hash.substring(1);
        const currentIndex = window.App.Data.cppFiles.findIndex(f => f.id === fileId);

        const prevBtn = document.getElementById('prevBtn');
        const nextBtn = document.getElementById('nextBtn');
        if (prevBtn && nextBtn) {
            if (currentIndex <= 0) { prevBtn.style.opacity = 0.3; prevBtn.style.pointerEvents = 'none'; }
            else { prevBtn.style.opacity = 1; prevBtn.style.pointerEvents = 'auto'; }
            if (currentIndex >= window.App.Data.cppFiles.length - 1 || currentIndex === -1) { nextBtn.style.opacity = 0.3; nextBtn.style.pointerEvents = 'none'; }
            else { nextBtn.style.opacity = 1; nextBtn.style.pointerEvents = 'auto'; }
        }

        const emptyState = document.getElementById('emptyState');
        const viewer = document.getElementById('viewerContainer');

        if (!hash || hash === '#') {
            emptyState.classList.remove('hidden');
            viewer.classList.add('hidden');
            viewer.classList.remove('flex');
            return;
        }

        const fileObj = window.App.Data.cppFiles.find(f => f.id === fileId);
        if (fileObj) {
            emptyState.classList.add('hidden');
            viewer.classList.remove('hidden');
            viewer.classList.add('flex');

            document.getElementById('currentFileName').textContent = fileObj.title;
            document.getElementById('currentUnitName').textContent = fileObj.unit;

            if (document.getElementById('conceptName')) {
                document.getElementById('conceptName').textContent = fileObj.concept;
                document.getElementById('conceptDesc').textContent = fileObj.description;
                document.getElementById('conceptUseCase').textContent = fileObj.useCase;

                const bioNoteEl = document.getElementById('conceptBioNote');
                const bioContainer = document.getElementById('bioNoteContainer');
                if (bioNoteEl && bioContainer) {
                    if (fileObj.bioNote) {
                        bioNoteEl.textContent = fileObj.bioNote;
                        bioContainer.classList.remove('hidden');
                    } else {
                        bioContainer.classList.add('hidden');
                    }
                }
            }

            this.fetchCodeData(fileId);
            window.App.Simulator.resetTerminal();
        }
    },

    fetchCodeData: function (filename) {
        if (window.__CPP_CONTENTS__ && window.__CPP_CONTENTS__[filename]) {
            this.renderCode(window.__CPP_CONTENTS__[filename]);
        } else {
            this.renderCode('// Error: File not found in cache.');
        }
    },

    renderCode: function (text) {
        const codeBlock = document.getElementById('codeBlock');
        codeBlock.textContent = text;
        if (window.Prism) {
            Prism.highlightElement(codeBlock);
        }
    },

    navigateProgram: function (offset) {
        if (!window.currentActiveHash) return;
        const fileId = window.currentActiveHash.substring(1);
        const currentIndex = window.App.Data.cppFiles.findIndex(f => f.id === fileId);
        if (currentIndex === -1) return;

        let newIndex = currentIndex + offset;
        if (newIndex < 0) newIndex = 0;
        if (newIndex >= window.App.Data.cppFiles.length) newIndex = window.App.Data.cppFiles.length - 1;

        window.location.hash = '#' + window.App.Data.cppFiles[newIndex].id;
    },

    copyCode: async function () {
        const fileId = window.currentActiveHash.substring(1);
        if (!fileId || !window.__CPP_CONTENTS__ || !window.__CPP_CONTENTS__[fileId]) return;
        const textToCopy = window.__CPP_CONTENTS__[fileId];

        try {
            await navigator.clipboard.writeText(textToCopy);
            this.triggerCopyAnimation(true);
        } catch (err) {
            this.fallbackCopyTextToClipboard(textToCopy);
        }
    },

    fallbackCopyTextToClipboard: function (text) {
        var textArea = document.getElementById("copyFallback");
        textArea.value = text;
        textArea.focus();
        textArea.select();
        try {
            var successful = document.execCommand('copy');
            this.triggerCopyAnimation(successful);
        } catch (err) {
            this.triggerCopyAnimation(false);
        }
        window.getSelection().removeAllRanges();
    },

    triggerCopyAnimation: function (success) {
        if (success) window.App.UI.showToast("Copied!", "Source code placed in clipboard.");
        else window.App.UI.showToast("Error", "Copy command rejected.", true);

        const btn = document.getElementById('copyBtn');
        if (!btn) return;

        btn.classList.add('bg-emerald-500/20', 'border-emerald-500/50', 'text-emerald-600', 'dark:text-emerald-400', 'scale-95');
        btn.innerHTML = `<i class="fa-solid fa-check sm:mr-0 group-hover:scale-100"></i> <span class="hidden sm:inline ml-2">Copied ✓</span>`;

        setTimeout(() => {
            btn.classList.remove('bg-emerald-500/20', 'border-emerald-500/50', 'text-emerald-600', 'dark:text-emerald-400', 'scale-95');
            btn.innerHTML = `<i class="fa-regular fa-copy group-hover:scale-110 transition-transform duration-200"></i> <span class="hidden sm:inline ml-2">Copy Code</span>`;
        }, 1500);
    },

    downloadCode: function () {
        const fileId = window.currentActiveHash.substring(1);
        if (!fileId || !window.__CPP_CONTENTS__[fileId]) return;
        const textToDownload = window.__CPP_CONTENTS__[fileId];
        const blob = new Blob([textToDownload], { type: 'text/x-c++src' });
        const url = URL.createObjectURL(blob);

        const a = document.createElement('a');
        a.style.display = 'none';
        a.href = url;
        a.download = fileId;
        document.body.appendChild(a);
        a.click();

        window.URL.revokeObjectURL(url);
        a.remove();
    }
};
