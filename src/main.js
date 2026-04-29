window.currentActiveHash = '';

// ─── Tab Engine ────────────────────────────────────────────────────────────────
// Active-tab classes (Tailwind)
const TAB_ACTIVE   = ['border-primary', 'text-primary', 'bg-primary/5'];
const TAB_INACTIVE = ['border-transparent', 'text-gray-400'];

window.App.Tabs = {
    current: 'code',

    init: function () {
        document.querySelectorAll('.tab-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                const tab = btn.dataset.tab;
                window.App.Tabs.switch(tab);
            });
        });
    },

    switch: function (tab) {
        this.current = tab;

        // Toggle button styles
        document.querySelectorAll('.tab-btn').forEach(btn => {
            const isActive = btn.dataset.tab === tab;
            if (isActive) {
                TAB_ACTIVE.forEach(c => btn.classList.add(c));
                TAB_INACTIVE.forEach(c => btn.classList.remove(c));
            } else {
                TAB_INACTIVE.forEach(c => btn.classList.add(c));
                TAB_ACTIVE.forEach(c => btn.classList.remove(c));
            }
        });

        // Show/hide panels
        document.querySelectorAll('.tab-panel').forEach(panel => {
            panel.classList.add('hidden');
        });
        const active = document.getElementById('tabPanel-' + tab);
        if (active) active.classList.remove('hidden');
    },

    // Called by Simulator after run completes — mirrors terminal content to Output tab
    syncOutput: function (html) {
        const panel = document.getElementById('tabPanel-output');
        if (panel) panel.innerHTML = html || '<span class="text-gray-500">No output produced.</span>';
    }
};
// ───────────────────────────────────────────────────────────────────────────────

document.addEventListener('DOMContentLoaded', () => {
    window.App.Background.init();
    window.App.UI.initSidebar();
    if (window.App.UI.initTerminalResizer) window.App.UI.initTerminalResizer();
    if (window.App.UI.initSidebarResizer) window.App.UI.initSidebarResizer();
    if (window.App.Diagrams) window.App.Diagrams.init();

    // 🧩 Initialize tabs
    window.App.Tabs.init();

    document.getElementById('themeToggle').addEventListener('click', () => window.App.UI.toggleTheme());
    document.getElementById('searchInput').addEventListener('input', (e) => window.App.Search.handleInput(e));
    document.getElementById('clearSearch').addEventListener('click', () => window.App.Search.clear());
    document.getElementById('copyBtn').addEventListener('click', () => window.App.Viewer.copyCode());
    document.getElementById('downloadBtn').addEventListener('click', () => window.App.Viewer.downloadCode());

    document.getElementById('prevBtn').addEventListener('click', () => window.App.Viewer.navigateProgram(-1));
    document.getElementById('nextBtn').addEventListener('click', () => window.App.Viewer.navigateProgram(1));

    document.getElementById('mobileMenuBtn').addEventListener('click', () => window.App.UI.toggleMobileMenu());
    document.getElementById('sidebarOverlay').addEventListener('click', () => window.App.UI.toggleMobileMenu());
    const mobileSearchBtn = document.getElementById('mobileSearchBtn');
    if (mobileSearchBtn) {
        mobileSearchBtn.addEventListener('click', () => {
            if (!window.App.isMenuOpen) {
                window.App.UI.toggleMobileMenu();
            }
            setTimeout(() => {
                document.getElementById('searchInput').focus();
            }, 300);
        });
    }

    const runBtn = document.getElementById('runBtn');
    if (runBtn) runBtn.addEventListener('click', () => window.App.Simulator.runCompiler());

    const closeConceptBtn = document.getElementById('closeConceptBtn');
    const openConceptBtn  = document.getElementById('openConceptBtn');
    const conceptPanel    = document.getElementById('conceptPanel');

    if (closeConceptBtn && conceptPanel && openConceptBtn) {
        closeConceptBtn.addEventListener('click', () => {
            conceptPanel.classList.add('hidden');
            openConceptBtn.classList.remove('hidden');
        });
        openConceptBtn.addEventListener('click', () => {
            conceptPanel.classList.remove('hidden');
            openConceptBtn.classList.add('hidden');
        });
    }

    window.addEventListener('hashchange', () => window.App.Viewer.handleHashRouting());
    window.App.Viewer.handleHashRouting();

    // ⌨️ Keyboard Navigation (← →)
    document.addEventListener('keydown', (e) => {
        if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') return;
        if (e.key === 'ArrowRight') window.App.Viewer.navigateProgram(1);
        if (e.key === 'ArrowLeft')  window.App.Viewer.navigateProgram(-1);
    });
});
