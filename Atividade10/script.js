const resultado = document.getElementById("resultado");


// Forma 1: Objeto literal
const Funcionario1 = {
    matricula: "001",
    nome: "João Silva",
    funcao: "Desenvolvedor"
};


// Forma 2: Usando função construtora
function Funcionario(matricula, nome, funcao) {
    this.matricula = matricula;
    this.nome = nome;
    this.funcao = funcao;
}

const funcionario2 = new Funcionario("002", "Maria Souza", "Designer");


//Forma 3: Usando classe (ES6)
class FuncionarioClasse {
    constructor(matricula, nome, funcao) {
        this.matricula = matricula;
        this.nome = nome;
        this.funcao = funcao;
    }
}

const funcionario3 = new FuncionarioClasse("003", "Carlos Lima", "Gerente");


// Exibir na tela
resultado.innerHTML = `
    <h2>Forma 1 (Objeto Literal)</h2>
    Matrícula: ${Funcionario1.matricula} <br>
    Nome: ${Funcionario1.nome} <br>
    Função: ${Funcionario1.funcao}

    <h2>Forma 2 (Função Construtora)</h2>
    Matrícula: ${funcionario2.matricula} <br>
    Nome: ${funcionario2.nome} <br>
    Função: ${funcionario2.funcao}

    <h2>Forma 3 (Classe)</h2>
    Matrícula: ${funcionario3.matricula} <br>
    Nome: ${funcionario3.nome} <br>
    Função: ${funcionario3.funcao}
`;