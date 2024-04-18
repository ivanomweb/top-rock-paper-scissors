let playerScore = 0;
let computerScore = 0;
let roundsCount = 0;
const paperSrc = "./resources/paper.png";
const rockSrc = "./resources/rock.png";
const scissorsSrc = "./resources/scissors.png";
const btn = document.querySelectorAll("button");
const choice = document.querySelector("#choice");
const results = document.querySelector("#results");
const playerS = document.querySelector("#player-score");
const computerS = document.querySelector("#computer-score");
const playerImg = document.querySelector("#player-image");
const computerImg = document.querySelector("#computer-image");

btn.forEach((item) => {
  item.addEventListener("click", (e) => {
    rPSRound(e.target.textContent.toLowerCase(), getComputerChoice());
    roundsCount += 1;
    playerS.textContent = "Player score is: " + playerScore;
    computerS.textContent = "Computer score is: " + computerScore;
    showScore();
    playGame();
  });
});

function getComputerChoice() {
  let computerSelection = Math.floor(Math.random() * 3 + 1);

  switch (computerSelection) {
    case 1:
      computerSelection = "rock";
      computerImg.setAttribute("src", rockSrc);
      break;
    case 2:
      computerSelection = "paper";
      computerImg.setAttribute("src", paperSrc);

      break;
    case 3:
      computerSelection = "scissors";
      computerImg.setAttribute("src", scissorsSrc);

      break;
  }

  return computerSelection;
}

function rPSRound(playerSelection, computerSelection) {
  choice.textContent = `You chose ${playerSelection}, while computer chose ${computerSelection}.`;
  if (playerSelection === "rock") {
    playerImg.setAttribute("src", rockSrc);
    if (computerSelection === "rock") {
      results.textContent = "Rock and rock. That's a tie!";
    } else if (computerSelection === "scissors") {
      results.textContent = "Rock beats scissors. You win!";
      playerScore += 1;
    } else {
      results.textContent = "Paper beats rock. You lose!";
      computerScore += 1;
    }
  } else if (playerSelection === "paper") {
    playerImg.setAttribute("src", paperSrc);

    if (computerSelection === "paper") {
      results.textContent = "Paper and paper. That's a tie!";
    } else if (computerSelection === "rock") {
      results.textContent = "Paper beats rock. You win!";
      playerScore += 1;
    } else {
      results.textContent = "Scissors beat paper. You lose!";
      computerScore += 1;
    }
  } else {
    playerImg.setAttribute("src", scissorsSrc);
    if (computerSelection === "scissors") {
      results.textContent = "Scissors and scissors. That's a tie!";
    } else if (computerSelection === "paper") {
      results.textContent = "Scissors beats paper. You win!";
      playerScore += 1;
    } else {
      results.textContent = "Rock beats scissors. You lose!";
      computerScore += 1;
    }
  }
}

function playGame() {
  if (playerScore == 5 || computerScore == 5) {
    if (playerScore > computerScore) {
      console.log("Player wins.");
    } else if (playerScore < computerScore) {
      console.log("Computer wins.");
    } else {
      console.log("It's a tie.");
    }
    btn.forEach((item) => {
      item.disabled = true;
    });
  }
}

function showScore() {
  console.log(`Player score is: ${playerScore}.
Computer score is: ${computerScore}.`);
}
