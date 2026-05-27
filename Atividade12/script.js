const janela = document.getElementById("janela");
const statusTexto = document.getElementById("status");

let quebrada = false;

// Abrir janela
janela.addEventListener("mouseover", () => {
    if (!quebrada) {
        janela.src = "Janelas/Janela Aberta.jpg";
        statusTexto.textContent = "Janela Aberta";
    }
});

// Fechar janela
janela.addEventListener("mouseout", () => {
    if (!quebrada) {
        janela.src = "Janelas/Janela Fechada.webp";
        statusTexto.textContent = "Janela Fechada";
    }
});

// Quebrar janela
janela.addEventListener("click", () => {
    janela.src = "Janelas/Janela Quebrada.jfif";
    statusTexto.textContent = "Janela Quebrada";
    quebrada = true;
});