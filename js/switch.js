fetch('./mode.json')
  .then(response => response.json())
  .then(data => {
    const modo = data.mode;

    if (modo === "close" && !window.location.pathname.includes("maintenance.html")) {
      window.location.href = "maintenance.html";
    } else if (modo === "open" && window.location.pathname.includes("maintenance.html")) {
      window.location.href = "index.html";
    }
  })
  .catch(err => console.error("Erro ao carregar mode.json:", err));