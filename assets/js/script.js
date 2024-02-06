/* Variable */
let scores = 0;
let opponent = 0;
let turns = 0;
const choices = ["rock", "paper", "scissors", "lizard", "spock"];

/*  Authentication */
function validateForm(event) {
    event.preventDefault();
    let fname = document.getElementById("fname").value;
    if (fname === "") {
        alert("Please enter your name to play.");
        return false;
    } else {
        window.location.href = "game.html";
    }
    }
    // document.getElementById("rock").addEventListener("click", playGame);
    //   scores++;
/* Event Listener */
document.getElementById("rock").addEventListener("click", playGame);
document.getElementById("paper").addEventListener("click", playGame);
document.getElementById("scissors").addEventListener("click", playGame);
document.getElementById("lizard").addEventListener("click", playGame);
document.getElementById("spock").addEventListener("click", playGame);
/* Randomiser function */
function randomChoice() {
  const randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
}
/* Game function */
function playGame(event) {
  let userChoice = event.target.id;
  const opponentChoice = randomChoice();
  if (event.target.id) {
    userChoice = event.target.id;
  } else {
    userChoice = event.target.parentElement.id;
  }
  if (userChoice === opponentChoice) {
    alert("DRAW");
  } else if (userChoice === "rock") {
    if (opponentChoice === "paper") {
      alert("Opponent chose paper YOU LOSE");
      opponent++;
    } else if (opponentChoice === "scissors") {
      alert("Opponent chose scissors YOU WIN");
      scores++;
    } else if (opponentChoice === "lizard") {
      alert("Opponent chose lizard YOU WIN");
      scores++;
    } else if (opponentChoice === "spock") {
      alert("Opponent chose spock YOU LOSE");
      opponent++;
    }
  } else if (userChoice === "paper") {
    if (opponentChoice === "rock") {
      alert("Opponent chose rock YOU WIN");
      scores++;
    } else if (opponentChoice === "scissors") {
      alert("Opponent chose scissors YOU LOSE");
      scores++;
    } else if (opponentChoice === "lizard") {
      alert("Opponent chose lizard YOU LOSE");
      opponent++;
    } else if (opponentChoice === "spock") {
      alert("Opponent chose spock YOU WIN");
      scores++;
    }
  } else if (userChoice === "scissors") {
    if (opponentChoice === "paper") {
      alert("Opponent chose paper YOU WIN");
      scores++;
    } else if (opponentChoice === "rock") {
      alert("Opponent chose rock YOU LOSE");
      opponent++;
    } else if (opponentChoice === "lizard") {
      alert("Opponent chose lizard YOU WIN");
      scores++;
    } else if (opponentChoice === "spock") {
      alert("Opponent chose spock YOU LOSE");
      opponent++;
    }
  } else if (userChoice === "lizard") {
    if (opponentChoice === "paper") {
      alert("Opponent chose paper YOU WIN");
      scores++;
    } else if (opponentChoice === "scissors") {
      alert("Opponent chose scissors YOU LOSE");
      opponent++;
    } else if (opponentChoice === "rock") {
      alert("Opponent chose ROCK YOU LOSE");
      opponent++;
    } else if (opponentChoice === "spock") {
      alert("Opponent chose spock YOU WIN");
      scores++;
    }
  } else if (userChoice === "spock") {
    if (opponentChoice === "paper") {
      alert("Opponent chose paper YOU LOSE");
      opponent++;
    } else if (opponentChoice === "scissors") {
      alert("Opponent chose scissors YOU WIN");
      scores++;
    } else if (opponentChoice === "lizard") {
      alert("Opponent chose lizard YOU LOSE");
      opponent++;
    } else if (opponentChoice === "rock") {
      alert("Opponent chose rock YOU WIN");
      scores++;
    }
  }
  console.log(opponentChoice);
  console.log(userChoice);
  turns++;
  document.getElementById("tries").textContent = turns;
  document.getElementById("player-score").textContent = scores;
  document.getElementById("opponentChoice").textContent = opponent;
  if (turns === 5) {
    if (scores >= 3) {
      alert(`Opponent chose ${opponentChoice} GAME OVER YOU WIN !!`);
    } else {
      alert(`Opponent chose ${opponentChoice} GAME OVER YOU LOSE !!`);
    }
    replayGame();
  }
}
/* Game replay */
function replayGame() {
  scores = 0;
  turns = 0;
  opponent = 0;
  document.getElementById("tries").textContent = turns;
  document.getElementById("player-score").textContent = scores;
  document.getElementById("opponentChoice").textContent = opponent;
}