var numero = parseInt(prompt("Digite um número para calcular o fatorial:"));
var fatorial = 1;

for (var i = 1; i <= numero; i++) {
    fatorial *= i;
}

console.log("O fatorial de " + numero + " é " + fatorial);