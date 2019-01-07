let results;
let playerScore = 0;
let comScore = 0;

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

function playRound(playerSelection, computerSelection) {
    if (playerSelection == "rock" && computerSelection == "rock") {
    let results = "Tie. Computer chose Rock."
    return results;
  } else if (playerSelection == "rock" && computerSelection == "paper"){
    let results = "You Lose. Rock loses to Paper."
    comScore ++;
    return results;
  } else if (playerSelection == "rock" && computerSelection == "scissor"){
    let results = "You Win! Rock beats Scissor!"
    playerScore ++;
    return results;
  } else if (playerSelection == "paper" && computerSelection == "rock"){
    playerScore ++;
    let results = "You Win! Paper beats Rock!"
    return results;
  } else if (playerSelection == "paper" && computerSelection == "paper"){
    let results = "Tie. Computer chose Paper."
    return results;
  } else if (playerSelection == "paper" && computerSelection == "scissor"){
    let results = "You Lose. Paper loses to Scissor."
    comScore ++;
    return results;
  } else if (playerSelection == "scissor" && computerSelection == "rock"){
    let results = "You Lose. Scissor loses to Rock."
    comScore ++;
    return results;
  } else if (playerSelection == "scissor" && computerSelection == "paper"){
    playerScore ++;
    let results = "You Win! Scissor beats Paper!"
    return results;
  } else if (playerSelection == "scissor" && computerSelection == "scissor"){
    let results = "Tie. Computer chose Scissor."
    return results;
  } else {
    let results = "Error"
    return results;
  }

}

function createResults(results){
    const gameRes= document.querySelector('#gameRes');
    gameRes.innerHTML = results;
}


function plyScore(playerScore){
    const plyScore = document.querySelector('#plyScore');
    plyScore.innerHTML = playerScore;


}

function compScore(comScore){
    const compScore = document.querySelector('#comScore');
    compScore.innerHTML = comScore;

}

function gameOver(){
    if (comScore == 5){
        const res = document.querySelector('#res');

        const content = document.createElement('h1');
        content.classList.add('content');
        content.textContent = 'You lose. Refresh the page to play again!';

        res.appendChild(content);
        } else if (playerScore == 5) {
            const res = document.querySelector('#res');

            const content = document.createElement('h1');
            content.classList.add('content');
            content.textContent = 'You win! Refresh page to play again!';
    
            res.appendChild(content);
        }
  



}


const rock = document.querySelector('#rock');
rock.addEventListener ('click', () => {
    let results = playRound("rock", computerPlay());
    createResults(results);
    plyScore(playerScore);
    compScore(comScore);
    gameOver();




});

const paper = document.querySelector('#paper');
paper.addEventListener ('click', () => {
    let results = playRound("paper", computerPlay());
    createResults(results);
    plyScore(playerScore);
    compScore(comScore);
    gameOver();

});

const scissors = document.querySelector('#scissors');
scissors.addEventListener ('click', () => {
    let results = playRound("scissor", computerPlay());
    createResults(results);
    plyScore(playerScore);
    compScore(comScore);
    gameOver();
   

});

