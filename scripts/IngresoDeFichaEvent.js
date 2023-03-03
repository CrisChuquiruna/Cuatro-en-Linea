import { Tablero } from './Tablero.js'
import { Turno } from './Turnos.js';

let columna_0 = document.querySelector('.columna_0');
let columna_1 = document.querySelector('.columna_1');
let columna_2 = document.querySelector('.columna_2');
let columna_3 = document.querySelector('.columna_3');
let columna_4 = document.querySelector('.columna_4');
let columna_5 = document.querySelector('.columna_5');
let columna_6 = document.querySelector('.columna_6');

export function GenerandoIngresoDeFichaEvents(turnoDelJugador_1){
    columna_0.addEventListener('mouseup', (event)=>  insertFichaEvent(0,event));
    columna_1.addEventListener('mouseup', (event)=>  insertFichaEvent(1,event));
    columna_2.addEventListener('mouseup', (event)=>  insertFichaEvent(2,event));
    columna_3.addEventListener('mouseup', (event)=>  insertFichaEvent(3,event));
    columna_4.addEventListener('mouseup', (event)=>  insertFichaEvent(4,event));
    columna_5.addEventListener('mouseup', (event)=>  insertFichaEvent(5,event));
    columna_6.addEventListener('mouseup', (event)=>  insertFichaEvent(6,event));
    
    function insertFichaEvent(column, e){
        Tablero.insertarFichaEnColumna(Turno.fichaDe(), column);
        Turno.pasarTurno();
    }
    
}