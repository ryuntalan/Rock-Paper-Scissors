function computerPlay() {
  let choice = Math.floor((Math.random() * 3) + 1);

  if (choice === 1) {
  let computerSelection = "rock";
  return computerSelection;
  } else if (choice === 2) {
  let computerSelection = "paper"; 
  return computerSelection;
  } else {
  let computerSelection = "scissor";
  return computerSelection;
  }
  

}
let gameCount = 0;
let comScore = 0;
let playerScore = 0;

function scoreCounter() {
  if (playerScore == 3) {
  alert("YOU BEAT THE COMPUTER! Good Job! Refresh the page to play again!")
  } else if (comScore == 3) {
  alert("Dang, the computer won this game. Refresh the Page and Try again!")
  }

}

function rockChoice() {
  let playerSelection = "rock"
  let computerSelection = computerPlay();
  let results = playRound(playerSelection, computerSelection);
  alert(results);
  gameCount++;
  console.log("Number of games " + gameCount);
  console.log("Player's Score: " + playerScore);
  console.log("Computer's Score: " + comScore);
  scoreCounter();
  
  
}

function paperChoice() {
  let playerSelection = "paper"
  let computerSelection = computerPlay();
  let results = playRound(playerSelection, computerSelection);
  alert(results);
  gameCount++;
  console.log("Number of games " + gameCount);
  console.log("Player's Score: " + playerScore);
  console.log("Computer's Score: " + comScore);
  scoreCounter();
}

function scissorChoice() {
  let playerSelection = "scissor"
  let computerSelection = computerPlay();
  let results = playRound(playerSelection, computerSelection);
  alert(results);
  gameCount++;
  console.log("Number of games " + gameCount);
  console.log("Player's Score: " + playerScore);
  console.log("Computer's Score: " + comScore);
  scoreCounter();
}


function playRound(playerSelection, computerSelection) {
  let results;

  if (playerSelection == "rock" && computerSelection == "rock") {
  let results = "Tie. Computer chose Rock."
  return results;
  } else if (playerSelection == "rock" && computerSelection == "paper"){
  let results = "You Lose. Rock loses to Paper."
  comScore++;
  return results;
  } else if (playerSelection == "rock" && computerSelection == "scissor"){
  let results = "You Win! Rock beats Scissor!"
  playerScore++;
  return results;
  } else if (playerSelection == "paper" && computerSelection == "rock"){
  let results = "You Win! Paper beats Rock!"
  playerScore++;
  return results;
  } else if (playerSelection == "paper" && computerSelection == "paper"){
  let results = "Tie. Computer chose Paper."
  return results;
  } else if (playerSelection == "paper" && computerSelection == "scissor"){
  let results = "You Lose. Paper loses to Scissor."
  comScore++;
  return results;
  } else if (playerSelection == "scissor" && computerSelection == "rock"){
  let results = "You Lose. Scissor loses to Rock."
  comScore++;
  return results;
  } else if (playerSelection == "scissor" && computerSelection == "paper"){
  let results = "You Win! Scissor beats Paper!"
  playerScore++;
  return results;
  } else if (playerSelection == "scissor" && computerSelection == "scissor"){
  let results = "Tie. Computer chose Scissor."
  return results;
  } else {
  let results = "Error"
  return results;
  }



}

