import { Tablero } from "./Tablero.js";
import { Counter } from "./Counter.js";

export class Buscador{    
    static player_1 = new Counter();
    static player_2 = new Counter();

    static isWin(tablero){        
        return (
            Buscador.areFourInARow(tablero) || 
            Buscador.areFourInAColumn(tablero) || 
            Buscador.areFourOnADiagonal(tablero)
        );
    }
    
    static areFourInARow(tablero){
        for (let i = 0; i < tablero.length; i++){
            Buscador.player_1.setCountInCero();   
            Buscador.player_2.setCountInCero();   
            for (let j = 0; j < tablero[i].length; j++){
                if (Buscador.countFourInLine(tablero[i][j])){
                    return true
                }
            }
        }
        return false;           
    }
    
    static areFourInAColumn(tablero){
        for (let i = 0; i < tablero.length; i++){
            Buscador.player_1.setCountInCero();   
            Buscador.player_2.setCountInCero(); 
            for (let j = 0; j < tablero[i].length-1; j++){          
                if (Buscador.countFourInLine(tablero[j][i])){
                    return true
                }
            }
        }   
        return false;
    }
    
    static areFourOnADiagonal(tablero){
        return (
            Buscador.seeOneSideOfMatriz(tablero) 
            || Buscador.seeOneSideOfMatriz(Buscador.reverseTablero(tablero))      
            || Buscador.seeOneSideOfMatriz(Buscador.reverseRowsOfTablero(tablero)) 
            || Buscador.seeOneSideOfMatriz(Buscador.reverseTablero(Buscador.reverseRowsOfTablero(tablero)))
        ); 
    }

    static seeOneSideOfMatriz(tablero){
        let diag_length = [3, 4 , 5]
        for(let i = 0 ; i < 3 ; i++){
            for(let j = 3 + i ; j >= 0 ; j--){
                if(Buscador.countFourInLine(tablero[j][diag_length[i] - j])){
                    return true
                }
            }
        }
    }
    
    
    static countFourInLine(casilla){
        if(casilla == ' player_1'){
            Buscador.player_1.sumarUnoACount();
            Buscador.player_2.setCountInCero();     
            if(Buscador.player_1.count >= 4){
                Counter.winner = 'Player 1'
                return true;
            }
            return false;
        }
        else if(casilla == ' player_2'){
            Buscador.player_2.sumarUnoACount();
            Buscador.player_1.setCountInCero();
            if(Buscador.player_2.count >= 4){
                Counter.winner = 'Player 2'
                return true;
            }
            return false;
        }
        else{
            Buscador.player_1.setCountInCero();
            Buscador.player_2.setCountInCero();
            return false;
        }
    }
    
    static reverseRowsOfTablero(tablero){        
        var newTablero = new Array;        
        for (let i = 0; i < tablero.length; i++){
            newTablero.push(Buscador.reverseTablero(tablero[i]))
        }        
        return newTablero
    }
    
    static reverseTablero(tablero) {
        var newTablero = new Array;
        var len = tablero.length;
        for(let i = len-1 ; i >= 0; i--) {
            newTablero.push(tablero[i]);
        }
        return newTablero;
    }
}