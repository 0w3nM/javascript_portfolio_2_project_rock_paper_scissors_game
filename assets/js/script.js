/* Variable */
let scores = 0;
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
    } else if (userChoice == 'rock') {
        if (opponent == 'paper') {
            alert("LOSE");
        } else if (opponent == 'scissors') {
            alert('WIN');
            scores++;
        } else if (opponent == 'lizard') {
            alert('WIN');
            scores++;

            turns++;
            document.getElementById("tries").textContent = turns;
            document.getElementById("player-score").textContent = scores;

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


