function validar(){

    let form = document.nomeform;

    let nome = form.elements["nome"].value.trim();
    let comentario = form.elements["comentario"].value.trim();
    let pesquisa = form.elements["pesquisa"];

    if(nome.length < 10){
        alert("O nome deve possuir no mínimo 10 caracteres.");
        return false;
    }

    if(comentario.length < 20){
        alert("O comentário deve possuir no mínimo 20 caracteres.");
        return false;
    }

    let resposta = "";

    for(let i = 0; i < pesquisa.length; i++){
        if(pesquisa[i].checked){
            resposta = pesquisa[i].value;
        }
    }

    if(resposta == ""){
        alert("Selecione uma opção na pesquisa.");
        return false;
    }

    if(resposta == "nao"){
        alert("Que bom que você voltou a visitar esta página!");
    }else{
        alert("Volte sempre a esta página!");
    }

    alert("Formulário enviado com sucesso!");

    return true;
}