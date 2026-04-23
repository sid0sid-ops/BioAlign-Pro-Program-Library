window.App.Background = {
    init: function () {
        const c = document.getElementById("matrix-canvas");
        if (!c) return;
        const ctx = c.getContext("2d");

        c.width = window.innerWidth;
        c.height = window.innerHeight;

        const matrixChars = "0101010101{}[]()<>+-*=&|!?;:ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
        const matrix = matrixChars.split("");
        const font_size = 14;
        let columns = c.width / font_size;
        let drops = [];
        for (let x = 0; x < columns; x++) drops[x] = 1;

        let mouseX = -1000;
        let mouseY = -1000;
        document.addEventListener('mousemove', (e) => {
            mouseX = e.clientX;
            mouseY = e.clientY;
        });

        function draw() {
            ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
            ctx.fillRect(0, 0, c.width, c.height);

            const isDark = document.documentElement.classList.contains('dark');
            ctx.font = font_size + "px monospace";

            for (let i = 0; i < drops.length; i++) {
                const text = matrix[Math.floor(Math.random() * matrix.length)];

                let dropX = i * font_size;
                let dropY = drops[i] * font_size;
                let dist = Math.sqrt(Math.pow(dropX - mouseX, 2) + Math.pow(dropY - mouseY, 2));

                // Interaction glow!
                if (dist < 120) {
                    ctx.fillStyle = isDark ? "#ffffff" : "#000000"; // Pure white/black near mouse
                } else if (dist < 200) {
                    ctx.fillStyle = isDark ? "#38bdf8" : "#3b82f6"; // Light blue nearby
                } else {
                    ctx.fillStyle = isDark ? "#0ea5e9" : "#64748b"; // Base color
                }

                ctx.fillText(text, dropX, dropY);
                if (drops[i] * font_size > c.height && Math.random() > 0.975) drops[i] = 0;
                drops[i]++;
            }
        }
        setInterval(draw, 35);

        window.addEventListener('resize', () => {
            c.width = window.innerWidth;
            c.height = window.innerHeight;
            columns = c.width / font_size;
            const newDrops = [];
            for (let x = 0; x < columns; x++) newDrops[x] = drops[x] !== undefined ? drops[x] : Math.random() * (c.height / font_size);
            drops = newDrops;
        });
    }
};
