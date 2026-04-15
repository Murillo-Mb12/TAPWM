let totalPessoas = 45;
let pessoas = [];

function adicionarPessoa() {

    if (pessoas.length >= totalPessoas) {
        alert("Limite de pessoas atingido!");
        return;
    }

    let idade = parseInt(document.getElementById("idade").value);
    let sexo = document.getElementById("sexo").value;
    let opiniao = parseInt(document.getElementById("opiniao").value);

    if (!idade || idade <= 0 || !sexo || !opiniao) {
        alert("Preencha todos os campos corretamente!");
        return;
    }

    pessoas.push({ idade, sexo, opiniao });

    document.getElementById("status").innerText =
        `Pessoa adicionada! Total: ${pessoas.length}/${totalPessoas}`;

    document.getElementById("formPesquisa").reset();
}

function finalizar() {

    if (pessoas.length === 0) {
        alert("Nenhuma pessoa cadastrada!");
        return;
    }

    let somaIdades = 0;
    let maisVelha = 0;
    let maisNova = Infinity;

    let qtdPessimo = 0;
    let qtdOtimoBom = 0;

    let homens = 0;
    let mulheres = 0;
    let outros = 0;

    pessoas.forEach(p => {

        somaIdades += p.idade;

        if (p.idade > maisVelha) maisVelha = p.idade;
        if (p.idade < maisNova) maisNova = p.idade;

        if (p.opiniao === 1) qtdPessimo++;
        if (p.opiniao === 3 || p.opiniao === 4) qtdOtimoBom++;

        if (p.sexo === "m") homens++;
        else if (p.sexo === "f") mulheres++;
        else outros++;
    });

    let mediaIdade = somaIdades / pessoas.length;
    let porcentagemOtimoBom = (qtdOtimoBom / pessoas.length) * 100;

    alert(
        "RESULTADOS:\n\n" +
        "Média das idades: " + mediaIdade.toFixed(2) + "\n" +
        "Mais velha: " + maisVelha + "\n" +
        "Mais nova: " + maisNova + "\n" +
        "Péssimo: " + qtdPessimo + "\n" +
        "Ótimo/Bom: " + porcentagemOtimoBom.toFixed(2) + "%\n\n" +
        "Mulheres: " + mulheres + "\n" +
        "Homens: " + homens + "\n" +
        "Outros: " + outros
    );
}