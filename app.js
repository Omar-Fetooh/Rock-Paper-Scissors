let playerScore = 0, computerScore = 0;
let RockButton = document.querySelector('.Rock')
let PaperButton = document.querySelector('.Paper')
let ScissorsButton = document.querySelector('.Scissors')
let resText = document.querySelector('.resText')
let result = document.querySelector('.result');
let FinalResult = document.querySelector('.FinalResult')
let selections = document.querySelector('.selections')
let playerDisplay = document.querySelector('#player')
let computerDisplay = document.querySelector('#computer')
let body = document.querySelector('body')

function disableButtons() {
    RockButton.disabled = true;
    PaperButton.disabled = true;
    ScissorsButton.disabled = true;
}

function checkFinish() {
    if (playerScore >= 5 || computerScore >= 5) {
        disableButtons()
        if (playerScore === 5) {
            console.log(`Congratulations , You Won ! final result : player Score: ${playerScore}, computer Score: ${computerScore}`);
            FinalResult.style.color = 'green'
            FinalResult.textContent = `Congratulations , You Won ! final result : player Score: ${playerScore}, computer Score: ${computerScore}`

        }
        else {
            console.log(`sorry, You Lost ! final result : player Score: ${playerScore}, computer Score: ${computerScore}`);
            FinalResult.style.color = 'red'
            FinalResult.textContent = `sorry, You Lost ! final result : player Score: ${playerScore}, computer Score: ${computerScore}`
        }
    }
}

RockButton.addEventListener('click', () => playRound('Rock', getComputerChoice()))
PaperButton.addEventListener('click', () => playRound('Paper', getComputerChoice()))
ScissorsButton.addEventListener('click', () => playRound('Scissors', getComputerChoice()))


function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();
    // selections.style.display = 'block';
    // screen.style.display = 'block';
    if (playerSelection === computerSelection) {
        console.log('It is a tie, you choosed the same as computer')
        resText.textContent = 'It is a tie, you choosed the same as computer';
        resText.style.color = 'black'
        result.innerText = `player Score: ${playerScore}, computer Score: ${computerScore}`;
    }
    else if (computerSelection === 'rock') {
        if (playerSelection === 'paper') {
            ++playerScore;
            console.log('You Won! paper beats rock');
            resText.textContent = 'You Won! paper beats rock'
            resText.style.color = 'green';
            result.innerText = `player Score: ${playerScore}, computer Score: ${computerScore}`;
        }
        else {
            ++computerScore;
            console.log('You lost! scissors is beaten by rock')
            resText.textContent = 'You lost! scissors is beaten by rock'
            resText.style.color = 'red'
            result.innerText = `player Score: ${playerScore}, computer Score: ${computerScore}`;
        }
    }
    else if (computerSelection === 'paper') {
        if (playerSelection === 'rock') {
            ++computerScore;
            console.log('You lost! rock is beaten by paper');
            resText.textContent = 'You lost! rock is beaten by paper'
            resText.style.color = 'red'
            result.innerText = `player Score: ${playerScore}, computer Score: ${computerScore}`;
        }
        else {
            ++playerScore;
            console.log('You Won! Scissors beats paper ')
            resText.textContent = 'You Won! Scissors beats paper '
            resText.style.color = 'green';
            result.innerText = `player Score: ${playerScore}, computer Score: ${computerScore}`;
        }
    }
    else if (computerSelection === 'scissors') {
        if (playerSelection === 'rock') {
            ++playerScore;
            console.log('You Won! rock beats scissors')
            resText.textContent = 'You Won! rock beats scissors'
            resText.style.color = 'green';
            result.innerText = `player Score: ${playerScore}, computer Score: ${computerScore}`;
        }
        else {
            ++computerScore;
            console.log('You Lost! paper is beaten by scissors')
            resText.textContent = 'You Lost! paper is beaten by scissors'
            resText.style.color = 'red'
            result.innerText = `player Score: ${playerScore}, computer Score: ${computerScore}`;
        }
    }
    playerDisplay.textContent = `Player Selection: ${playerSelection}`
    computerDisplay.textContent = `Computer Selection: ${computerSelection}`

    checkFinish()
}

function getComputerChoice() {
    let choice = Math.random();
    if (choice < 0.33) return 'Rock'
    else if (choice < 0.66) return 'Paper'
    else return 'Scissors';
}

