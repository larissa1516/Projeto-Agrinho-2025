document.addEventListener('DOMContentLoaded', function() {
    // 1. Obter referências para os elementos do DOM
    const toggleButton = document.getElementById('toggleButton');
    const conteudoOculto = document.getElementById('conteudo-oculto');

    // 2. Adicionar um "listener" de evento de clique ao botão
    toggleButton.addEventListener('click', function() {
        // 3. Verificar o estado atual do conteúdo
        const isHidden = conteudoOculto.classList.contains('oculto');

        // 4. Alternar a visibilidade do conteúdo
        if (isHidden) {
            conteudoOculto.classList.remove('oculto'); // Mostra o conteúdo
            toggleButton.textContent = 'Esconder Conteúdo Adicional'; // Altera o texto do botão
            toggleButton.setAttribute('aria-expanded', 'true'); // Atualiza o atributo ARIA
        } else {
            conteudoOculto.classList.add('oculto'); // Esconde o conteúdo
            toggleButton.textContent = 'Mostrar Conteúdo Adicional'; // Altera o texto do botão
            toggleButton.setAttribute('aria-expanded', 'false'); // Atualiza o atributo ARIA
        }

        // 5. Opcional: Gerenciar o foco (se o conteúdo fosse um modal, por exemplo)
        // Neste caso simples, não é estritamente necessário, mas bom para se pensar.
        // Se o conteúdo oculto fosse um link importante, você poderia focar nele.
        // if (!isHidden) {
        //     conteudoOculto.focus(); // Foca no conteúdo após mostrá-lo
        // }
    });
});
