/ Função para calcular pontos de um time de futebol
function calcularPontos(vitorias, empates) {
    return (vitorias * 3) + empates;
}

// Exemplo de uso
const pontosTimeA = calcularPontos(5, 3); // Time A tem 5 vitórias e 3 empates
console.log('Pontos do Time A:', pontosTimeA); // Saída: 18