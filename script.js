let computerScore = 0;
let humanScore = 0;

function getComputerChoice() {
  const choices = ['rock', 'paper', 'scissors'];
  const randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
}

function getHumanChoice(round) {
  return window.prompt(`Round ${round}. Please enter rock, paper, or scissors: `);
}

function whoWon(humanChoice, computerChoice) {
  return humanChoice === computerChoice ? 'tie' :
    (humanChoice === 'rock' && computerChoice === 'scissors') ||
    (humanChoice === 'paper' && computerChoice === 'rock') ||
    (humanChoice === 'scissors' && computerChoice === 'paper') ? 'human' : 'computer';
}

function playRound(humanChoice, computerChoice) {
  humanChoice = humanChoice.toLowerCase();
  computerChoice = computerChoice.toLowerCase();

  switch (whoWon(humanChoice, computerChoice)) {
    case 'human':
      humanScore++;
      console.log(`You win! ${humanChoice} beats ${computerChoice}.`);
      break;
    case 'computer':
      computerScore++;
      console.log(`You lose! ${computerChoice} beats ${humanChoice}.`);
      break;
    default:
      console.log(`It's a tie! Both chose ${humanChoice}.`);
  }
}

let rounds = 5;

function playGame() {
  console.log(`Starting a game of Rock, Paper, Scissors with ${rounds} rounds.`);

  for (let round = 1; round <= rounds; round++) {
    playRound(getHumanChoice(round), getComputerChoice());
    console.log(`Score after ${round} of ${rounds} rounds: You ${humanScore} - Computer ${computerScore}`);
  }

  console.log(`Final Score: You ${humanScore} - Computer ${computerScore}`);

  if (humanScore > computerScore) {
    console.log("Congratulations! You are the overall winner!");
  } else if (humanScore < computerScore) {
    console.log("Sorry! The computer is the overall winner.");
  } else {
    console.log("It's a tie!");
  }
}

playGame();
