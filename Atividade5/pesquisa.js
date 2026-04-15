function iniciarPesquisa() {

    let totalPessoas = 45;

    let somaIdades = 0;
    let maisVelha = 0;
    let maisNova = Infinity;

    let qtdPessimo = 0;
    let qtdOtimoBom = 0;

    let mulheres = 0;
    let homens = 0;
    let outros = 0;

    for (let i = 1; i <= totalPessoas; i++) {

        let idade = parseInt(prompt(`Pessoa ${i} - Informe a idade:`));

        if (isNaN(idade) || idade <= 0) {
            alert("Idade inválida! Tente novamente.");
            i--;
            continue;
        }

        let sexoInput = prompt(`Pessoa ${i} - Informe o sexo (M/F/O ou Masculino/Feminino/Outro):`);
        let sexo = sexoInput.toLowerCase();

        let opiniao = parseInt(prompt(`Pessoa ${i} - Informe a opinião (4=ótimo, 3=bom, 2=regular, 1=péssimo):`));

        somaIdades += idade;

        if (idade > maisVelha) {
            maisVelha = idade;
        }

        if (idade < maisNova) {
            maisNova = idade;
        }

        if (opiniao === 1) {
            qtdPessimo++;
        }

        if (opiniao === 3 || opiniao === 4) {
            qtdOtimoBom++;
        }

        if (sexo === "m" || sexo === "masculino") {
            homens++;
        } else if (sexo === "f" || sexo === "feminino") {
            mulheres++;
        } else if (sexo === "o" || sexo === "outro" || sexo === "outros") {
            outros++;
        } else {
            alert("Sexo inválido! Considerando como 'outros'.");
            outros++;
        }
    }

    let mediaIdade = somaIdades / totalPessoas;
    let porcentagemOtimoBom = (qtdOtimoBom / totalPessoas) * 100;

    alert(
        "RESULTADOS:\n\n" +
        "Média das idades: " + mediaIdade.toFixed(2) + "\n" +
        "Idade da pessoa mais velha: " + maisVelha + "\n" +
        "Idade da pessoa mais nova: " + maisNova + "\n" +
        "Quantidade que respondeu péssimo: " + qtdPessimo + "\n" +
        "Porcentagem de ótimo e bom: " + porcentagemOtimoBom.toFixed(2) + "%\n\n" +
        "Número de mulheres: " + mulheres + "\n" +
        "Número de homens: " + homens + "\n" +
        "Número de outros: " + outros
    );
}