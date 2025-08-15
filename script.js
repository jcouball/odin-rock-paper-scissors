function getComputerChoice() {
  const choices = ['rock', 'paper', 'scissors'];
  const randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
}

function getHumanChoice(round) {
  return window.prompt(`Round ${round}. Please enter rock, paper, or scissors: `);
}

function whoWonRound(humanChoice, computerChoice) {
  return humanChoice === computerChoice ? 'tie' :
    (humanChoice === 'rock' && computerChoice === 'scissors') ||
    (humanChoice === 'paper' && computerChoice === 'rock') ||
    (humanChoice === 'scissors' && computerChoice === 'paper') ? 'human' : 'computer';
}

function whoWonGame() {
  if (humanScore == winningScore) {
    return "human";
  }
  else if (computerScore == winningScore) {
    return "computer";
  }
  return "noone";
}

function playRound(humanChoice) {
  humanChoice = humanChoice.toLowerCase();
  let computerChoice = getComputerChoice();

  switch (whoWonRound(humanChoice, computerChoice)) {
    case 'human':
      humanScore++;
      resultElement.textContent = `You win this round! ${humanChoice} beats ${computerChoice}.`;
      humanScoreElement.textContent = humanScore;
      break;
    case 'computer':
      computerScore++;
      resultElement.textContent = `You lost this round! ${computerChoice} beats ${humanChoice}.`;
      computerScoreElement.textContent = computerScore;
      break;
    default:
      resultElement.textContent = `It's a tie! Both chose ${humanChoice}.`;
  }

  round++;
  roundElement.textContent = round;

  switch (whoWonGame()) {
    case "human":
      gameResultElement.textContent = "YOU WON THE GAME!!!";
      movesElement.style.display = "none";
      break;
    case "computer":
      gameResultElement.textContent = "THE COMPUTER WON THE GAME!!!";
      movesElement.style.display = "none";
      break;
  }
}

function resetGame() {
  round = 1;
  humanScore = 0;
  computerScore = 0;

  winningScoreElement.textContent = winningScore;
  roundElement.textContent = round;
  humanScoreElement.textContent = humanScore;
  computerScoreElement.textContent = computerScore;
  resultElement.textContent = "";
  movesElement.style.display = "block";
  gameResultElement.textContent = "";
}

let winningScore = 5;

let round = 1;
let computerScore = 0;
let humanScore = 0;

let movesElement = document.querySelector("#moves");
let winningScoreElement = document.querySelector("#winningScore");
let roundElement = document.querySelector("#round");
let humanScoreElement = document.querySelector("#humanScore")
let computerScoreElement = document.querySelector("#computerScore")
let resultElement = document.querySelector("#result");
let gameResultElement = document.querySelector("#gameResult");

resetGame();
