const rock = document.querySelector('#rock');
const paper = document.querySelector('#paper');
const scissors = document.querySelector('#scissors');

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

function playRound(playerSelection, computerSelection) {
    console.log(computerSelection)
    if (playerSelection == 'rock') {
        if (computerSelection == 'Rock') {
            console.log("It's a draw!");
        }
        else if (computerSelection == 'Paper') {
            console.log("You lose! Paper beats rock.");
        }
        else if (computerSelection == 'Scissors') {
            console.log("You win! Rock beats scissors.");
        }
    }
    else if (playerSelection == 'paper') {
        if (computerSelection == 'Rock') {
            console.log("You win! Paper beats rock.");
        }
        else if (computerSelection == 'Paper') {
            console.log("It's a draw!");
        }
        else if (computerSelection == 'Scissors') {
            console.log("You lose! Scissors beats paper.");
        }
    }
    else if (playerSelection == 'scissors') {
        if (computerSelection == 'Rock') {
            console.log("You lose! Rock beats scissors.");
        }
        else if (computerSelection == 'Paper') {
            console.log("You win! Scissors beats paper.");
        }
        else if (computerSelection == 'Scissors') {
            console.log("It's a draw!");
        }
    }
}

rock.addEventListener('click', function() {
    playRound('rock', getComputerChoice());
});
paper.addEventListener('click', function() {
    playRound('paper', getComputerChoice());
});
scissors.addEventListener('click', function() {
    playRound('scissors', getComputerChoice());
});