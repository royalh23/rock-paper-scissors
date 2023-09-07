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
    gameResult = "You lose! The computer chose Paper, and Paper beats Rock.";
  } else if (playerSelection === "Rock" && computerSelection === "Scissors") {
    gameResult = "You win! The computer chose Scissors, and Rock beats Scissors.";
  } else if (playerSelection === "Rock" && computerSelection === "Rock") {
    gameResult = "No one wins! The computer chose Rock, and Rock vs Rock is a tie.";
  } else if (playerSelection === "Paper" && computerSelection === "Rock") {
    gameResult = "You win! The computer chose Rock, and Paper beats Rock.";
  } else if (playerSelection === "Paper" && computerSelection === "Scissors") {
    gameResult = "You lose! The computer chose Scissors, and Scissors beats Paper.";
  } else if (playerSelection === "Paper" && computerSelection === "Paper") {
    gameResult = "No one wins! The computer chose Paper, and Paper vs Paper is a tie.";
  } else if (playerSelection === "Scissors" && computerSelection === "Rock") {
    gameResult = "You lose! The computer chose Rock, and Rock beats Scissors.";
  } else if (playerSelection === "Scissors" && computerSelection === "Paper") {
    gameResult = "You win! The computer chose Paper, and Scissors beats Paper.";
  } else if (playerSelection === "Scissors" && computerSelection === "Scissors") {
    gameResult = "No one wins! The computer chose Scissors, and Scissors vs Scissors is a tie.";
  }

  return gameResult;
}

function game() {
  for (let round = 1; round < 6; round++) {
    // Initialize required variables
    let playerScore = 0;
    let computerScore = 0;
    let computerSelection = getComputerChoice();
    let userPrompt;
    if (round === 1) userPrompt = "Welcome to the Rock Paper Scissors game! Hope you enjoy it. Make your choice now:";
    else userPrompt = "What's your choice this time?";
    let playerSelection = prompt(userPrompt);

    console.log(playRound(playerSelection, computerSelection));
  }
}

game();