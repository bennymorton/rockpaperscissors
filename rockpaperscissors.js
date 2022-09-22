const rock = document.querySelector('#rock');
const paper = document.querySelector('#paper');
const scissors = document.querySelector('#scissors');
const results = document.querySelector('#results');
const score = document.querySelector('#score');

function getComputerChoice() {
    x = Math.floor(Math.random() * 3);
    if (x == 0){
        return "Rock";
    } else if (x == 1){
        return "Paper";
    } else if (x == 2) {
        return "Scissors";
    }
}
let userScore = 0;
let computerScore = 0;

let computerWon = false;
let userWon = false;

if (computerScore > 5) {
    computerWon = True;
    alert('Game over! The computer won!');
    computerScore = 0;
    userScore = 0;
}
else if (userScore > 5) {
    userWon = True;
    alert('Game over! You won!');
    computerScore = 0;
    userScore = 0;
} 
else {
    rock.addEventListener('click', function() {
        results.textContent = playRound('rock', getComputerChoice());
        score.textContent = `Computer: ${computerScore}, User: ${userScore}`;
    });
    paper.addEventListener('click', function() {
        results.textContent = playRound('paper', getComputerChoice());
        score.textContent = `Computer: ${computerScore}, User: ${userScore}`;
    });
    scissors.addEventListener('click', function() {
        results.textContent = playRound('scissors', getComputerChoice());
        score.textContent = `Computer: ${computerScore}, User: ${userScore}`;
    });
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection == 'rock') {
        if (computerSelection == 'Rock') {
            return ("Rock! It's a draw!");
        }
        else if (computerSelection == 'Paper') {
            computerScore += 1;
            return ("Paper! You lose! Paper beats rock.");
        }
        else if (computerSelection == 'Scissors') {
            userScore += 1;
            return ("Scissors! You win! Rock beats scissors.");
        }
    }
    else if (playerSelection == 'paper') {
        if (computerSelection == 'Rock') {
            userScore += 1;
            return ("Rock! You win! Paper beats rock.");
        }
        else if (computerSelection == 'Paper') {
            return ("Paper! It's a draw!");
        }
        else if (computerSelection == 'Scissors') {
            computerScore += 1;
            return ("Scissors! You lose! Scissors beats paper.");
        }
    }
    else if (playerSelection == 'scissors') {
        if (computerSelection == 'Rock') {
            computerScore += 1;
            return ("Rock! You lose! Rock beats scissors.");
        }
        else if (computerSelection == 'Paper') {
            userScore += 1;
            return ("Paper! You win! Scissors beats paper.");
        }
        else if (computerSelection == 'Scissors') {
            return ("Scissors! It's a draw!");
        }
    }
}