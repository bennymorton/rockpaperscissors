function game() {
    for (let i = 0; i < 5; i++) {
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
        
    const userSelection = window.prompt("Rock, paper, scissors, go!")
    let userSelectionLower = userSelection.toLowerCase();
    let computerSelection = getComputerChoice();
    
    console.log(playRound(userSelectionLower, computerSelection))
    }
}
function playRound(playerSelection, computerSelection) {
    if (playerSelection == 'rock') {
        if (computerSelection == 'Rock') {
            return "It's a draw!";
        }
        else if (computerSelection == 'Paper') {
            return "You lose! Paper beats rock.";
        }
        else if (computerSelection == 'Scissors') {
            return "You win! Rock beats scissors.";
        }
    }
    else if (playerSelection == 'paper') {
        if (computerSelection == 'Rock') {
            return "You win! Paper beats rock.";
        }
        else if (computerSelection == 'Paper') {
            return "It's a draw!";
        }
        else if (computerSelection == 'Scissors') {
            return "You lose! Scissors beats paper.";
        }
    }
    else if (playerSelection == 'scissors') {
        if (computerSelection == 'Rock') {
            return "You lose! Rock beats scissors.";
        }
        else if (computerSelection == 'Paper') {
            return "You win! Scissors beats paper.";
        }
        else if (computerSelection == 'Scissors') {
            return "It's a draw!";
        }
    }
}