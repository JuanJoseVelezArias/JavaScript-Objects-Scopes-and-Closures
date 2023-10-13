#!/usr/bin/node

class Rectangle {
    constructor(w, h) {

        if (w <= 0 || h <= 0 || h === undefined ||w === undefined){
            this.width = undefined;
            this.height = undefined;
        } 
        else{
            this.width = w;
            this.height = h;
        }
    }
    print(){
        let figure = ""
        for (let i = 0; i < this.height; i++){
            for (let j = 0; j < this.width; j++){
                figure += "X"
            }
            figure += "\n"
        }
        console.log(figure)
    }
    
}
module.exports = Rectangle;
