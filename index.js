var Word = require("./word");
var inquirer = require("inquirer");

var choices = "abcdefghijklmnopqrstuvwxyz";
var randomSelect = ["shrimp", "octopus", "shark", "oyster", "squid", "flounder", "coral reef", 
    "lobster", "crayfish", "salmon", "catfish", "yellowtail", "crab"];

var counter = 10;
var correct = [];
var incorrect = [];
var wordChoosen = false;
var randomNum = 0;
var randomWord = "";

function guessGame(){
    if(!wordChoosen){
        generateWord();
    }
    var wordComplete = [];
    if(wordComplete.includes(false)){
        inquirer.prompt([
        {
            type: "input",
            name: "letter",
            message: "Guess a letter!"
        }
        ]).then(function(response){
            if(!choices.includes(response.letter) || response.letter.length > 1){
                console.log("\nInvalid entry please try again\n");
                guessGame();
            }
            else{
                if(incorrect.includes(response.letter) || correct.includes(response.letter || response.letter === "")){
                    console.log("\nAlready guessed or nothing was entered!\n");
                    guessGame();
                }
                else{
                    var guessedWord = [];
                    randomWord.guess(response.letter);
                    randomWord.letterArray.foreach(wordCheck);
                    if(guessedWord.join("") === wordComplete.join("")){
                        console.log("Incorrect!");
                        incorrect.push(response.letter);
                        counter --;
                    }
                    else{
                        console.log("\nCorrect!\n");
                        correct.push(response.letter);
                    }
                    randomWord();
                    console.log("Guesses left: " + counter + "\n");
                    console.log("Letters guessed: " + incorrect.join(" ") + "\n");
                    if(counter > 0){
                        guessGame();
                    }
                    else{
                        console.log("YOU LOSE!\n")
                    }
                }
            }
        });
    }
    else{
        console.log("YOU WIN!\n");
        reset();
    }
    function wordCheck(key){
        wordComplete.push(key.guess);
    }
}

function reset(){
    inquirer.prompt([
        {
            type: "list",
            message: "Would you like to play again?",
            choice: ["Yes", "No"],
            name: "reset"
        }
    ]).then(function(respone){
        if (response.reset === "Yes"){
            counter = 10;
            correct = [];
            incorrect = [];
            wordChoosen = false;
            guessGame();
        }
        else{
            return;
        }
    });
}

function generateWord(){
    randomNum = Math.floor(Math.random() * randomSelect.length);
    randomWord = new Word(randomSelect[randomNum]);
    wordChoosen = true;
}

guessGame();