document.addEventListener('DOMContentLoaded', function() {
    const searchInput = document.getElementById('searchInput');

    const certificadosContainer = document.querySelector('.certificados__container');

    if (searchInput) {
        searchInput.addEventListener('input', function() {

            const termoBusca = searchInput.value.toLowerCase();
            const cards = document.querySelectorAll('.certificado__link');
            
            cards.forEach(function(card) {

                const titulo = card.querySelector('h3').textContent.toLocaleLowerCase();
                const instituicao = card.querySelector('p').textContent.toLocaleLowerCase();
                if (titulo.includes(termoBusca) || instituicao.includes(termoBusca)) {
                    cards.style.display = 'block';
                } else {
                    card.style.display = 'none';
                }
            });

            const resultadosVisiveis = document.querySelectorAll('.certificado__link[style*="block"]').length;
            let mensagemNenhumResultado = document.getElementById('nenhum-resultado');

            if (resultadosVisiveis === 0 && !mensagemNenhumResultado) {
                mensagemNenhumResultado = document.createElement('p');
                mensagemNenhumResultado.id = 'nenhum-resultado';
                mensagemNenhumResultado.textContent = 'Nenhum certificado encontrado com este termo.';
                mensagemNenhumResultado.style.color = 'var(--cor-terciaria)';
                mensagemNenhumResultado.style.fontSize = '1.2rem';
                certificadosContainer.appendChild(mensagemNenhumResultado);
            } else if (resultadosVisiveis > 0 && mensagemNenhumResultado) {
                mensagemNenhumResultado.remove();
            }
        });
    }
});