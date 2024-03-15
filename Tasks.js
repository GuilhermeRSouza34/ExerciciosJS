// Objeto para armazenar tarefas
var tasks = [];

// Função para adicionar uma nova tarefa
function adicionarTarefa() {
    var novaTarefa = prompt("Digite a descrição da nova tarefa:");
    if (novaTarefa) {
        tasks.push({ descricao: novaTarefa, concluida: false });
        alert("Tarefa adicionada com sucesso!");
    } else {
        alert("A descrição da tarefa não pode ser vazia. Tente novamente.");
    }
}

// Função para visualizar todas as tarefas
function visualizarTarefas() {
    var lista = "Lista de Tarefas:\n";
    tasks.forEach(function (tarefa, index) {
        lista += (index + 1) + ". ";
        lista += tarefa.concluida ? "[X] " : "[ ] ";
        lista += tarefa.descricao + "\n";
    });
    alert(lista);
}

// Função para marcar uma tarefa como concluída
function marcarComoConcluida() {
    var index = prompt("Digite o número da tarefa que deseja marcar como concluída:") - 1;
    if (index >= 0 && index < tasks.length) {
        tasks[index].concluida = true;
        alert("Tarefa marcada como concluída!");
    } else {
        alert("Número de tarefa inválido. Tente novamente.");
    }
}

// Função para excluir uma tarefa
function excluirTarefa() {
    var index = prompt("Digite o número da tarefa que deseja excluir:") - 1;
    if (index >= 0 && index < tasks.length) {
        tasks.splice(index, 1);
        alert("Tarefa excluída com sucesso!");
    } else {
        alert("Número de tarefa inválido. Tente novamente.");
    }
}

// Função para exibir o menu
function exibirMenu() {
    var opcao = prompt("Escolha uma opção:\n 1. Adicionar tarefa\n 2. Visualizar tarefas\n 3. Marcar como concluída\n 4. Excluir tarefa\n 5. Sair");

    switch (opcao) {
        case "1":
            adicionarTarefa();
            break;
        case "2":
            visualizarTarefas();
            break;
        case "3":
            marcarComoConcluida();
            break;
        case "4":
            excluirTarefa();
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