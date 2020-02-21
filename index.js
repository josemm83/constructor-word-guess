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

    inquirer.prompt([

    ]).then(function(response){

    });
}

function generateWord(){
    randomNum = Math.floor(Math.random() * randomSelect.length);
    randomWord = new Word(randomSelect[randomNum]);
    wordChoosen = true;
}

guessGame();