document.getElementById('nome').value = "Oi, tudo bem ?";


var anoNascimento = prompt('Qual o ano que você nasceu ?');
var anoAtual = 2023;

if (anoNascimento - anoAtual >= 18 ){
    document.write("Sucesso !")
}else{
    return;
}

