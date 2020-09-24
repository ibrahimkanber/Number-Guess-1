"use strict"

const generatedNumber=Math.round(Math.random()*10)

export class List{
    state = {
        number:"",
        
    };
    constructor(input){
        this.state.number=input;
    }

    renderNumber(val){
        if (val!=generatedNumber){
            console.log(generatedNumber)
            return "yanlisss"
        }
    }


}