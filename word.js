var Letter = require("./letter");

function Word (input){
    this.letterArray = [];
    for (var i = 0; i < input.length; i++){
        var output = new Letter(input[i]);
        this.letterArray.push(output);
    }
    this.value = function (){
        var letterString = "";
        for(var x = 0; x < this.letterArray.length; x++){
            letterString += this.letterArray[i] + " ";
        }
        console.log(letterString + "\n------------------------------------\n");
    }
    this.guess = function(char){
        for(var j = 0; j < this.letterArray.length; j++){
            this.letterArray[i].character(char);
        }
    }
}

module.exports(Word);