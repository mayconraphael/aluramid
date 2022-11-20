
const teclas = document.querySelectorAll('.tecla');

teclas.forEach(tecla => {
    const seletor = tecla.classList[1];

    element(seletor).onclick = function() {
        som(seletor);
    };

    element(seletor).onkeydown = function(event) {
        const space = event.code === 'Space';
        const enter = event.code === 'Enter';
        
        if (space || enter) tecla.classList.add('ativa');
    }

    element(seletor).onkeyup = function(event) {
        const space = event.code === 'Space';
        const enter = event.code === 'Enter';
        
        if (space || enter) tecla.classList.remove('ativa');
    }
});

function som(seletor) {
    document.querySelector(`#som_${seletor}`).play();
}

function element(seletor) {
    return document.querySelector(`.${seletor}`);
}