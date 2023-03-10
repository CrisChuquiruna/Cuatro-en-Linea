import { Tablero } from './Tablero.js'
import { GenerandoIngresoDeFichaEvents,GenerandoEfectosDeIngresoDeFicha } from './IngresoDeFichaEvent.js';

let turnoDelJugador_1 = true;

Tablero.inicializarTableros();

GenerandoIngresoDeFichaEvents();
GenerandoEfectosDeIngresoDeFicha();

let button_restart = document.querySelector('.restart')
button_restart.addEventListener('click', (event)=>{
    Tablero.inicializarTableros();
})


