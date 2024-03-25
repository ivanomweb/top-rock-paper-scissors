console.log("Hello, World!");

let computerChoice;

function getComputerChoice() {
  computerChoice = Math.floor(Math.random() * (3 - 1 + 1) + 1);

  switch (computerChoice) {
    case 1:
      computerChoice = "Rock";
      break;
    case 2:
      computerChoice = "Paper";
      break;
    case 3:
      computerChoice = "Scissors";
      break;
  }

  return computerChoice;
}

console.log(getComputerChoice());
