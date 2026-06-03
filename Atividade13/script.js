const texto = document.getElementById("texto");
const maiusculas = document.getElementById("maiusculas");
const minusculas = document.getElementById("minusculas");
const resultado = document.getElementById("resultado");

function transformarTexto() {
    let valor = texto.value;

    if (maiusculas.checked) {
        resultado.textContent = valor.toUpperCase();
    } else if (minusculas.checked) {
        resultado.textContent = valor.toLowerCase();
    }
}

texto.addEventListener("input", transformarTexto);
maiusculas.addEventListener("change", transformarTexto);
minusculas.addEventListener("change", transformarTexto);