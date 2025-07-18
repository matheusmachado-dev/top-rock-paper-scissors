let humanScore = 0;
let computerScore = 0;
let round = 1;

console.log("Computer Score: " + computerScore);
console.log("Human Score: " + humanScore);

const rockBtn = document.querySelector("#rock-btn");
const paperBtn = document.querySelector("#paper-btn");
const scissorsBtn = document.querySelector("#scissors-btn");
const resetBtn = document.querySelector("#reset-btn");

const humanScoreElement = document.querySelector("#human-score");
const computerScoreElement = document.querySelector("#computer-score");
const roundCounter = document.querySelector("#round");
const containerBoard = document.querySelector("#container-board");
const resultsBoard = document.querySelector("#results-board");

rockBtn.addEventListener("click", (e) => {
  const computerChoice = getComputerChoice();
  playRound("rock", computerChoice);
});
paperBtn.addEventListener("click", (e) => {
  const computerChoice = getComputerChoice();
  playRound("paper", computerChoice);
});
scissorsBtn.addEventListener("click", (e) => {
  const computerChoice = getComputerChoice();
  playRound("scissors", computerChoice);
});
resetBtn.addEventListener("click", resetGame);

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
    humanScoreElement.textContent = "You: " + humanScore;
    showResults("Player won!", round, sanitizedHumanChoice, computerChoice);
    round++;
    roundCounter.textContent = `Round: ${round}`;
    getWinner();
    return;
  }
  if (sanitizedHumanChoice === "scissors" && computerChoice === "paper") {
    humanScore++;
    humanScoreElement.textContent = "You: " + humanScore;
    showResults("Player won!", round, sanitizedHumanChoice, computerChoice);
    round++;
    roundCounter.textContent = `Round: ${round}`;
    getWinner();
    return;
  }
  if (sanitizedHumanChoice === "paper" && computerChoice === "rock") {
    humanScore++;
    humanScoreElement.textContent = "You: " + humanScore;
    showResults("Player won!", round, sanitizedHumanChoice, computerChoice);
    round++;
    roundCounter.textContent = `Round: ${round}`;
    getWinner();
    return;
  }
  if (sanitizedHumanChoice === computerChoice) {
    showResults("Draw!", round, sanitizedHumanChoice, computerChoice, true);
    round++;
    roundCounter.textContent = `Round: ${round}`;
    return console.log("Draw!\nNobody won the round");
  }
  computerScore++;
  computerScoreElement.textContent = "Computer: " + computerScore;
  showResults("Computer won!", round, computerChoice, sanitizedHumanChoice);
  round++;
  roundCounter.textContent = `Round: ${round}`;
  getWinner();
  return;
}

function getWinner() {
  if (humanScore === 5) {
    containerBoard.classList.toggle("disabled");
    resetBtn.classList.toggle("disabled");
    return alert("You win!");
  }
  if (computerScore === 5) {
    containerBoard.classList.toggle("disabled");
    resetBtn.classList.toggle("disabled");
    return alert("You lost!");
  }
}

function resetGame() {
  humanScore = 0;
  computerScore = 0;
  round = 1;

  humanScoreElement.textContent = "You: " + humanScore;
  computerScoreElement.textContent = "Computer: " + computerScore;
  roundCounter.textContent = `Round: ${round}`;
  containerBoard.classList.toggle("disabled");
  resultsBoard.textContent = "";
  resetBtn.classList.toggle("disabled");
}

function showResults(winner, round, winnerChoice, loserChoice, isDraw = false) {
  const roundResult = document.createElement("p");
  if (isDraw) {
    roundResult.textContent = `Round ${round}: Draw! both players chose ${winnerChoice}`;
    resultsBoard.appendChild(roundResult);
    return;
  }
  roundResult.textContent = `Round ${round}: ${winner} ${winnerChoice} beats ${loserChoice}`;
  resultsBoard.appendChild(roundResult);
  return;
}

function sanitizeHumanChoice(humanChoice) {
  return humanChoice.toLowerCase();
}

function playGame() {}
