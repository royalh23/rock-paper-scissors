function getComputerChoice() {
  const gameItems = ["Rock", "Paper", "Scissors"];

  // Get a random number between 0, 1, and 2 to use as an index for gameItems
  let randomIndexNumber = Math.floor((Math.random() * gameItems.length));

  return gameItems[randomIndexNumber];
}

function playRound(playerSelection, computerSelection) {
  // Make player's selection case-insensitive
  playerSelection = playerSelection[0].toUpperCase() + playerSelection.toLowerCase().slice(1);

  let roundResult;

  // Play a round
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

  return roundResult;
}

// Initialize scores of the player and computer globally so that they are accessible
// from other functions
let playerScore = 0;
let computerScore = 0;