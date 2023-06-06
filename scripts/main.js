import { Tablero } from './Tablero.js'
import { GenerandoIngresoDeFichaEvents,GenerandoEfectosDeIngresoDeFicha } from './IngresoDeFichaEvent.js';
import { inicializarBotones } from './Buttons.js';

let turnoDelJugador_1 = true;

Tablero.inicializarTableros();

inicializarBotones();
GenerandoIngresoDeFichaEvents();
GenerandoEfectosDeIngresoDeFicha();




