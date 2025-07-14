let humanScore = 0;
let computerScore = 0;

let humanChoice;

console.log("Computer Score: " + computerScore);
console.log("Human Score: " + humanScore);

function getComputerChoice() {
  const randomNumber = Math.floor(Math.random() * 3);
  if (randomNumber === 0) {
    return "rock";
  }
  if (randomNumber === 1) {
    return "paper";
  }
  return "scissors";
}

function getHumanChoice() {
  return prompt("Choose between rock, paper, or scissors");
}

function playRound(humanChoice, computerChoice) {
  const sanitizedHumanChoice = sanitizeHumanChoice(humanChoice);

  if (sanitizedHumanChoice === "rock" && computerChoice === "scissors") {
    humanScore++;
    return console.log("You Won! " + humanChoice + " beats " + computerChoice);
  }
  if (sanitizedHumanChoice === "scissors" && computerChoice === "paper") {
    humanScore++;
    return console.log("You Won! " + humanChoice + " beats " + computerChoice);
  }
  if (sanitizedHumanChoice === "paper" && computerChoice === "rock") {
    humanScore++;
    return console.log("You Won! " + humanChoice + " beats " + computerChoice);
  }
  if (sanitizedHumanChoice === computerChoice) {
    return console.log("Draw! Nobody won");
  }
  computerScore++;
  return console.log("You Lost! \n" + computerChoice + " beats " + humanChoice);
}

function sanitizeHumanChoice(humanChoice) {
  return humanChoice.toLowerCase();
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);

console.log("Computer Score: " + computerScore);
console.log("Human Score: " + humanScore);
