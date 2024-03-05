var num1 = parseFloat(prompt("Digite o primeiro número:"));
var num2 = parseFloat(prompt("Digite o segundo número:"));
var operacao = prompt("Escolha a operação: soma, subtração, multiplicação ou divisão");

switch (operacao) {
    case 'soma':
        alert("Resultado: " + (num1 + num2));
        break;
    case 'subtração':
        alert("Resultado: " + (num1 - num2));
        break;
    case 'multiplicação':
        alert("Resultado: " + (num1 * num2));
        break;
    case 'divisão':
        if (num2 !== 0) {
            alert("Resultado: " + (num1 / num2));
        } else {
            alert("Impossível dividir por zero.");
        }
        break;
    default:
        alert("Operação inválida.");
}