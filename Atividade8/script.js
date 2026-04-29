// ====== PARTE 1 ======
function soma(a, b, c) {
  return a + b + c;
}

function calcular() {
  const numeros = [
    Number(document.getElementById("n1").value),
    Number(document.getElementById("n2").value),
    Number(document.getElementById("n3").value)
  ];

  // usando APPLY
  const total = soma.apply(null, numeros);

  const quadrado1 = Math.pow(numeros[0], 2);
  const quadrado2 = Math.pow(numeros[1], 2);

  document.getElementById("resultadoNumeros").innerText =
    `A soma dos três números é: ${total}, o quadrado do primeiro é: ${quadrado1} e o quadrado do segundo é: ${quadrado2}`;
}


// ====== PARTE 2 ======
function gerarPalavras() {
  const inputs = document.querySelectorAll(".letra");
  const letras = [];

  inputs.forEach(input => {
    letras.push(input.value.toUpperCase());
  });

  const palavras = [];

  // gerar até 10 palavras distintas
  while (palavras.length < 10) {
    let palavra = "";

    for (let i = 0; i < 5; i++) {
      const indice = Math.floor(Math.random() * letras.length);
      palavra += letras[indice];
    }

    // evitar repetição
    if (!palavras.includes(palavra)) {
      palavras.push(palavra);
    }
  }

  document.getElementById("resultadoLetras").innerText =
    palavras.join(", ");
}