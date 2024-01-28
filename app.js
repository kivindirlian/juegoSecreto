let numeroSecreto = 0;
let intentos = 0;
let listaNumerosSorteados = [];
let numeroMaximo = 10;


function asignarTextoElemento(elemento, texto) {
   let titulo = document.querySelector(elemento);
   titulo.innerHTML = texto;
   return;
}
function verificarIntento() {
   let numeroUsuario = parseInt(document.getElementById('valorUsuario').value);
   console.log(intentos);

   if (numeroUsuario === numeroSecreto) {
      asignarTextoElemento('p', `acertastes el número en ${intentos} ${(intentos == 1) ? `vez` : `veces`}`);
      document.getElementById('reiniciar').removeAttribute('disabled');
   } else {
      //el usuario no acerto
      if (numeroUsuario > numeroSecreto) {
         asignarTextoElemento('p', 'el numero secreto es menor');
      } else {
         asignarTextoElemento('p', 'el numero secreto es mayor');
      }
      intentos++
      limpiarCaja();
   }

   return;
}


function limpiarCaja() {
   document.querySelector('#valorUsuario').value = '';
}

function generarNumeroSecreto() {
   let numeroGenerado = Math.floor(Math.random() * numeroMaximo) + 1;

   console.log(numeroGenerado);
   console.log(listaNumerosSorteados);

   //si ya soteamos todos los numeros
   if (listaNumerosSorteados.length == numeroMaximo) {
      asignarTextoElemento('p', 'ya se sortearon todos los numeros posibles');
   }else {
      //si el numero esta incluido en la lista asemos una y si no hacemos otra
      if (listaNumerosSorteados.includes(numeroGenerado)) {
         return generarNumeroSecreto();
      } else {
         listaNumerosSorteados.push(numeroGenerado)
         return numeroGenerado;
      }
   }


}

function condicionesIniciales() {
   asignarTextoElemento('h1', 'juego del numerosecreto');
   asignarTextoElemento('p', `Indica un número del 1 al ${numeroMaximo}`);
   numeroSecreto = generarNumeroSecreto();
   intentos = 1;
}


function reiniciarJuego() {
   //limpiar caja
   limpiarCaja();
   //indicar mensaje de intervalo de números
   //generar nuevo numero aleatorio
   //inicializar numero de intentos
   condicionesIniciales();
   //desabilitar el boton de nuevo juego
   document.querySelector('#reiniciar').setAttribute('disabled', true)
}

condicionesIniciales();
