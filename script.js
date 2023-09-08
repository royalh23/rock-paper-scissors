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

function announceGameResult() {
  if (playerScore > computerScore) {
    console.log("Congratulations! You won the game.");
  } else if (playerScore < computerScore) {
    console.log("Oops :/ You lost the game.");
  } else {
    console.log("No one won! It's a draw.");
  }
}

function game() {
  for (let round = 1; round < 6; round++) {
    // Initialize required variables
    let computerSelection = getComputerChoice();
    let userPrompt;
    if (round === 1) userPrompt = "Welcome to the Rock Paper Scissors game! Hope" + 
                                  " you enjoy it. Make your choice now:";
    else userPrompt = "What's your choice this time?";
    let playerSelection = prompt(userPrompt);

    // Print the result of the round
    console.log(playRound(playerSelection, computerSelection));
    console.log(`Player: ${playerScore}`);
    console.log(`Computer: ${computerScore}`);
  }

  announceGameResult();
}

// Initialize scores of the player and computer
let playerScore = 0;
let computerScore = 0;

game();