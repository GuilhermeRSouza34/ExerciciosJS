var contador = 0;
document.getElementById('botao').addEventListener('click', function() {
    contador++;
    document.getElementById('contador').textContent = contador + " cliques";
});
<><button id="botao">Clique aqui</button><p id="contador">0 cliques</p></>