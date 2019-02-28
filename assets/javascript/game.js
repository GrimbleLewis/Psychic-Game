// global variables 
var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t",
"u", "v", "w", "x", "y", "z"];

var wins = 0;
var losses = 0;
var attempts = 9;
var guessedLetters= [];

// var for game to choose random letter in the letters array
var computerChoice = letters[Math.floor(Math.random() * letters.length)];
// a cheat sheet in the console
console.log(computerChoice);

// onkeypress function that uses user key input to play the game
document.onkeypress = function(event) {
    var userGuess = event.key.toLowerCase();

    if(userGuess === computerChoice){
        wins++;
    // resets the attempts, guessedLetters, and the computer picks another random letter
        attempts = 9;
        guessedLetters= [];
        computerChoice = letters[Math.floor(Math.random() * letters.length)];
        console.log(computerChoice);

    // guessedLetters gets filled up by userGuess's being pushed into the empty array
    } else{
        attempts--;
        guessedLetters.push(userGuess.toLowerCase());
    }

    if(attempts === 0){
        losses++;
        guessedLetters= [];
        attempts = 9;
        computerChoice = letters[Math.floor(Math.random() * letters.length)];
        console.log(computerChoice);
    }

   


    // displays the text on screen, including a list of user guesses
    document.getElementById('wins').innerHTML = "Wins: " + wins;
    document.getElementById('losses').innerHTML = "Losses: " + losses;
    document.getElementById('attempts').innerHTML = "Guesses left: " + attempts;
    document.getElementById('guessedLetters').innerHTML = "Your guesses so far: " + guessedLetters;

}