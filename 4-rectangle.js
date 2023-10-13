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
    rotate(){
        let figure = ""
        for (let i = 0; i < this.width; i++){
            for (let j = 0; j < this.height; j++){
                figure += "X"
            }
            figure += "\n"
        }
        console.log(figure)
    }
    double(){
        let figure = ""
        for (let i = 0; i < (this.height * 2); i++){
            for (let j = 0; j < (this.width * 2); j++){
                figure += "X"
            }
            figure += "\n"
        }
        console.log(figure)
    }
}
module.exports = Rectangle;
