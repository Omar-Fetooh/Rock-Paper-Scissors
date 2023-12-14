function getComputerChoice() {
    let choice = Math.random();
    if (choice < 0.33) return 'Rock'
    else if (choice < 0.66) return 'Paper'
    else return 'Scissors';
}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();
    //To make sure that inputs are case insensitive ......
    if (playerSelection === computerSelection) {
        return 'It is a tie, you choosed the same as computer'
    }
    else if (computerSelection === 'rock') {
        if (playerSelection === 'paper') {
            return 'You Won! paper beats rock';
        }
        else {
            return 'You lost! paper is beaten by scissors'
        }
    }
    else if (computerSelection === 'paper') {
        if (playerSelection === 'rock') {
            return 'You lost! rock is beaten by paper';
        }
        else {
            return 'You Won!Scissors beats paper '
        }
    }
    else if (computerSelection === 'scissors') {
        if (playerSelection === 'rock') {
            return 'You Won! rock beats scissors'
        }
        else {
            return 'You Lost! paper is beaten by scissors'
        }
    }
}