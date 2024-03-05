var anoNascimento = parseInt(prompt("Digite o ano do seu nascimento:"));
var dataAtual = new Date();
var anoAtual = dataAtual.getFullYear();
var idade = anoAtual - anoNascimento;
alert("Você tem " + idade + " anos.");