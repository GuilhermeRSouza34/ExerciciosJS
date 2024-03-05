var min = parseInt(prompt("Digite o valor mínimo:"));
var max = parseInt(prompt("Digite o valor máximo:"));
var numeroSorteado = Math.floor(Math.random() * (max - min + 1)) + min;
alert("O número sorteado é: " + numeroSorteado);