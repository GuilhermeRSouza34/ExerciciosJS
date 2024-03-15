// Objeto para armazenar itens da lista de compras
var listaDeCompras = [];

// Função para adicionar um novo item à lista de compras
function adicionarItem() {
    var novoItem = prompt("Digite o nome do item que deseja adicionar à lista de compras:");
    if (novoItem) {
        listaDeCompras.push({ nome: novoItem, comprado: false });
        alert("Item adicionado à lista de compras com sucesso!");
    } else {
        alert("O nome do item não pode ser vazio. Tente novamente.");
    }
}

// Função para visualizar todos os itens da lista de compras
function visualizarLista() {
    var lista = "Lista de Compras:\n";
    listaDeCompras.forEach(function (item, index) {
        lista += (index + 1) + ". ";
        lista += item.comprado ? "[X] " : "[ ] ";
        lista += item.nome + "\n";
    });
    alert(lista);
}

// Função para marcar um item da lista de compras como comprado
function marcarComoComprado() {
    var index = prompt("Digite o número do item que deseja marcar como comprado:") - 1;
    if (index >= 0 && index < listaDeCompras.length) {
        listaDeCompras[index].comprado = true;
        alert("Item marcado como comprado!");
    } else {
        alert("Número de item inválido. Tente novamente.");
    }
}

// Função para limpar a lista de compras
function limparLista() {
    var confirmacao = confirm("Tem certeza de que deseja limpar toda a lista de compras?");
    if (confirmacao) {
        listaDeCompras = [];
        alert("Lista de compras limpa com sucesso!");
    }
}

// Função para exibir o menu
function exibirMenu() {
    var opcao = prompt("Escolha uma opção:\n 1. Adicionar item à lista\n 2. Visualizar lista de compras\n 3. Marcar item como comprado\n 4. Limpar lista de compras\n 5. Sair");

    switch (opcao) {
        case "1":
            adicionarItem();
            break;
        case "2":
            visualizarLista();
            break;
        case "3":
            marcarComoComprado();
            break;
        case "4":
            limparLista();
            break;
        case "5":
            alert("Até logo!");
            break;
        default:
            alert("Opção inválida. Por favor, escolha novamente.");
            exibirMenu();
            break;
    }
}

// Executar o programa
exibirMenu();