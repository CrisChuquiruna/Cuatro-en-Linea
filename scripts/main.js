import { Tablero } from './Tablero.js'
import { GenerandoIngresoDeFichaEvents,GenerandoEfectosDeIngresoDeFicha } from './IngresoDeFichaEvent.js';

let turnoDelJugador_1 = true;

Tablero.inicializarTableros();

GenerandoIngresoDeFichaEvents();
GenerandoEfectosDeIngresoDeFicha();


