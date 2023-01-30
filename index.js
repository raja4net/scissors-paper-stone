const choices = ["rock", "paper", "scissors"];
let playerSelection = "";
let computerSelection = "";
let round = 0;
let playerScore = 0;
let computerScore = 0;
let gameEnds = false;

function playRound(playerSelection, computerSelection) {
  console.log("Player:", playerSelection);
  console.log("Computer", computerSelection);
  if (playerSelection === computerSelection) {
    console.log("It is a tie");
  } else if (
    (computerSelection === "rock" && playerSelection === "scissors") ||
    (computerSelection === "scissors" && playerSelection === "paper") ||
    (computerSelection === "paper" && playerSelection === "rock")
  ) {
    console.log("You loose");
    computerScore += 1;
  } else {
    console.log("You win!");
    playerScore += 1;
  }
  round++;
  checkGame();
}

function getWinner() {
  if (playerScore > computerScore) {
    document.getElementById("verdict").innerHTML = "Congrats! You won";
  } else {
    document.getElementById("verdict").innerHTML = "Sorry! You lose";
  }
}

function checkGame() {
  if (playerScore < 5 && computerScore < 5) {
    gameEnds = false;
  } else {
    gameEnds = true;
    getWinner();
  }
  document.getElementById("player").innerHTML = playerScore;
  document.getElementById("computer").innerHTML = computerScore;
}

function getComputerChoice() {
  let choice = Math.floor(Math.random() * choices.length);
  return choices[choice];
}

function btnClicked(e) {
  console.log("button clicked");
  if (e.target.id === "rock") {
    playerSelection = "rock";
  } else if (e.target.id === "paper") {
    playerSelection = "paper";
  } else {
    playerSelection = "scissors";
  }
  console.log(playerSelection);
  computerSelection = getComputerChoice();
  if (gameEnds == false) {
    playRound(playerSelection, computerSelection);
  }
}

const btnChoice = document.querySelectorAll("button");
console.log(btnChoice);
btnChoice.forEach((btn) => {
  btn.addEventListener("click", btnClicked);
});

const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissors = document.getElementById("scissors");

document.getElementById("player").innerHTML = playerScore;
document.getElementById("computer").innerHTML = computerScore;
