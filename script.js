// Return a random object for computer
function computerPlay() {
  const gameElements = ['rock', 'paper', 'scissors'];
  return gameElements[Math.floor((Math.random()* gameElements.length))];
}

// Play a round of game
function playRound(e) {
  let playerSelection = e.target.getAttribute('id');
  let computerSelection = computerPlay();

  if (playerSelection === computerSelection) {
    console.log("No one wins. Move on.");
  } else if (playerSelection === 'rock' && computerSelection === 'scissors') {
      playerWins = true;
      console.log("You win! The computer chose Scissors, and Rock beats Scissors.");
  } else if (playerSelection === 'scissors' && computerSelection === 'rock') {
      computerWins = true;
      console.log("You lose! The computer chose Rock, and Rock beats Scissors");
  } else if (playerSelection === 'paper' && computerSelection === 'rock') {
      playerWins = true;
      console.log("You win! The computer chose Rock, and Paper beats Rock.");
  } else if (playerSelection === 'rock' && computerSelection === 'paper') {
      computerWins = true;
      console.log("You lose! The computer chose Paper, and Paper beats Rock.");
  } else if (playerSelection === 'scissors' && computerSelection === 'paper') {
      playerWins = true;
      console.log("You win! The computer chose Paper, and Scissors beats Paper.");
  } else if (playerSelection === 'paper' && computerSelection === 'scissors') {
      computerWins = true;
      console.log("You lose! The computer chose Scissors, and Scissors beats Paper.");
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
  while (counter < 5) {
    
    const rock = document.querySelector("#rock");
    const paper = document.querySelector("#paper");
    const scissors = document.querySelector("#scissors");
    
    rock.addEventListener('click', playRound);
    paper.addEventListener('click', playRound);
    scissors.addEventListener('click', playRound);

    break;
          
    // Add 1 to either player's or computer's score in each round
    /* checkWinnerInEachRound();

    // Show the scores of the player and computer
    console.log(`Player: ${playerScore}\nComputer: ${computerScore}`);

    // Increment the counter
    counter++;

    // Reset the values
    playerWins = false;
    computerWins = false;
    */
    
  }

  // Compare the scores of the player and computer, then announce the winner
  // checkAndAnnounceLastWinner();
}

game();