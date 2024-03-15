// Objeto para armazenar detalhes de login
var logins = {};

// Função para criar um novo login
function criarLogin() {
    var username = prompt("Digite um nome de usuário:");
    var password = prompt("Digite uma senha:");

    if (username && password) {
        logins[username] = password;
        alert("Login criado com sucesso!");
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

// Função para exibir o menu
function exibirMenu() {
    var opcao = prompt("Escolha uma opção:\n 1. Criar login\n 2. Fazer login\n 3. Sair");

    switch (opcao) {
        case "1":
            criarLogin();
            break;
        case "2":
            fazerLogin();
            break;
        case "3":
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