/* Variable */
let scores = 0;
let opponent = 0;
let turns = 0;
const choices = ["rock", "paper", "scissors", "lizard", "spock"];

/* Event Listener */
document.getElementById("rock").addEventListener("click", playGame);
document.getElementById("paper").addEventListener("click", playGame);
document.getElementById("scissors").addEventListener("click", playGame);
document.getElementById("lizard").addEventListener("click", playGame);
document.getElementById("spock").addEventListener("click", playGame);
document.getElementById("generate").addEventListener("click", playGame);

/* Randomiser function */
function randomChoice() {
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

/* Game function */
function playGame(userChoice) {
    const opponentChoice = randomChoice();
    if (userChoice === opponentChoice) {
        alert("DRAW");
    }

    else if (userChoice == 'rock') {
        if (opponentChoice == 'paper') {
            alert("LOSE");
            opponent++;
        } else if (opponentChoice == 'scissors') {
            alert('WIN');
            scores++;
        } else if (opponentChoice == 'lizard') {
            alert('WIN');
            scores++;
        } else if (opponentChoice == 'spock') {
            alert('Lose');
            opponent++;
        }
    }

    else if (userChoice == 'paper') {
        if (opponentChoice == 'rock') {
            alert("WIN");
            scores++;
        } else if (opponentChoice == 'scissors') {
            alert('LOSE');
            scores++;
        } else if (opponentChoice == 'lizard') {
            alert('lOSE');
            opponent++;
        } else if (opponentChoice == 'spock') {
            alert('WIN');
            scores++;
        }
    }

    else if (userChoice == 'scissors') {
        if (opponentChoice == 'paper') {
            alert("WIN");
            scores++;
        } else if (opponentChoice == 'rock') {
            alert('LOSE');
            opponent++;
        } else if (opponentChoice == 'lizard') {
            alert('WIN');
            scores++;
        } else if (opponentChoice == 'spock') {
            alert('LOSE');
            opponent++;
        }
    }

    else if (userChoice == 'lizard') {
        if (opponentChoice == 'paper') {
            alert("WIN");
            scores++;
        } else if (opponentChoice == 'scissors') {
            alert('LOSE');
            opponent++;
        } else if (opponentChoice == 'rock') {
            alert('LOSE');
            opponent++;
        } else if (opponentChoice == 'spock') {
            alert('WIN');
            scores++;
        }
    }

    else if (userChoice == 'spock') {
        if (opponentChoice == 'paper') {
            alert("LOSE");
            opponent++;
        } else if (opponentChoice == 'scissors') {
            alert('WIN');
            scores++;
        } else if (opponentChoice == 'lizard') {
            alert('LOSE');
            opponent++;
        } else if (opponentChoice == 'rock') {
            alert('WIN');
            scores++;
        }
    }

    turns++;
    document.getElementById("tries").textContent = turns;
    document.getElementById("player-score").textContent = scores;
    document.getElementById("opponentChoice").textContent = opponent;

    if (turns === 5) {
        if (scores >= 3) {
            alert("GAME OVER YOU WIN !!");
        } else {
            alert("GAME OVER YOU LOSE !!");
        }
        replayGame();
    }
}   
    

/* Game replay */
function replayGame() {
    scores = 0;
    tries = 0;
    document.getElementById("tries").textContent = turns;
    document.getElementById("player-score").textContent = scores;
}