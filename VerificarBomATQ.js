// Função para verificar se um time tem um bom ataque baseado em seu número de gols marcados
function temBomAtaque(golsMarcados) {
    return golsMarcados > 50; // Supondo que um time com mais de 50 gols marcados tenha um bom ataque
}

// Exemplo de uso
const golsMarcadosTimeC = 60;
console.log('Tem um bom ataque:', temBomAtaque(golsMarcadosTimeC)); // Saída: tru