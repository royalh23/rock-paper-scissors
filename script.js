function getComputerChoice() {
  const gameItems = ["Rock", "Paper", "Scissors"];

  // Get a random number between 0, 1, and 2
  let randomIndexNumber = Math.floor((Math.random() * gameItems.length));

  // Then use one of this random numbers as an index to get a random array value
  return gameItems[randomIndexNumber];
}

function playRound(playerSelection, computerSelection) {
  // Make player's selection case-insensitive
  playerSelection = playerSelection[0].toUpperCase() + playerSelection.toLowerCase().slice(1);

  let gameResult;

  // Play a round
  if (playerSelection === "Rock" && computerSelection === "Paper") {  
    gameResult = "You lose! Paper beats Rock.";
  } else if (playerSelection === "Rock" && computerSelection === "Scissors") {
    gameResult = "You win! Rock beats Scissors.";
  } else if (playerSelection === "Rock" && computerSelection === "Rock") {
    gameResult = "No one wins! Rock vs Rock is a tie.";
  } else if (playerSelection === "Paper" && computerSelection === "Rock") {
    gameResult = "You win! Paper beats Rock.";
  } else if (playerSelection === "Paper" && computerSelection === "Scissors") {
    gameResult = "You lose! Scissors beats Paper.";
  } else if (playerSelection === "Paper" && computerSelection === "Paper") {
    gameResult = "No one wins! Paper vs Paper is a tie.";
  } else if (playerSelection === "Scissors" && computerSelection === "Rock") {
    gameResult = "You lose! Rock beats Scissors.";
  } else if (playerSelection === "Scissors" && computerSelection === "Paper") {
    gameResult = "You win! Scissors beats Paper.";
  } else if (playerSelection === "Scissors" && computerSelection === "Scissors") {
    gameResult = "No one wins! Scissors vs Scissors is a tie.";
  }

  return gameResult;
}

function game() {
  
}