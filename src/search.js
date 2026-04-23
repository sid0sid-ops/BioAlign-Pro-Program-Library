window.App.Search = {
    debounceTimer: null,

    handleInput: function (e) {
        clearTimeout(this.debounceTimer);
        const query = e.target.value.trim();
        const clearBtn = document.getElementById('clearSearch');
        if (query.length > 0) clearBtn.classList.remove('hidden');
        else clearBtn.classList.add('hidden');

        this.debounceTimer = setTimeout(() => {
            window.App.UI.initSidebar(query);
        }, 200);
    },

    clear: function () {
        const input = document.getElementById('searchInput');
        input.value = '';
        document.getElementById('clearSearch').classList.add('hidden');
        window.App.UI.initSidebar('');
        input.focus();
    }
};
