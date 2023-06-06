import { Counter } from "./Counter.js";

export class winEvent{        

    static createAlertOfWin(){
        document.querySelector('.seleccion').style.pointerEvents = "none";        
    

        document.querySelector('.cartel_container').style.display = 'flex';
        let cartelGanaste = document.querySelector('.notificacion');
        cartelGanaste.innerHTML =  Counter.winner + " WIN";   
        if(Counter.winner == 'Player 1'){
            cartelGanaste.style.color = 'var(--player1)';
        }else{
            cartelGanaste.style.color = 'var(--player2)';
        }
    }

    static deleteAlertOfWin(){
        let cartelGanaste = document.querySelector('.notificacion');
        cartelGanaste.innerHTML = "";  
    }
}