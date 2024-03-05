var mes = parseInt(prompt("Digite o número do mês (de 1 a 12):"));

switch (mes) {
    case 1:
    case 2:
    case 12:
        alert("Estamos no verão.");
        break;
    case 3:
    case 4:
    case 5:
        alert("Estamos na primavera.");
        break;
    case 6:
    case 7:
    case 8:
        alert("Estamos no verão.");
        break;
    case 9:
    case 10:
    case 11:
        alert("Estamos no outono.");
        break;
    default:
        alert("Mês inválido.");
}