window.currentActiveHash = '';

document.addEventListener('DOMContentLoaded', () => {
    window.App.Background.init();
    window.App.UI.initSidebar();
    if (window.App.UI.initTerminalResizer) window.App.UI.initTerminalResizer();
    if (window.App.Diagrams) window.App.Diagrams.init();

    document.getElementById('themeToggle').addEventListener('click', () => window.App.UI.toggleTheme());
    document.getElementById('searchInput').addEventListener('input', (e) => window.App.Search.handleInput(e));
    document.getElementById('clearSearch').addEventListener('click', () => window.App.Search.clear());
    document.getElementById('copyBtn').addEventListener('click', () => window.App.Viewer.copyCode());
    document.getElementById('downloadBtn').addEventListener('click', () => window.App.Viewer.downloadCode());

    document.getElementById('prevBtn').addEventListener('click', () => window.App.Viewer.navigateProgram(-1));
    document.getElementById('nextBtn').addEventListener('click', () => window.App.Viewer.navigateProgram(1));

    document.getElementById('mobileMenuBtn').addEventListener('click', () => window.App.UI.toggleMobileMenu());
    document.getElementById('sidebarOverlay').addEventListener('click', () => window.App.UI.toggleMobileMenu());

    const runBtn = document.getElementById('runBtn');
    if (runBtn) runBtn.addEventListener('click', () => window.App.Simulator.runCompiler());

    const closeConceptBtn = document.getElementById('closeConceptBtn');
    const openConceptBtn = document.getElementById('openConceptBtn');
    const conceptPanel = document.getElementById('conceptPanel');

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
});
