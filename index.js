console.log("Hello, World!");

let computerSelection;
let playerSelection;

function getComputerChoice() {
  computerSelection = Math.floor(Math.random() * (3 - 1 + 1) + 1);

  switch (computerSelection) {
    case 1:
      computerSelection = "rock";
      break;
    case 2:
      computerSelection = "paper";
      break;
    case 3:
      computerSelection = "scissors";
      break;
  }

  return computerSelection;
}

function rPSRound(playerSelection, computerSelection) {
  if (playerSelection === "rock") {
    if (computerSelection === "rock") {
      console.log("Rock and rock. That's a tie!");
    } else if (computerSelection === "scissors") {
      console.log("Rock beats scissors. You win!");
    } else {
      console.log("Paper beats rock. You lose!");
    }
  } else if (playerSelection === "paper") {
    if (computerSelection === "paper") {
      console.log("Paper and paper. That's a tie!");
    } else if (computerSelection === "rock") {
      console.log("Paper beats rock. You win!");
    } else {
      console.log("Scissors beat paper. You lose!");
    }
  } else {
    if (computerSelection === "scissors") {
      console.log("Scissors and scissors. That's a tie!");
    } else if (computerSelection === "paper") {
      console.log("Scissors beats paper. You win!");
    } else {
      console.log("Rcok beats scissors. You lose!");
    }
  }
}

function playGame() {
  rPSRound();
}
