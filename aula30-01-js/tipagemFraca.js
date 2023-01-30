

// let qualquer = "legal";
// console.log(qualquer)
// console.log(typeof qualquer)

// qualquer = 3.1215
// console.log(qualquer)
// console.log(typeof qualquer)
/*-------------------------------------------------------------------------------------*/

// var nome = prompt('Qual é o seu nome ?');
// var idade = prompt(nome + ' Qual a sua idade ?');

//  if (idade > 18){
//    console.log('<h4>Olá <b>' + nome + '</b>, tudo bem ? </h4>')
//    console.log('<h4>Vi aqui que você tem ' + idade + ' anos, fico feliz em informar que você está autorizado(a) a fazer seu cadastro</h4>')
//      var cpf = prompt(nome + ' Informe seu cpf para prosseguirmos o cadastro');
//  }else{
//     console.log('<h4>Olá <b>' + nome + '</b>, tudo bem ? </h4>')
//     console.log('<h4>Vi aqui que você tem ' + idade + ' anos, infelizmente você não está autorizado(a) a fazer seu cadastro</h4>')
// }

/*-------------------------------------------------------------------------------------*/


// var a = prompt('Digite um numero de 1 a 10');
// var b = prompt('Digite um numero de 10 a 20');
// var c = null;

// var c = b;
// var b = a;
// var a = c;

// document.write('Variável a = ' + a + 'Variável b = ' + b + 'Variável c = ' + c)


var anoNascimento = prompt('Qual o ano que você nasceu ?');
var anoAtual = 2023;

if (anoNascimento - anoAtual >= 18 ){
    document.write("Sucesso !")
}else{
    return;
}
