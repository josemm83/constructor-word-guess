var Letter = require("./letter");

function Word (input){
    var letterArray = [];
    for (var i = 0; i < input.length; i++){
        var output = new Letter(input[i]);
        letterArray.push(output);
    }
    var value = function (){
        var letterString = "";
        for(var x = 0; x < letterArray.length; x++){
            letterString += letterArray[i] + " ";
        }
        console.log(letterString + "\n");
    }
    var guess = function(char){
        for(var j = 0; j < letterArray.length; j++){
            this.letterArray[i].character(char);
        }
    }
}

module.exports(Word);