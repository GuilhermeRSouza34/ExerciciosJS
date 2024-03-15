// Objeto para armazenar detalhes de login
var logins = {};

// Função para criar um novo login
function criarLogin() {
    var username = prompt("Digite um nome de usuário:");
    var password = prompt("Digite uma senha:");

    if (username && password) {
        if (!logins.hasOwnProperty(username)) {
            logins[username] = password;
            alert("Login criado com sucesso!");
        } else {
            alert("O nome de usuário já está em uso. Por favor, escolha outro.");
        }
    } else {
        alert("Nome de usuário e senha são necessários para criar um login.");
    }
}

// Função para fazer login
function fazerLogin() {
    var username = prompt("Digite seu nome de usuário:");
    var password = prompt("Digite sua senha:");

    if (logins.hasOwnProperty(username) && logins[username] === password) {
        alert("Login bem-sucedido!");
    } else {
        alert("Nome de usuário ou senha incorretos.");
    }
}

// Função para exibir todos os logins existentes
function exibirLogins() {
    var lista = "Logins existentes:\n";
    for (var user in logins) {
        lista += user + "\n";
    }
    alert(lista);
}

// Função para atualizar um login existente
function atualizarLogin() {
    var username = prompt("Digite o nome de usuário que deseja atualizar:");
    if (logins.hasOwnProperty(username)) {
        var newPassword = prompt("Digite a nova senha:");
        logins[username] = newPassword;
        alert("Senha atualizada com sucesso!");
    } else {
        alert("Nome de usuário não encontrado.");
    }
}

// Função para excluir um login
function excluirLogin() {
    var username = prompt("Digite o nome de usuário que deseja excluir:");
    if (logins.hasOwnProperty(username)) {
        delete logins[username];
        alert("Login excluído com sucesso!");
    } else {
        alert("Nome de usuário não encontrado.");
    }
}

// Função para exibir o menu
function exibirMenu() {
    var opcao = prompt("Escolha uma opção:\n 1. Criar login\n 2. Fazer login\n 3. Exibir todos os logins\n 4. Atualizar login\n 5. Excluir login\n 6. Sair");

    switch (opcao) {
        case "1":
            criarLogin();
            break;
        case "2":
            fazerLogin();
            break;
        case "3":
            exibirLogins();
            break;
        case "4":
            atualizarLogin();
            break;
        case "5":
            excluirLogin();
            break;
        case "6":
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