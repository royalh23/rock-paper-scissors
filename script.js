// Return a random object for computer
function computerPlay() {
  const gameElements = ['Rock', 'Paper', 'Scissors'];
  return gameElements[Math.floor((Math.random()* gameElements.length))];
}

// Play a round of game
function playRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    return "No one wins. Move on.";
  } else if (playerSelection === 'Rock' && computerSelection === 'Scissors') {
      playerWins = true;
      return "You win! The computer chose Scissors, and Rock beats Scissors.";
  } else if (playerSelection === 'Scissors' && computerSelection === 'Rock') {
      computerWins = true;
      return "You lose! The computer chose Rock, and Rock beats Scissors";
  } else if (playerSelection === 'Paper' && computerSelection === 'Rock') {
      playerWins = true;
      return "You win! The computer chose Rock, and Paper beats Rock.";
  } else if (playerSelection === 'Rock' && computerSelection === 'Paper') {
      computerWins = true;
      return "You lose! The computer chose Paper, and Paper beats Rock.";
  } else if (playerSelection === 'Scissors' && computerSelection === 'Paper') {
      playerWins = true;
      return "You win! The computer chose Paper, and Scissors beats Paper.";
  } else if (playerSelection === 'Paper' && computerSelection === 'Scissors') {
      computerWins = true;
      return "You lose! The computer chose Scissors, and Scissors beats Paper.";
  }
}

function checkWinnerInEachRound() {
  if (playerWins) {
    playerScore++;
  } else if (computerWins) {
    computerScore++;
  }
}

function checkAndAnnounceLastWinner() {
  if (playerScore > computerScore) {
    console.log("Congratulations! You defeated the computer.");
  } else if (playerScore < computerScore) {
      console.log("You lost the game to the computer. Better luck next time!");
  } else {
      console.log("Tie!");
  }
}

// Set a boolean value for the player and computer in each round and their scores
let playerWins = false;
let computerWins = false;
let playerScore = 0;
let computerScore = 0;

// The main function of the game
function game() {
  let counter = 0;
  let canceled = false;
  while (counter < 5) {
    const computerSelection = computerPlay();
    const playerSelectionOriginal = prompt('Please enter an object.');
    
    if (playerSelectionOriginal === null) {
      console.log("You canceled.");
      canceled = true;
      break;
    } else {
        const playerSelection = playerSelectionOriginal.toLowerCase().charAt(0).
            toUpperCase() + playerSelectionOriginal.slice(1);

        if ( !(playerSelection === 'Rock' || playerSelection === 'Scissors' || 
            playerSelection === 'Paper') ) {
          console.log("Please choose a valid object.");
      } else {
          console.log(playRound(playerSelection, computerSelection));
  
          // Add 1 to either player's or computer's score in each round
          checkWinnerInEachRound();

          // Show the scores of the player and computer
          console.log(`Player: ${playerScore}\nComputer: ${computerScore}`);
  
          // Increment the counter
          counter++;

          // Reset the values
          playerWins = false;
          computerWins = false;
      }
    }
  }

  // Compare the scores of the player and computer, then announce the winner
  if (canceled === false) {
    checkAndAnnounceLastWinner();
  }
}

game();