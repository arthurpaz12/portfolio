document.addEventListener('DOMContentLoaded', function() {

    const cardsDeTeste = document.querySelectorAll('.certificado__link');
    console.log('--- INÍCIO DO TESTE DE CARREGAMENTO ---');
    console.log('Cards encontrados assim que a página carregou:', cardsDeTeste);
    console.log('--- FIM DO TESTE ---');

    const searchInput = document.getElementById('searchInput');

    if (!searchInput) {
        return;
    };

    searchInput.addEventListener('input', function() {

        const termoBusca = searchInput.value.toLowerCase();
        const cards = document.querySelectorAll('.certificado__link');
        
        cards.forEach(function(card) {

            const titulo = card.querySelector('h3').textContent.toLocaleLowerCase();
            const instituicao = card.querySelector('p').textContent.toLocaleLowerCase();
            const corresponde = titulo.includes(termoBusca) || instituicao.includes(termoBusca);

            if (corresponde) {
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        });

        // const resultadosVisiveis = document.querySelectorAll('.certificado__link[style*="block"]').length;
        // let mensagemNenhumResultado = document.getElementById('nenhum-resultado');

        // if (resultadosVisiveis === 0 && !mensagemNenhumResultado) {
        //     mensagemNenhumResultado = document.createElement('p');
        //     mensagemNenhumResultado.id = 'nenhum-resultado';
        //     mensagemNenhumResultado.textContent = 'Nenhum certificado encontrado com este termo.';
        //     mensagemNenhumResultado.style.color = 'var(--cor-terciaria)';
        //     mensagemNenhumResultado.style.fontSize = '1.2rem';
        //     certificadosContainer.appendChild(mensagemNenhumResultado);
        // } else if (resultadosVisiveis > 0 && mensagemNenhumResultado) {
        //     mensagemNenhumResultado.remove();
        // }
    });
});