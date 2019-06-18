var gameHasStarted = false;

document.onkeydown = function (event) {
    if (gameHasStarted) {
        document.getElementById("startButton");
        //Computer Picks a Random Word
        var word = wordBank[Math.floor(Math.random() * wordBank.length)];

        // Hidden Answer Array to hide Randomly Selected Word
        var hiddenAnswer = [];
        for (var i = 0; i < word.length; i++) {
            console.log(word);
            hiddenAnswer[i] = "_";
        }

        var remainingLetters = word.length;

        // the Game Loop

        while (remainingLetters > 0) {
            alert(hiddenAnswer.join(" "));
            // Get a Guess from a Player 
            var guess = prompt("Guess a letter, or click Cancel to Quit");
            if (guess === null) {
                break;
            } else if (guess.length !== 1) {
                alert("Please enter your single letter guess.");
            } else {
                for (var j = 0; j < word.length; j++) {
                    if (word[j] === guess) {
                        hiddenAnswer[j] = guess;
                        remainingLetters--;
                    }
                }
            }
        }
        // Show the Answer and Congratulate the Player 
        alert(hiddenAnswer.join(" "));
        alert("Good Job! The answer was " + word);
    } else {
        document.getElementById("frank1").style.visibility = "hidden";
        alert("Welcome to The Payback Word Guess Game, where Guessing the Right Word can PAY YOU BACK! We're Excited to Have you here. Click Ok to Play");
        gameHasStarted = true;
    }

};



// Show Image Splash Screen and Introduction of Characters
// document.getElementById("showImage").onclick = function () {
//     document.getElementById("frank1").style.visibility = "visible";
// }


// Alert User Welcome to Payback Word Guess Game
// alert("Welcome to The Payback Word Guess Game, where Guessing the Right Word can PAY YOU BACK! We're Excited to Have you here. Click Ok to Play");

// document.getElementById("frank1").addEventListener("onkeydown", myFunction);

// Create Word Guess Bank of Words 

var wordBank = [
    "cat",
    "dog",
    "mouse",
    "elephant",
    "horse",
    "bear",
    "giraffe",
    "monkey",
    "fish",
    "zebra"
];

