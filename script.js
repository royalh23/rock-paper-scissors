function getComputerChoice() {
  let gameItems = ["Rock", "Paper", "Scissors"];

  // Get a random number between 0, 1, and 2
  let randomIndexNumber = Math.floor((Math.random() * gameItems.length));

  // Then use one of this random numbers as an index to get a random array value
  return gameItems[randomIndexNumber];
}

function playRound(playerSelection, computerSelection) {
  // Capitalize the first letter of player's selection
  playerSelection = playerSelection[0].toUpperCase() + playerSelection.toLowerCase().slice(1);

  
}