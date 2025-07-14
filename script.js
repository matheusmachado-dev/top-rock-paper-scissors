let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
  const randomNumber = Math.floor(Math.random() * 3);
  if (randomNumber === 0) {
    return "Rock!";
  }
  if (randomNumber === 1) {
    return "Paper!";
  }
  return "Scissors!";
}

function getHumanChoice() {
  return prompt("Choose between rock, paper, or scissors");
}

console.log(getComputerChoice());
console.log(getHumanChoice());
