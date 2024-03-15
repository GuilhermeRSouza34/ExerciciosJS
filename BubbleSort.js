function bubbleSort(array) {
    let tamanho = array.length;
    for (let i = 0; i < tamanho - 1; i++) {
        for (let j = 0; j < tamanho - i - 1; j++) {
            if (array[j] > array[j + 1]) {
                // Troca os elementos
                let temp = array[j];
                array[j] = array[j + 1];
                array[j + 1] = temp;
            }
        }
    }
    return array;
}

// Exemplo de uso do Bubble Sort
let arr = [64, 34, 25, 12, 22, 11, 90];
console.log("Array original:", arr);
console.log("Array ordenado:", bubbleSort(arr)); // Saída: Array ordenado: [11, 12, 22, 25, 34, 64, 90]