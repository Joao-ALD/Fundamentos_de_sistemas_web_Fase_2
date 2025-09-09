// js/main.js

// Função que será executada quando o conteúdo da página for totalmente carregado
document.addEventListener('DOMContentLoaded', function() {
    
    // Requisito: Implementar função temporal
    // Este código exibe um alerta de promoção 5 segundos após a página carregar
    // e o esconde após mais 10 segundos.
    
    const alertaPromocao = document.getElementById('alerta-promocao');

    if (alertaPromocao) {
        // Mostra o alerta após 5 segundos (5000 milissegundos)
        setTimeout(function() {
            alertaPromocao.style.display = 'block';
        }, 5000);

        // Esconde o alerta após 15 segundos (5s de espera + 10s de exibição)
        setTimeout(function() {
            alertaPromocao.style.display = 'none';
        }, 15000);
    }

});