const pessoa1 = {
  nome: "Ruan",
  idade: 20,
  hobby: "tocar piano",

  apresentar() {
    return `Olá, meu nome é ${this.nome}, tenho ${this.idade} anos e meu hobby é ${this.hobby}.`;
  }
};

const pessoa2 = new Object();

pessoa2.nome = "Maria";
pessoa2.idade = 25;
pessoa2.hobby = "dançar";

pessoa2.apresentar = function() {
  return `Olá, meu nome é ${this.nome}, tenho ${this.idade} anos e meu hobby é ${this.hobby}.`;
};

function Pessoa(nome, idade, hobby) {
  this.nome = nome;
  this.idade = idade;
  this.hobby = hobby;

  this.apresentar = function() {
    return `Olá, meu nome é ${this.nome}, tenho ${this.idade} anos e meu hobby é ${this.hobby}.`;
  };
}

const pessoa3 = new Pessoa(
  "Carlos",
  30,
  "jogar futebol"
);

class PessoaClasse {
  constructor(nome, idade, hobby) {
    this.nome = nome;
    this.idade = idade;
    this.hobby = hobby;
  }

  apresentar() {
    return `Olá, meu nome é ${this.nome}, tenho ${this.idade} anos e meu hobby é ${this.hobby}.`;
  }
}

const pessoa4 = new PessoaClasse(
  "Ana",
  22,
  "pintar"
);

const modeloPessoa = {
  apresentar() {
    return `Olá, meu nome é ${this.nome}, tenho ${this.idade} anos e meu hobby é ${this.hobby}.`;
  }
};

const pessoa5 = Object.create(modeloPessoa);

pessoa5.nome = "Pedro";
pessoa5.idade = 28;
pessoa5.hobby = "viajar";

function criarPessoa(nome, idade, hobby) {
  return {
    nome,
    idade,
    hobby,

    apresentar() {
      return `Olá, meu nome é ${this.nome}, tenho ${this.idade} anos e meu hobby é ${this.hobby}.`;
    }
  };
}

const pessoas = [
  pessoa1,
  pessoa2,
  pessoa3,
  pessoa4,
  pessoa5,
];

const resultado = document.getElementById("resultado");

pessoas.forEach((pessoa, index) => {

  resultado.innerHTML += `
    <div class="card">
      <h2>Pessoa ${index + 1}</h2>

      <p><strong>Nome:</strong> ${pessoa.nome}</p>

      <p><strong>Idade:</strong> ${pessoa.idade}</p>

      <p><strong>Hobby:</strong> ${pessoa.hobby}</p>

      <p class="metodo">
        ${pessoa.apresentar()}
      </p>
    </div>
  `;
});