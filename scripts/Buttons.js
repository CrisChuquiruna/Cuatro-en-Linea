import { Tablero } from "./Tablero.js";

export function inicializarBotones(){
    let button_restart = document.querySelector('.restart')
        button_restart.addEventListener('click', (event)=>{        
        document.querySelector('.seleccion').style.pointerEvents = "auto";     
        Tablero.inicializarTableros();
    })

    let button_play = document.querySelector('.play')
        button_play.addEventListener('click', (event)=>{
        button_play.style.display = "none";
        document.querySelector('.menu').style.height = '0px';
        document.querySelector('.game').style.display = "block";
    })

    let exit_event_win = document.querySelector('.cartel_container')
        exit_event_win.addEventListener('click', (event)=>{
            exit_event_win.style.display = "none";
    })
}

