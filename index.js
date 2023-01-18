const choices = ["rock", "paper", "scissors"]
let playerSelection = "rock"
let round  = 0
let playerScore = 0
let computerScore = 0

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        console.log("It is a tie")
    } else if  ((computerSelection === "rock" && playerSelection === "scissors") ||
    (computerSelection === "scissors" && playerSelection === "paper") ||
    (computerSelection === "paper" && playerSelection === "rock")) {
        console.log("You loose")
        computerScore +=1
    } else {
        console.log("You win!")
        playerScore +=1
    }
  }

 while(round<5){
    const computerSelection = getComputerChoice();
    playerSelection = prompt("Enter your choice: rock, paper, scissors").toLowerCase().trim()
    if (playerSelection.trim() === "") {
        playerSelection = choices[0]
    }
    console.log(`You Selected: ${playerSelection}` )
    console.log(`Computer Selected: ${computerSelection}` )
    playRound(playerSelection,computerSelection)
    round ++

}

if (round > 4) {
    if (playerScore > computerScore) {
        console.log(`You win the game of ${round} rounds`)
    } else {
        console.log(`Computer wins the game of ${round} rounds`)
    }
    console.log(`Your Score: ${playerScore} Computer Score: ${computerScore}`)
}

  function getComputerChoice() {
    let choice = Math.floor(Math.random() * choices.length)
    return choices[choice]
  }

   

  

  

  