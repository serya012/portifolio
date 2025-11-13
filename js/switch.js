// switch.js - Versão otimizada
function verificarModo() {
    fetch('/mode.json')
        .then(response => response.json())
        .then(data => {
            const modo = data.mode;
            const caminhoAtual = window.location.pathname;

            // Se tá FECHADO e NÃO está na manutenção
            if (modo === "close" && !caminhoAtual.includes('maintenance.html')) {
                window.location.href = '/html/maintenance.html';
            }

            // Se tá ABERTO e ESTÁ na manutenção
            if (modo === "open" && caminhoAtual.includes('maintenance.html')) {
                window.location.href = '/html/index.html';
            }
        })
        .catch(err => {
            console.error("Erro ao carregar mode.json:", err);
        });
}

// Verifica imediatamente
verificarModo();

// Se estiver na página de manutenção, verifica periodicamente
if (window.location.pathname.includes('maintenance.html')) {
    setInterval(verificarModo, 5000); // Verifica a cada 5 segundos
}