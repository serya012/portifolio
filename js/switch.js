// switch.js ATUALIZADO - Para sistema com 1 HTML só
function verificarModo() {
    fetch('/mode.json')
        .then(response => response.json())
        .then(data => {
            const modo = data.mode;

            if (modo === "close") {
                // Ativa modo manutenção (modal)
                document.body.classList.add('maintenance-active');
            } else {
                // Desativa modo manutenção  
                document.body.classList.remove('maintenance-active');
            }
        })
        .catch(err => {
            console.error("Erro ao carregar mode.json:", err);
        });
}

// Verifica imediatamente
verificarModo();

// Se estiver em manutenção, verifica a cada 5 segundos
setInterval(verificarModo, 5000);