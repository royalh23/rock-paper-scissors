function getComputerChoice() {
  let gameItems = ["Rock", "Paper", "Scissors"];
  // get a random number between 0, 1, and 2. 
  let randomIndexNumber = Math.floor((Math.random() * gameItems.length));
  // then use one of this random numbers as an index to get a random array value
  return gameItems[randomIndexNumber];
}