document.onreadystatechange = function (){
    if (document.readyState === "interactive") {

        
var wins = 0;
var losses = 0;
var guessesLeft = 9;
var guessesSoFar = []; 
var computerChoices = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']; //list of letters to choose from


document.onkeyup = function(event) {
    var userGuess = String.fromCharCode(event.keyCode).toLowerCase(); 
    var computerGuess = computerChoices[Math.floor(Math.random()*computerChoices.length)];
    guessesSoFar.push(userGuess); 


    if (userGuess == computerGuess) {
        wins++;
        alert('You Win!');
        guessesLeft = 9; 
        guessesSoFar.length = 0; 
    }

    else if (guessesLeft == 0){
        losses++;
        alert('Sorry, try again!');
        guessesLeft = 9;
        guessesSoFar.length = 0;
    }

    else if (userGuess !== computerGuess){
        guessesLeft--; 
    }  
       

    var html = "<h1>The Psychic Game</h1>" + 
    "<h3>Guess what letter I'm thinking of !</h3>" +
    "<h3>Wins: " + 
    wins + 
    "</h3>" +
    "<h3>Losses: " + 
    losses + 
    "</h3>" +
    "<h3>Guesses Left: " + 
    guessesLeft + 
    "</h3>" +
    "<h3>Your Guesses so far: " +
    guessesSoFar +
    "</h3>"
    ;
    
    document.querySelector('#game').innerHTML = html;
}
};
}