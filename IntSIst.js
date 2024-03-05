var nome = prompt("Qual é o seu nome?");
var idade = prompt("Quantos anos você tem?");
var confirmacao = confirm("Seu nome é " + nome + " e você tem " + idade + " anos. Correto?");
if (confirmacao) {
    alert("Obrigado por confirmar!");
} else {
    alert("Por favor, atualize as informações.");
}