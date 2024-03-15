// Função para solicitar ao usuário um nome de usuário e uma senha
function criarLogin() {
    // Solicita ao usuário um nome de usuário
    var username = prompt("Digite um nome de usuário:");

    // Verifica se o usuário cancelou a entrada ou não forneceu um nome de usuário
    if (username === null || username.trim() === "") {
        alert("Nome de usuário inválido. Tente novamente.");
        return;
    }

    // Solicita ao usuário uma senha
    var password = prompt("Digite uma senha:");

    // Verifica se o usuário cancelou a entrada ou não forneceu uma senha
    if (password === null || password.trim() === "") {
        alert("Senha inválida. Tente novamente.");
        return;
    }

    // Exibe uma mensagem com o nome de usuário e senha criados
    alert("Login criado com sucesso!\n\nNome de usuário: " + username + "\nSenha: " + password);
}

// Chama a função para criar o login quando o programa é executado
criarLogin();