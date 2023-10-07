// evitando que sejam passados elementos diferentes de áudio
function tocaSom (seletorAudio) {
    const elemento = document.querySelector(seletorAudio);

    if (elemento != null && elemento.localName === 'audio') {
        elemento.play();        
    } else {
        alert('Elemento não encontrado');
    }

}

/*
function tocaSom(idElementoAudio) {
    document.querySelector(idElementoAudio).play();
    
}
*/

const listaDeTeclas = document.querySelectorAll('.tecla');
// irá gerar a lista de teclas captadas pelo querySelectorAll

console.log(listaDeTeclas);

// usando o FOR ao invés do while para fazer o código:
for (let contador = 0; contador < listaDeTeclas.length; contador++) {
    const tecla = listaDeTeclas[contador];
    const instrumento = tecla.classList[1];
    const idAudio = `#som_${instrumento}`;

    tecla.onclick = function() {
        tocaSom(idAudio);
    }

    tecla.onkeydown = function() {
        if (evento.code === "Enter" || evento.code === "Space") {
            tecla.classList.add('ativa');
        };
    }
    tecla.onkeyup = function() {
        tecla.classList.remove('ativa');
    }
}


/*
let contador = 0;
while (contador < listaDeTeclas.length) {

    const tecla = listaDeTeclas[contador];

    const instrumento = tecla.classList[1];
    console.log(instrumento);
    // o class list acessa o nome da classe do elemento
    // nesse caso pegará a parte do 'tecla_xxx'

    const idAudio = `#som_${instrumento}`;
    console.log(idAudio);
    // essa função chama template string e permite fazer uma string mais dinâmica
    // aqui usamos para construir a string conforme o código for rodando

    tecla.onclick = function() {
        tocaSom(idAudio);
    };

    contador++;

    console.log(contador);

}
*/


