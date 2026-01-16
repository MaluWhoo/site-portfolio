
// Livro - Sobre
const livro = document.querySelector('.livro');
const imgLivro = document.querySelector('.livro-fechado');
const secaoProjetos = document.querySelector('#contact'); 
// const secaoProjetos = document.querySelector('#projects'); 

if (livro && imgLivro) {
    livro.addEventListener('click', () => {
        if (!livro.classList.contains('estagio-1') && !livro.classList.contains('estagio-2')) {
            // ESTADO: Estava fechado -> PAGE 1
            livro.classList.add('estagio-1');
            imgLivro.src = 'img/page-1.png'; 

        } else if (livro.classList.contains('estagio-1')) {
            // ESTADO: Estava na Página 1 ->PAGE 2
            livro.classList.remove('estagio-1');
            livro.classList.add('estagio-2');
            imgLivro.src = 'img/page-2.png'; 
            
        } else {
            // ESTADO: Estava na Página 2 -> Fecha novamente
            livro.classList.remove('estagio-2');
            imgLivro.src = 'img/livro-fechado.png'; 

            setTimeout(() => {
                secaoProjetos.scrollIntoView({ 
                    behavior: 'smooth', 
                    block: 'start'      
                });
            }, 400); 
        }
    });
}


// Quando o mouse entra no bug -> somzinho maneirooo 
const bugLink = document.querySelector('.bug');
const somBug = document.querySelector('#som-bug');

if (bugLink && somBug) {
    bugLink.addEventListener('mouseenter', () => {
        somBug.currentTime = 0; 
        somBug.volume = 0.5;
        somBug.play();
    });
}


// SUITCASE - Bug site
const suitcase = document.querySelector('.suitcase');
const suitcaseImg = document.querySelector('.suitcase-close');

if (suitcase && suitcaseImg) {
    suitcase.addEventListener('click', () => {
        if (!suitcase.classList.contains('aberta')) {
            suitcase.classList.add('aberta');
            suitcaseImg.src = '../mala-aberta.png';
        }
    });
}