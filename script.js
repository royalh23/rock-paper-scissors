// Return a random object for computer
function computerPlay() {
  const gameElements = ['rock', 'paper', 'scissors'];
  return gameElements[Math.floor((Math.random() * gameElements.length))];
}

// Play a round of game
function playRound(e) {
  let playerSelection = e.target.getAttribute('id');
  let computerSelection = computerPlay();
  let result;

  if (playerSelection === computerSelection) {
    result = "No one wins. Move on."
  } else if (playerSelection === 'rock' && computerSelection === 'scissors') {
      playerWins = true;
      result = "You win! The computer chose Scissors, and Rock beats Scissors."
  } else if (playerSelection === 'scissors' && computerSelection === 'rock') {
      computerWins = true;
      result = "You lose! The computer chose Rock, and Rock beats Scissors.";
  } else if (playerSelection === 'paper' && computerSelection === 'rock') {
      playerWins = true;
      result = "You win! The computer chose Rock, and Paper beats Rock.";
  } else if (playerSelection === 'rock' && computerSelection === 'paper') {
      computerWins = true;
      result = "You lose! The computer chose Paper, and Paper beats Rock.";
  } else if (playerSelection === 'scissors' && computerSelection === 'paper') {
      playerWins = true;
      result = "You win! The computer chose Paper, and Scissors beats Paper.";
  } else if (playerSelection === 'paper' && computerSelection === 'scissors') {
      computerWins = true;
      result = "You lose! The computer chose Scissors, and Scissors beats Paper.";
  }

  // Display the result
  const rdiv = document.querySelector('#result');
  rdiv.textContent = result;

  // Update the scores
  checkWinnerInEachRound();

  playerWins = false;
  computerWins = false;
}

function checkWinnerInEachRound() {
  if (playerWins) {
    playerScore++;
    const pScore = document.querySelector("#pscore");
    pScore.textContent = `Player Score: ${playerScore}`;
  } else if (computerWins) {
    computerScore++;
    const cScore = document.querySelector("#cscore");
    cScore.textContent = `Computer Score: ${computerScore}`;
  }
}

function checkAndAnnounceLastWinner() {
  if (playerScore > computerScore) {
    rdiv.textContent = "Congratulations! You defeated the computer.";
  } else if (playerScore < computerScore) {
    rdiv.textContent = "You lost the game to the computer. Better luck next time!";
  } else {
    rdiv.textContent = "Tie!";
  }
}

// Set a boolean value for the player and computer in each round and their scores
let playerWins = false;
let computerWins = false;
let playerScore = 0;
let computerScore = 0;

// The main function of the game
function game() {
  
  const rock = document.querySelector("#rock");
  const paper = document.querySelector("#paper");
  const scissors = document.querySelector("#scissors");
  
  rock.addEventListener('click', playRound);
  paper.addEventListener('click', playRound);
  scissors.addEventListener('click', playRound);
}

game();