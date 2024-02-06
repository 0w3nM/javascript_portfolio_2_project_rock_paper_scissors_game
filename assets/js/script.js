/* Variable */
let scores = 0;
let opponent = 0;
let turns = 0;
const choices = ["rock", "paper", "scissors", "lizard", "spock"];

/*  Authentication */
function validateForm() {
      let fname = document.getElementById("fname").value;
      if (fname === "") {
        alert("Please enter your name to play.");
        return false;
      }
      return window.location.href = "game.html";window.location.href = "game.html";
    }document.getElementById("rock").addEventListener("click", playGame);
      scores++;
  opponent = 0;
  document.getElementById("tries").textContent = turns;
  document.getElementById("player-score").textContent = scores;
  document.getElementById("opponentChoice").textContent = opponent;
}
