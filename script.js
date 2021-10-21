// Return a random object for computer
function computerPlay() {
  const gameElements = ['Rock', 'Paper', 'Scissors'];
  return gameElements[Math.floor((Math.random()* gameElements.length))];
}

// Play a round of game
function playRound(playerSelection, computerSelection) {
  if (playerSelection === 'Rock' && computerSelection === 'Scissors') {
    return "You win! Rock beats Scissors.";
  } else if (playerSelection === 'Scissors' && computerSelection === 'Rock') {
      return "You lose! Rock beats Scissors.";
  } else if (playerSelection === 'Paper' && computerSelection === 'Rock') {
      return "You win! Paper beats Rock.";
  } else if (playerSelection === 'Rock' && computerSelection === 'Paper') {
      return "You lose! Paper beats Rock.";
  } else if (playerSelection === 'Scissors' && computerSelection === 'Paper') {
      return "You win! Scissors beats Paper.";
  } else if (playerSelection === 'Paper' && computerSelection === 'Scissors') {
    return "You lose! Scissors beats Paper.";
  } else {
      return "Please enter a valid object.";
  }
}

const computerSelection = computerPlay();
const playerSelectionOriginal = prompt('Please enter an object.').toLowerCase()
const playerSelection = playerSelectionOriginal.charAt(0).toUpperCase() + playerSelectionOriginal.slice(1);
console.log(playRound(playerSelection, computerSelection));

