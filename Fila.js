class Fila {
    constructor() {
        this.items = [];
    }

    enqueue(elemento) {
        this.items.push(elemento);
    }

    dequeue() {
        if (this.isEmpty()) {
            return "Underflow";
        }
        return this.items.shift();
    }

    front() {
        if (this.isEmpty()) {
            return "A fila está vazia";
        }
        return this.items[0];
    }

    isEmpty() {
        return this.items.length === 0;
    }

    size() {
        return this.items.length;
    }

    print() {
        let str = "";
        for (let i = 0; i < this.items.length; i++) {
            str += this.items[i] + " ";
        }
        return str;
    }
}

// Exemplo de uso da fila
let fila = new Fila();
fila.enqueue(10);
fila.enqueue(20);
fila.enqueue(30);
console.log(fila.print()); // Saída: 10 20 30
fila.dequeue();
console.log(fila.front()); // Saída: 20