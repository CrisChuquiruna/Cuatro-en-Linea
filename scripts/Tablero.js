import { Counter } from "./Counter.js";
import { Buscador } from "./Buscador.js";

export class Tablero{
    static tablero = [
        [0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0]
    ];
    static tablero_ayuda = [];
    max_row = 6;
    max_column =7;

    static inicializarTableros(){
        Tablero.tablero_ayuda = [
            ['empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty'],
            ['empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty'],
            ['empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty'],
            ['empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty'],
            ['empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty'],
            ['empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty']
        ];
       
        for (let i = 0; i < this.tablero.length; ++i){
            for(let j = 0; j < this.tablero[i].length; j++){
                Tablero.tablero[i][j] = document.querySelector('.espacio_' + i + '_' + j);
                Tablero.tablero[i][j].className = 'espacio_' + i + '_' + j + ' espacios';
            }
        }
        console.log("inicializando tablero");
    }

    static isEmpty(row, column){
        if (Tablero.tablero_ayuda[row][column] == 'empty'){
            return true
        }
        else{
            return false
        }
    }

    static isFichaOfPlayer_1(row, column){
        if (Tablero.tablero_ayuda[row][column] == ' player_1'){
            return true
        }
        else{
            return false
        }
    }

    static insertarFichaEnColumna(ficha, column){
        for (let i = this.tablero.length - 1; i >= 0; i--){
            if(Tablero.tablero_ayuda[i][column] == 'empty'){
                Tablero.tablero_ayuda[i][column] = ficha;
                Tablero.tablero[i][column].className += ficha;
                break 
            }
        }
        
        if(Buscador.isWin(this.tablero_ayuda)){
            console.log("GANASTE ", Counter.winner)
            let cartelGanaste = document.querySelector('.notificacion');
            cartelGanaste.innerHTML = "GANASTE " + Counter.winner;            
            if(Counter.winner == 'Player 1'){
                cartelGanaste.style.color = 'var(--player1)';
            }else{
                cartelGanaste.style.color = 'var(--player2)';
            }
        }
    }
}