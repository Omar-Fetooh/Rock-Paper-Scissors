let playerScore = 0, computerScore = 0;
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
            ++playerScore;
            return 'You Won! paper beats rock';
        }
        else {
            ++computerScore;
            return 'You lost! paper is beaten by scissors'
        }
    }
    else if (computerSelection === 'paper') {
        if (playerSelection === 'rock') {
            ++computerScore;
            return 'You lost! rock is beaten by paper';
        }
        else {
            ++playerScore;
            return 'You Won!Scissors beats paper '
        }
    }
    else if (computerSelection === 'scissors') {
        if (playerSelection === 'rock') {
            ++playerScore;
            return 'You Won! rock beats scissors'
        }
        else {
            ++computerScore;
            return 'You Lost! paper is beaten by scissors'
        }
    }
}

function game() {

    while (playerScore < 5 && computerScore < 5) {
        let playerSelection = prompt("Enter your selection : ");
        let computerSelection = getComputerChoice();
        console.log(playRound(playerSelection, computerSelection));
        console.log(`player Score = ${playerScore} , ComputerScore=${computerScore}`)
    }
}