import { Counter } from "./Counter.js";

export class winEvent{        

    static createAlertOfWin(){
        let cartelGanaste = document.querySelector('.notificacion');
        cartelGanaste.innerHTML = "GANASTE " + Counter.winner;   
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