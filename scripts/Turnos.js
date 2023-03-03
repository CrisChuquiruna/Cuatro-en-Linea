
export class Turno{    
    static turnoDeJugador1 = true;
    
    static pasarTurno(){
        Turno.turnoDeJugador1 = !Turno.turnoDeJugador1;
    }

    static fichaDe(){
        if(this.turnoDeJugador1){
            return ' player_1'
        }else{
            return ' player_2'
        }
    }

}