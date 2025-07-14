let humanScore = 0;
let computerScore = 0;

console.log("Computer Score: " + computerScore);
console.log("Human Score: " + humanScore);

playGame();

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
    return console.log(
      "You won the round!\n" + humanChoice + " beats " + computerChoice
    );
  }
  if (sanitizedHumanChoice === "scissors" && computerChoice === "paper") {
    humanScore++;
    return console.log(
      "You won the round!\n" + humanChoice + " beats " + computerChoice
    );
  }
  if (sanitizedHumanChoice === "paper" && computerChoice === "rock") {
    humanScore++;
    return console.log(
      "You won the round!\n" + humanChoice + " beats " + computerChoice
    );
  }
  if (sanitizedHumanChoice === computerChoice) {
    return console.log("Draw!\nNobody won the round");
  }
  computerScore++;
  return console.log(
    "You lost the round!\n" + computerChoice + " beats " + humanChoice
  );
}

function sanitizeHumanChoice(humanChoice) {
  return humanChoice.toLowerCase();
}

function playGame() {
  for (let round = 0; round < 5; round++) {
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();

    console.log("Round " + (round + 1) + " results:");

    playRound(humanSelection, computerSelection);

    console.log("Computer Score: " + computerScore);
    console.log("Human Score: " + humanScore);
  }
  if (humanScore > computerScore) {
    return console.log("You won the game!");
  }
  if (computerScore > humanScore) {
    return console.log("The computer won the game!");
  }

  return console.log("Nobody won the game!");
}
