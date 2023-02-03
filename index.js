const choices = ["rock", "paper", "scissors"];
let playerSelection = "";
let computerSelection = "";
let round = 0;
let playerScore = 0;
let computerScore = 0;
let gameEnds = false;

function playRound(playerSelection, computerSelection) {
  console.log(userImage.getAttribute("src"));

  userImage.style.display = "block";
  computerImage.style.display = "block";
  userImage.setAttribute("src", `img/${playerSelection}.jpeg`);
  computerImage.setAttribute("src", `img/${computerSelection}.jpeg`);

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
  document.getElementById("player").innerHTML = `You: ${playerScore}`;
  document.getElementById("computer").innerHTML = `Computer: ${computerScore}`;
  checkGame();
}

function resetGame() {
  round = 0;
  playerScore = 0;
  computerScore = 0;
  gameEnds = false;
  userImage.style.display = "none";
  computerImage.style.display = "none";
  document.getElementById("player").innerHTML = `You: ${playerScore}`;
  document.getElementById("computer").innerHTML = `Computer: ${computerScore}`;
  verdict.innerHTML = "";
  playAgain.style.display = "none";
}

function getWinner() {
  const verdict = document.getElementById("verdict");

  if (playerScore > computerScore) {
    verdict.innerHTML = "Congrats! You won";
  } else {
    verdict.innerHTML = "Sorry! You lose";
  }

  playAgain.style.display = "block";
}

function checkGame() {
  if (playerScore == 5 || computerScore == 5) {
    gameEnds = true;
    getWinner();
  } else {
    gameEnds = false;
  }
}

function getComputerChoice() {
  let choice = Math.floor(Math.random() * choices.length);
  return choices[choice];
}

function btnClicked() {
  // console.log(e.target.id);
  // playerSelection = String(e.target.id);

  console.log(playerSelection);
  computerSelection = getComputerChoice();
  if (gameEnds == false) {
    playRound(playerSelection, computerSelection);
  }
}

const btnChoice = document.querySelectorAll("button");
console.log(btnChoice);
btnChoice.forEach((btn) => {
  btn.addEventListener("click", function () {
    playerSelection = `${btn.id}`;
    btnClicked();
  });
});

const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissors = document.getElementById("scissors");
const computerImage = document.getElementById("computerImage");
const userImage = document.getElementById("userImage");
const selectedImages = document.querySelectorAll(".selection");
const playAgain = document.querySelector(".play-again");

document.getElementById("player").innerHTML = `You: ${playerScore}`;
document.getElementById("computer").innerHTML = `Computer: ${computerScore}`;

document.getElementById("play-again").addEventListener("click", resetGame);
