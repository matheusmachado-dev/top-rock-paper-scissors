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

console.log(getComputerChoice());
