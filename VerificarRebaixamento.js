// Função para verificar se um time está na zona de rebaixamento
function estaNaZonaDeRebaixamento(pontos, posicao) {
    return pontos < 20 && posicao > 16; // Supondo que a zona de rebaixamento seja do 17º ao 20º lugar com menos de 20 pontos
}

// Exemplo de uso
const pontosTimeB = 15;
const posicaoTimeB = 18;
console.log('Está na zona de rebaixamento:', estaNaZonaDeRebaixamento(pontosTimeB, posicaoTimeB)); // Saída: true