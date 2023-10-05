function tocaSom(idElementoAudio) {
    document.querySelectorAll(idElementoAudio);
    
}


const listaDeTeclas = document.querySelectorAll('.tecla');
// irá gerar a lista de teclas captadas pelo querySelectorAll

console.log(listaDeTeclas);

let contador = 0;
while (contador < listaDeTeclas.length) {
    listaDeTeclas[contador].onclick = tocaSom;
    contador++;

    console.log(contador);

}


