var numeroAleatorio = Math.floor(Math.random() * 100) + 1;
var tentativas = 0;
var palpite;

do {
    palpite = parseInt(prompt("Adivinhe o número (de 1 a 100):"));
    tentativas++;

    if (palpite > numeroAleatorio) {
        alert("O número é menor.");
    } else if (palpite < numeroAleatorio) {
        alert("O número é maior.");
    } else {
        alert("Parabéns! Você acertou em " + tentativas + " tentativas.");
    }
} while (palpite !== numeroAleatorio);