// 1) Maior número
function maiorNumero() {
    let n1 = Number(document.getElementById("n1").value);
    let n2 = Number(document.getElementById("n2").value);
    let n3 = Number(document.getElementById("n3").value);

    let maior = Math.max(n1, n2, n3);

    document.getElementById("res1").innerText = "Maior: " + maior;
}

// 2) Ordem crescente
function ordemCrescente() {
    let nums = [
        Number(document.getElementById("o1").value),
        Number(document.getElementById("o2").value),
        Number(document.getElementById("o3").value)
    ];

    nums.sort((a, b) => a - b);

    document.getElementById("res2").innerText = nums.join(", ");
}

// 3) Palíndromo
function verificarPalindromo() {
    let texto = document.getElementById("texto").value
        .toLowerCase()
        .replace(/\s/g, "");

    let invertido = texto.split("").reverse().join("");

    let resultado = (texto === invertido) ? "É palíndromo" : "Não é palíndromo";

    document.getElementById("res3").innerText = resultado;
}

// 4) Subconjunto
function verificarSubconjunto() {
    let p1 = document.getElementById("p1").value;
    let p2 = document.getElementById("p2").value;

    if (!p1 || !p2) {
        document.getElementById("res4").innerText = "Erro";
        return;
    }

    let resultado = p1.includes(p2)
        ? "É um subconjunto"
        : "Não é um subconjunto";

    document.getElementById("res4").innerText = resultado;
}

// 5) Dia da semana
function diaSemana() {
    let dataInput = document.getElementById("data").value;

    if (!dataInput) {
        document.getElementById("res5").innerText = "Informe uma data";
        return;
    }

    // Corrige o problema de fuso horário
    let partes = dataInput.split("-");
    let data = new Date(partes[0], partes[1] - 1, partes[2]);

    let dias = [
        "Domingo", "Segunda-feira", "Terça-feira",
        "Quarta-feira", "Quinta-feira", "Sexta-feira", "Sábado"
    ];

    let dia = dias[data.getDay()];

    document.getElementById("res5").innerText = dia;
}