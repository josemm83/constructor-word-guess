// var inquirer = require("inquirer");
// var sample = "p";

function Letter (input){
    this.letter = input;
    this.guess = false;
    this.output = function(){
        if(this.letter === " "){
            this.guess = true;
            return " ";
        }
        else{
            if (!this.guess){
             return "_";
            }
            else{
                return this.letter;
            }
        }
    }
    this.character = function(char){
        if(this.letter === char){
            this.guess = true;
        }
    }
}
module.exports = Letter;
// var askQuestion = function (){
//     inquirer.prompt([
//         {
//             name: "letter",
//             message: "Guess the letter: "
//         }
//     ]).then(function(response){
//         Letter(response.letter);
//     });
// }

// askQuestion();