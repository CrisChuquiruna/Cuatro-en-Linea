import { Tablero } from './Tablero.js'
import { Turno } from './Turnos.js';

let columna_0 = document.querySelector('.columna_0');
let columna_1 = document.querySelector('.columna_1');
let columna_2 = document.querySelector('.columna_2');
let columna_3 = document.querySelector('.columna_3');
let columna_4 = document.querySelector('.columna_4');
let columna_5 = document.querySelector('.columna_5');
let columna_6 = document.querySelector('.columna_6');

export function GenerandoIngresoDeFichaEvents(){
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

export function GenerandoEfectosDeIngresoDeFicha(){
   
    columna_0.addEventListener('mouseover', ()=>  onMouseEvent(columna_0 , 'columna_0'));
    columna_1.addEventListener('mouseover', ()=>  onMouseEvent(columna_1 , 'columna_1'));
    columna_2.addEventListener('mouseover', ()=>  onMouseEvent(columna_2 , 'columna_2'));
    columna_3.addEventListener('mouseover', ()=>  onMouseEvent(columna_3 , 'columna_3'));
    columna_4.addEventListener('mouseover', ()=>  onMouseEvent(columna_4 , 'columna_4'));
    columna_5.addEventListener('mouseover', ()=>  onMouseEvent(columna_5 , 'columna_5'));
    columna_6.addEventListener('mouseover', ()=>  onMouseEvent(columna_6 , 'columna_6'));

    columna_0.addEventListener('mouseout', ()=>  outMouseEvent(columna_0 , 'columna_0'));
    columna_1.addEventListener('mouseout', ()=>  outMouseEvent(columna_1 , 'columna_1'));
    columna_2.addEventListener('mouseout', ()=>  outMouseEvent(columna_2 , 'columna_2'));
    columna_3.addEventListener('mouseout', ()=>  outMouseEvent(columna_3 , 'columna_3'));
    columna_4.addEventListener('mouseout', ()=>  outMouseEvent(columna_4 , 'columna_4'));
    columna_5.addEventListener('mouseout', ()=>  outMouseEvent(columna_5 , 'columna_5'));
    columna_6.addEventListener('mouseout', ()=>  outMouseEvent(columna_6 , 'columna_6'));


    function onMouseEvent(div, name){
        if(Turno.turnoDeJugador1){
            div.className = name + ' player_1';
        }else{
            div.className = name + ' player_2';
        }        
    }

    function outMouseEvent(div, name){
        div.className = name + ' columna';   
    }
}