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
  result.textContent = `Round Result: ${roundResult}`;
}

function updateScores() {
  playerScoreResult.textContent = `Player Score: ${playerScore}`;
  computerScoreResult.textContent = `Computer Score: ${computerScore}`;
}

function updateEndResult() {
  if (playerScore === 5) {
    result.textContent = "Game Result: You win! Congratulations :)";
    gameOver = true;
  } else if (computerScore === 5) {
    result.textContent = "Game Result: Computer wins! Good luck next time :/";
    gameOver = true;
  }
}

function playAgain() {
  playerScore = 0;
  computerScore = 0;
  playerScoreResult.textContent = "Player Score: 0";
  computerScoreResult.textContent = "Computer Score: 0";
  result.textContent = "Round Result: ";
  gameOver = false;
  buttons.forEach(button => button.addEventListener("click", playGame));
  document.body.removeChild(replayBtn);
}

function playGame(event) {
  let playerSelection = event.target.textContent;
  let computerSelection = getComputerChoice();

  playRound(playerSelection, computerSelection);

  updateResult(roundResult);

  updateScores();

  updateEndResult();

  if (gameOver) {
    buttons.forEach(button => button.removeEventListener("click", playGame));

    const replayBtn = document.createElement("button");
    replayBtn.textContent = "Start again"
    document.body.appendChild(replayBtn);
    replayBtn.addEventListener("click", playAgain);
  }
}

// Initialize scores, the result and flag
let playerScore = 0;
let computerScore = 0;
let roundResult;
let gameOver = false;

// Select HTML elements
const buttons = document.querySelectorAll("button");
const result = document.querySelector("#result");
const playerScoreResult = document.querySelector("#player-score");
const computerScoreResult = document.querySelector("#comp-score");

buttons.forEach(button => button.addEventListener("click", playGame));