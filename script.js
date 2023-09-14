function getComputerChoice() {
  const gameItems = ["Rock", "Paper", "Scissors"];

  // Get a random number between 0, 1, and 2 to use as an index for gameItems
  let randomIndexNumber = Math.floor((Math.random() * gameItems.length));

  return gameItems[randomIndexNumber];
}

function playRound(playerSelection, computerSelection) {
  if (playerSelection === "Rock" && computerSelection === "Paper") {  
    computerScore++;
    roundResult = "You lose! The computer chose Paper, and Paper beats Rock.";
  } else if (playerSelection === "Rock" && computerSelection === "Scissors") {
    playerScore++;
    roundResult = "You win! The computer chose Scissors, and Rock beats Scissors.";
  } else if (playerSelection === "Rock" && computerSelection === "Rock") {
    roundResult = "No one wins! The computer chose Rock, and Rock vs Rock is a tie.";
  } else if (playerSelection === "Paper" && computerSelection === "Rock") {
    playerScore++;
    roundResult = "You win! The computer chose Rock, and Paper beats Rock.";
  } else if (playerSelection === "Paper" && computerSelection === "Scissors") {
    computerScore++;
    roundResult = "You lose! The computer chose Scissors, and Scissors beats Paper.";
  } else if (playerSelection === "Paper" && computerSelection === "Paper") {
    roundResult = "No one wins! The computer chose Paper, and Paper vs Paper is a tie.";
  } else if (playerSelection === "Scissors" && computerSelection === "Rock") {
    computerScore++;
    roundResult = "You lose! The computer chose Rock, and Rock beats Scissors.";
  } else if (playerSelection === "Scissors" && computerSelection === "Paper") {
    playerScore++;
    roundResult = "You win! The computer chose Paper, and Scissors beats Paper.";
  } else if (playerSelection === "Scissors" && computerSelection === "Scissors") {
    roundResult = "No one wins! The computer chose Scissors, and Scissors vs Scissors is a tie.";
  }
}

function updateResult(roundResult) {
  result.textContent = `Result: ${roundResult}`;
}

function updateScores() {
  playerScoreResult.textContent = `Player Score: ${playerScore}`;
  computerScoreResult.textContent = `Computer Score: ${computerScore}`;
}

function playGame(event) {
  let playerSelection = event.target.textContent;
  let computerSelection = getComputerChoice();

  playRound(playerSelection, computerSelection);

  updateResult(roundResult);

  updateScores();
}

// Initialize scores and the result
let playerScore = 0;
let computerScore = 0;
let roundResult;

const buttons = document.querySelectorAll("button");
const result = document.querySelector("#result");
const playerScoreResult = document.querySelector("#player-score");
const computerScoreResult = document.querySelector("#comp-score");

buttons.forEach(button => button.addEventListener("click", playGame));