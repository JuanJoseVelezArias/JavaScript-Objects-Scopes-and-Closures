#!/usr/bin/node

const Rectangle = require('./4-rectangle');

class Square extends Rectangle  {
    constructor(s) {
        super(s, s);
    }
    charPrint(c){
        let figure = ""

        if(c === undefined){
            super.print();
        }
        else{
            for (let i = 0; i < this.width; i++){
                for (let j = 0; j < this.height; j++){
                    figure += c;
                }
                figure += "\n";
            }
            console.log(figure);
        }
    }      
}
module.exports = Square;
