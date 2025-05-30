document.addEventListener('DOMContentLoaded', function() {
    
    const toggleButton = document.getElementById('toggleButton');
    const conteudoOculto = document.getElementById('conteudo-oculto');

    
    toggleButton.addEventListener('click', function() {
        
        const isHidden = conteudoOculto.classList.contains('oculto');

        
        if (isHidden) {
            conteudoOculto.classList.remove('oculto'); 
            toggleButton.textContent = 'Esconder Conteúdo Adicional'; 
            toggleButton.setAttribute('aria-expanded', 'true'); 
        } else {
            conteudoOculto.classList.add('oculto'); 
            toggleButton.textContent = 'Mostrar Conteúdo Adicional'; 
            toggleButton.setAttribute('aria-expanded', 'false'); 
        }

    });
});

