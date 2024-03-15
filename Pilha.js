class Pilha {
    constructor() {
        this.items = [];
    }

    push(elemento) {
        this.items.push(elemento);
    }

    pop() {
        if (this.isEmpty()) {
            return "Underflow";
        }
        return this.items.pop();
    }

    peek() {
        return this.items[this.items.length - 1];
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

// Exemplo de uso da pilha
let pilha = new Pilha();
pilha.push(10);
pilha.push(20);
pilha.push(30);
console.log(pilha.print()); // Saída: 10 20 30
pilha.pop();
console.log(pilha.peek()); // Saída: 20