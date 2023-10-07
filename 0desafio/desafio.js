
const listaDeNumeros = document.querySelectorAll('input[type=button]');
console.log(listaDeNumeros);
// captura as teclas

const input = document.querySelector('input[type=tel]');
console.log(input);
// captura o campo para escrever

for (let contador = 0; contador < listaDeNumeros.length; contador++) {
  
  const tecla = listaDeNumeros[contador];
  console.log(tecla);
  
  tecla.onclick = function() {
    input.value = input.value + tecla.value;
 
  }

  tecla.onkeydown = function (evento) {
    if (evento.code === "Enter" || evento.code === "Space") {
        tecla.classList.add('ativa');
    }
  }

  tecla.onkeyup = function() {
    tecla.classList.remove('ativa');
  }


}
