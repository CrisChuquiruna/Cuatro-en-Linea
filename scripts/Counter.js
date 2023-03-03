export class Counter{

    static winner = '';
    constructor(){
        this.count = 0;
        this.countColumn = 0;        
    }
    
    sumarUnoACount(){
        this.count++;
    }

    setCountInCero(){
        this.count = 0;
    }
}