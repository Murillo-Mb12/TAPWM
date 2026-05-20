function Retangulo(base, altura) {
  this.base = base;
  this.altura = altura;

  this.calcularArea = function() {
    return this.base * this.altura;
  };
}

function calcularArea() {
  const base = Number(
    document.getElementById("base").value
  );

  const altura = Number(
    document.getElementById("altura").value
  );

  const retangulo = new Retangulo(
    base,
    altura
  );

  document.getElementById(
    "resultadoArea"
  ).innerHTML =
    `Área: ${retangulo.calcularArea()}`;
}

class Conta {
  constructor(nome, banco, numero, saldo) {
    this._nome = nome;
    this._banco = banco;
    this._numero = numero;
    this._saldo = saldo;
  }

  get nome() {
    return this._nome;
  }

  set nome(valor) {
    this._nome = valor;
  }

  get banco() {
    return this._banco;
  }

  set banco(valor) {
    this._banco = valor;
  }

  get numero() {
    return this._numero;
  }

  set numero(valor) {
    this._numero = valor;
  }

  get saldo() {
    return this._saldo;
  }

  set saldo(valor) {
    this._saldo = valor;
  }
}

class Corrente extends Conta {
  constructor(
    nome,
    banco,
    numero,
    saldo,
    saldoEspecial
  ) {
    super(nome, banco, numero, saldo);

    this._saldoEspecial = saldoEspecial;
  }

  get saldoEspecial() {
    return this._saldoEspecial;
  }

  set saldoEspecial(valor) {
    this._saldoEspecial = valor;
  }
}

class Poupanca extends Conta {
  constructor(
    nome,
    banco,
    numero,
    saldo,
    juros,
    vencimento
  ) {
    super(nome, banco, numero, saldo);

    this._juros = juros;
    this._vencimento = vencimento;
  }

  get juros() {
    return this._juros;
  }

  set juros(valor) {
    this._juros = valor;
  }

  get vencimento() {
    return this._vencimento;
  }

  set vencimento(valor) {
    this._vencimento = valor;
  }
}

function mostrarCorrente() {
  const conta = new Corrente(
    document.getElementById("nomeCorrente").value,
    document.getElementById("bancoCorrente").value,
    document.getElementById("numeroCorrente").value,
    document.getElementById("saldoCorrente").value,
    document.getElementById("saldoEspecial").value
  );

  document.getElementById(
    "resultadoCorrente"
  ).innerHTML = `
    Nome: ${conta.nome} <br>
    Banco: ${conta.banco} <br>
    Conta: ${conta.numero} <br>
    Saldo: ${conta.saldo} <br>
    Saldo Especial: ${conta.saldoEspecial}
  `;
}

function mostrarPoupanca() {
  const conta = new Poupanca(
    document.getElementById("nomePoupanca").value,
    document.getElementById("bancoPoupanca").value,
    document.getElementById("numeroPoupanca").value,
    document.getElementById("saldoPoupanca").value,
    document.getElementById("juros").value,
    document.getElementById("vencimento").value
  );

  document.getElementById(
    "resultadoPoupanca"
  ).innerHTML = `
    Nome: ${conta.nome} <br>
    Banco: ${conta.banco} <br>
    Conta: ${conta.numero} <br>
    Saldo: ${conta.saldo} <br>
    Juros: ${conta.juros}% <br>
    Vencimento: ${conta.vencimento}
  `;
}