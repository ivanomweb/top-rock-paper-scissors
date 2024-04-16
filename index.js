let playerScore = 0;
let computerScore = 0;
const btn = document.querySelectorAll("button");

btn.forEach((item) => {
  item.addEventListener("click", (e) => {
    console.log(e.target.textContent.toLowerCase());
  });
});

function getComputerChoice() {
  let computerSelection = Math.floor(Math.random() * (3 - 1 + 1) + 1);

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

function getPlayerChoice() {}

function rPSRound(playerSelection, computerSelection) {
  console.log(
    `You chose ${playerSelection}, while computer chose ${computerSelection}.`
  );
  if (playerSelection === "rock") {
    if (computerSelection === "rock") {
      console.log("Rock and rock. That's a tie!");
    } else if (computerSelection === "scissors") {
      console.log("Rock beats scissors. You win!");
      playerScore += 1;
    } else {
      console.log("Paper beats rock. You lose!");
      computerScore += 1;
    }
  } else if (playerSelection === "paper") {
    if (computerSelection === "paper") {
      console.log("Paper and paper. That's a tie!");
    } else if (computerSelection === "rock") {
      console.log("Paper beats rock. You win!");
      playerScore += 1;
    } else {
      console.log("Scissors beat paper. You lose!");
      computerScore += 1;
    }
  } else {
    if (computerSelection === "scissors") {
      console.log("Scissors and scissors. That's a tie!");
    } else if (computerSelection === "paper") {
      console.log("Scissors beats paper. You win!");
      playerScore += 1;
    } else {
      console.log("Rock beats scissors. You lose!");
      computerScore += 1;
    }
  }
}

function playGame() {}

function showScore() {
  console.log(`Player score is: ${playerScore}.
Computer score is: ${computerScore}.`);
}

playGame();

if (playerScore > computerScore) {
  console.log("Player wins.");
} else if (playerScore < computerScore) {
  console.log("Computer wins.");
} else {
  console.log("It's a tie.");
}
