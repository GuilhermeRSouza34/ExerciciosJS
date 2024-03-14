function encontrarMaiorNumero(array) {
    let maior = array[0];
    for (let i = 1; i < array.length; i++) {
        if (array[i] > maior) {
            maior = array[i];
        }
    }
    return maior;
}

// Exemplo de uso
console.log(encontrarMaiorNumero([1, 5, 10, 3])); // Saída: 10
console.log(encontrarMaiorNumero([-3, -8, -2, -5])); // Saída: -2