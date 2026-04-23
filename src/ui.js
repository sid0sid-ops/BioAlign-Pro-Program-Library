window.App.UI = {
    initSidebar: function (searchQuery = "") {
        const sidebar = document.getElementById('sidebarContent');
        sidebar.innerHTML = '';

        // Add Expand/Collapse All buttons at the top
        const controlsDiv = document.createElement('div');
        controlsDiv.className = 'flex items-center justify-end px-4 py-2 gap-2 text-[10px] text-gray-500 uppercase tracking-wide border-b border-gray-200 dark:border-[#333333] shrink-0';
        controlsDiv.innerHTML = `
            <button id="expandAll" class="hover:text-primary transition-colors focus:outline-none"><i class="fa-solid fa-angles-down"></i> Expand All</button>
            <span class="opacity-30">|</span>
            <button id="collapseAll" class="hover:text-primary transition-colors focus:outline-none"><i class="fa-solid fa-angles-up"></i> Collapse All</button>
        `;

        const units = {};
        window.App.Data.cppFiles.forEach(file => {
            let match = true;
            if (searchQuery) {
                const q = searchQuery.toLowerCase();
                // Narrowed search scope to prevent invisible matches
                const textTarget = (file.title + " " + file.concept).toLowerCase();
                if (!textTarget.includes(q)) match = false;
            }
            if (!match) return;

            if (!units[file.unit]) units[file.unit] = [];
            units[file.unit].push(file);
        });

        if (Object.keys(units).length === 0) {
            sidebar.innerHTML = `
                <div class="px-4 py-12 text-center text-sm text-gray-400">
                    <i class="fa-solid fa-magnifying-glass opacity-30 text-4xl mb-3"></i><br>
                    No concepts or programs found<br>matching "<span class="text-gray-600 dark:text-gray-300">${searchQuery}</span>"
                </div>
            `;
            return;
        }

        sidebar.appendChild(controlsDiv);

        const allContents = [];
        const allIcons = [];

        for (const [unitName, files] of Object.entries(units)) {
            const unitMeta = window.App.Data.units[unitName] || { icon: '📂', title: unitName };
            const container = document.createElement('div');
            container.className = 'mb-1';

            const btn = document.createElement('button');
            btn.className = 'w-full flex justify-between items-center px-4 py-3 text-sm font-semibold text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-white/5 rounded-md transition-colors focus:outline-none border-b border-transparent dark:hover:border-[#333333]/50';
            btn.innerHTML = `
                <div class="flex items-center text-xs uppercase tracking-wide opacity-90 truncate w-full">
                    <span class="text-base mr-2">${unitMeta.icon}</span> 
                    <span class="truncate pr-2 mt-0.5">${unitMeta.title} <span class="text-[9px] font-mono bg-gray-200 dark:bg-white/10 text-gray-500 px-1.5 py-0.5 rounded-full ml-1">${files.length}</span></span>
                </div>
                <i class="fa-solid fa-chevron-down text-[10px] transition-transform duration-300 transform shrink-0"></i>
            `;

            const content = document.createElement('div');
            content.className = 'accordion-content flex flex-col gap-0.5 mt-1 overflow-hidden transition-all duration-300';

            const isOpen = localStorage.getItem('acc_' + unitName) === 'true';

            const icon = btn.querySelector('.fa-chevron-down');
            allContents.push(content);
            allIcons.push(icon);

            if (isOpen || searchQuery !== "") {
                content.style.maxHeight = '3000px';
                icon.style.transform = 'rotate(0deg)';
            } else {
                content.style.maxHeight = '0px';
                icon.style.transform = 'rotate(-90deg)';
            }

            btn.onclick = () => {
                const isCurrentlyOpen = content.style.maxHeight !== '0px';
                if (!isCurrentlyOpen) {
                    content.style.maxHeight = content.scrollHeight + 'px';
                    icon.style.transform = 'rotate(0deg)';
                    setTimeout(() => content.style.maxHeight = '3000px', 300);
                    localStorage.setItem('acc_' + unitName, 'true');
                } else {
                    content.style.maxHeight = content.scrollHeight + 'px';
                    content.offsetHeight;
                    content.style.maxHeight = '0px';
                    icon.style.transform = 'rotate(-90deg)';
                    localStorage.setItem('acc_' + unitName, 'false');
                }
            };

            files.forEach(file => {
                const link = document.createElement('a');
                link.href = `#${file.id}`;
                link.className = `flex items-center px-4 py-2 ml-2 text-sm rounded-md transition-all truncate-fluid relative group ${window.currentActiveHash === `#${file.id}` ? 'bg-primary/10 text-primary font-medium border-l-[3px] border-primary' : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-gray-50 dark:hover:bg-white/5 border-l-[3px] border-transparent hover:border-gray-200 dark:hover:border-[#333333]'
                    }`;

                let displayTitle = file.title;
                if (searchQuery) {
                    const safeRegexQuery = searchQuery.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
                    const regex = new RegExp(`(${safeRegexQuery})`, 'gi');
                    displayTitle = displayTitle.replace(regex, '<mark class="bg-primary/30 text-inherit rounded px-0.5 font-bold">$1</mark>');
                }

                link.innerHTML = `
                    <svg viewBox="0 0 128 128" width="1em" height="1em" class="w-[14px] h-[14px] mr-2 opacity-50 group-hover:opacity-100 group-hover:text-primary fill-current shrink-0 transition-colors"><path d="M118.5,28L71,1.5c-4.3-2.4-9.7-2.4-14,0L9.5,28C5.2,30.4,2.5,35.1,2.5,40v55.5c0,4.9,2.7,9.6,7,12l47.5,26.5c4.3,2.4,9.7,2.4,14,0l47.5-26.5c4.3-2.4,7-7.1,7-12V40C125.5,35.1,122.8,30.4,118.5,28z M62,81.4c-9,0-15-7-15-17.4s6-17.4,15-17.4c6.2,0,10.6,3.6,13.2,9l-8.5,5c-1.3-3.6-2.9-5-5-5c-4,0-6,3.6-6,9s2,9,6,9c2.5,0,4.2-1.7,5.3-5l8.6,4.6C73,78,68.9,81.4,62,81.4z M90,70.5h-5.9v6.5H76v-6.5h-5.9v-8.1H76v-6.5h8.1v6.5H90V70.5z M107.5,70.5h-5.9v6.5H93.5v-6.5h-5.9v-8.1h5.9v-6.5h8.1v6.5h5.9V70.5z"></path></svg>
                    <span class="truncate-fluid">${displayTitle}</span>
                `;

                link.onclick = (e) => {
                    if (window.innerWidth < 1024 && window.App.isMenuOpen) window.App.UI.toggleMobileMenu();
                };

                content.appendChild(link);
            });

            container.appendChild(btn);
            container.appendChild(content);
            sidebar.appendChild(container);
        }

        document.getElementById('expandAll').onclick = () => {
            allContents.forEach(c => c.style.maxHeight = '3000px');
            allIcons.forEach(i => i.style.transform = 'rotate(0deg)');
            Object.keys(units).forEach(u => localStorage.setItem('acc_' + u, 'true'));
        };
        document.getElementById('collapseAll').onclick = () => {
            allContents.forEach(c => c.style.maxHeight = '0px');
            allIcons.forEach(i => i.style.transform = 'rotate(-90deg)');
            Object.keys(units).forEach(u => localStorage.setItem('acc_' + u, 'false'));
        };
    },

    toggleMobileMenu: function () {
        const sidebar = document.getElementById('sidebar');
        const overlay = document.getElementById('sidebarOverlay');
        const btn = document.getElementById('mobileMenuBtn');

        window.App.isMenuOpen = !window.App.isMenuOpen;

        if (window.App.isMenuOpen) {
            sidebar.classList.remove('-translate-x-full');
            sidebar.classList.add('translate-x-0');
            overlay.classList.remove('hidden');
            setTimeout(() => overlay.classList.remove('opacity-0'), 10);
            btn.classList.add('menu-open');
        } else {
            sidebar.classList.add('-translate-x-full');
            sidebar.classList.remove('translate-x-0');
            overlay.classList.add('opacity-0');
            setTimeout(() => overlay.classList.add('hidden'), 300);
            btn.classList.remove('menu-open');
        }
    },

    toggleTheme: function () {
        const isDark = document.documentElement.classList.toggle('dark');
        localStorage.setItem('theme', isDark ? 'dark' : 'light');
        const icon = document.getElementById('themeIcon');
        if (icon) {
            icon.className = isDark ? 'fa-solid fa-sun text-yellow-500' : 'fa-solid fa-moon text-gray-700';
        }
    },

    showToast: function (title, msg, isError = false) {
        const toast = document.getElementById('toast');
        document.getElementById('toastTitle').textContent = title;
        document.getElementById('toastMsg').textContent = msg;
        const iconDiv = toast.querySelector('div.w-8');
        if (isError) {
            iconDiv.className = "w-8 h-8 rounded-full bg-red-500/20 flex items-center justify-center text-red-400 shrink-0";
            iconDiv.innerHTML = '<i class="fa-solid fa-xmark"></i>';
        } else {
            iconDiv.className = "w-8 h-8 rounded-full bg-emerald-500/20 flex items-center justify-center text-emerald-400 shrink-0";
            iconDiv.innerHTML = '<i class="fa-solid fa-check"></i>';
        }
        toast.classList.remove('translate-y-20', 'opacity-0');
        toast.classList.add('translate-y-0', 'opacity-100');

        setTimeout(() => {
            toast.classList.add('translate-y-20', 'opacity-0');
            toast.classList.remove('translate-y-0', 'opacity-100');
        }, 3000);
    },

    initTerminalResizer: function () {
        const resizer = document.getElementById('terminalResizer');
        const container = document.getElementById('terminalContainer');
        if (!resizer || !container) return;

        let startY = 0;
        let startHeight = 0;

        resizer.addEventListener('mousedown', (e) => {
            startY = e.clientY;
            startHeight = container.offsetHeight;
            document.body.style.cursor = 'ns-resize';

            const mouseMoveHandler = (e) => {
                const dy = startY - e.clientY;
                container.style.height = `${startHeight + dy}px`;
            };

            const mouseUpHandler = () => {
                document.removeEventListener('mousemove', mouseMoveHandler);
                document.removeEventListener('mouseup', mouseUpHandler);
                document.body.style.cursor = '';
            };

            document.addEventListener('mousemove', mouseMoveHandler);
            document.addEventListener('mouseup', mouseUpHandler);
        });
    }
};
