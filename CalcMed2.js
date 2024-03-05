var nota1 = parseFloat(prompt("Digite a primeira nota:"));
var nota2 = parseFloat(prompt("Digite a segunda nota:"));
var media = (nota1 + nota2) / 2;
alert("A média do aluno é: " + media);
if (media >= 7) {
    alert("Parabéns! Você foi aprovado!");
} else {
    alert("Infelizmente, você foi reprovado. Estude mais!");
}