function Letter (input){
    this.letter = input;
    this.guess = false;
    this.toString = function(){
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
        if(char === this.letter){
            this.guess = true;
        }
    }
}
module.exports = Letter;