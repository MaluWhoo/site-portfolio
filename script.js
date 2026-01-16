const livro = document.querySelector('.livro');
const img = document.querySelector('.livro-fechado');
const secaoProjetos = document.querySelector('#projects'); 

livro.addEventListener('click', () => {
    if (!livro.classList.contains('estagio-1') && !livro.classList.contains('estagio-2')) {
        // ESTADO: Estava fechado -> PAGE 1
        livro.classList.add('estagio-1');
        img.src = 'img/page-1.png'; 
        
    } else if (livro.classList.contains('estagio-1')) {
        // ESTADO: Estava na Página 1 ->PAGE 2
        livro.classList.remove('estagio-1');
        livro.classList.add('estagio-2');
        img.src = 'img/page-2.png'; 
        
    } else {
        // ESTADO: Estava na Página 2 -> Fecha novamente
        livro.classList.remove('estagio-2');
        img.src = 'img/livro-fechado.png'; 

        setTimeout(() => {
            secaoProjetos.scrollIntoView({ 
                behavior: 'smooth', 
                block: 'start'      
            });
        }, 400); 
    }
});


const bugLink = document.querySelector('.bug');
const somBug = document.querySelector('#som-bug');

// Quando o mouse entra no bug -> sonzinho maneirooo
bugLink.addEventListener('mouseenter', () => {
    somBug.currentTime = 0; 
    somBug.volume = 0.5;
    somBug.play();
});