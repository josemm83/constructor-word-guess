var Word = require("./word.js");
var inquirer = require("inquirer");

var choices = "abcdefghijklmnopqrstuvwxyz";
var aquarium = ["shrimp", "octopus", "shark", "oyster", "squid", "flounder", "coral reef", 
    "lobster", "crayfish", "salmon", "catfish", "yellowtail", "crab"];

var counter = 10;
var correct = [];
var incorrect = [];
var wordChoosen = false;
var randomNum = Math.floor(Math.random() * aquarium.length);
var randomWord = new Word(aquarium[randomNum]);

function guessGame(){
    if(wordChoosen){
        randomNum = Math.floor(Math.random() * aquarium.length);
        randomWord = new Word(aquarium[randomNum]);
        wordChoosen = false
    }
    var wordComplete = [];
    randomWord.letterArray.forEach(completeCheck);

    if(wordComplete.includes(false)){
        inquirer.prompt([
        {
            type: "input",
            message: "Guess a letter!",
            name: "letter"
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
                    randomWord.letterArray.forEach(wordCheck);
                    if(guessedWord.join("") === wordComplete.join("")){
                        console.log("Incorrect!");
                        incorrect.push(response.letter);
                        counter --;
                    }
                    else{
                        console.log("\nCorrect!\n");
                        correct.push(response.letter);
                    }
                    randomWord.value();
                    console.log("Guesses left: " + counter + "\n");
                    console.log("Letters guessed: " + incorrect.join(" ") + "\n");
                    if(counter > 0){
                        guessGame();
                    }
                    else{
                        console.log("YOU LOSE!\n");
                        reset();
                    }
                    function wordCheck(key){
                        guessedWord.push(key.guess);
                    }
                }
            }
        });
    }
    else{
        console.log("YOU WIN!\n");
        reset();
    }
    function completeCheck(key){
        wordComplete.push(key.guess);
    }
}

function reset(){
    inquirer.prompt([
        {
            type: "list",
            message: "Would you like to play again?",
            choices: ["Yes", "No"],
            name: "answer"
        }
    ]).then(function(response){
        if (response.answer === "Yes"){
            counter = 10;
            correct = [];
            incorrect = [];
            wordChoosen = true;
            guessGame();
        }
        else{
            return;
        }
    });
}


guessGame();