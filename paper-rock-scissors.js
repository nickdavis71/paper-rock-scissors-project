// Adds functionality to the player selection buttons. Once a button is selected the player 
// selection is returned, the computer selection is generated, and the game score is displayed.
// After five wins by either the player or computer a winner is displayed.

const buttons = document.querySelectorAll('button');
buttons.forEach((button) => {
    button.addEventListener('click',() => {
        printWinner(logScore(playRound(getPlayerSelection(button.id), getComputerChoice())));
    })
});

const selection = document.querySelector('#selection');
const playerSelection = document.createElement('p');
const computerSelection = document.createElement('p');
selection.appendChild(playerSelection);
selection.appendChild(computerSelection);

// Function that stores user's button selection as a string in the variable 'playerSelection'.

function getPlayerSelection(button) {
    if(button === 'paper-button') {
        playerSelection.textContent = 'Player Selected: Paper';
        return 'paper';  
    }
    if(button === 'rock-button') {
        playerSelection.textContent = 'Player Selected: Rock';
        return 'rock';
    }
    if(button === 'scissors-button') {
        playerSelection.textContent = 'Player Selected: Scissors';
        return 'scissors';
    }
}
// Function that generates the computer's random guess as a string in the variable 'computerChoice'.

function getComputerChoice() {

    let computerChoice = Math.floor(Math.random() * 3)

    if (computerChoice === 0) {
        computerSelection.textContent ='Computer Selected: Paper';
        return 'paper';
    }
    else if (computerChoice === 1) {
        computerSelection.textContent ='Computer Selected: Rock';
        return 'rock';
    }
    else if (computerChoice === 2) {
        computerSelection.textContent ='Computer Selected: Scissors';
        return 'scissors';
    }
    else {
        console.log('Computer Selected: error');
        return 'Error';
    }
}

// Function that takes the parameters playerSelection and computerSelection 
// and returns a string declaring the winner of the round or tie.

function playRound (playerSelection, computerSelection) {

    if (playerSelection === 'rock' && computerSelection === 'scissors' ||
        playerSelection === 'paper' && computerSelection === 'rock' ||
        playerSelection === 'scissors' && computerSelection === 'paper') {
        return 'Player wins round';
    }
    else if (playerSelection === computerSelection) {
        return 'Tie';
    }
    else {
        return 'Computer wins round';
    }
}

const score = document.querySelector('#score');
const playerWinLog = document.createElement('p');
const computerWinLog = document.createElement('p');
const tieLog = document.createElement('p');
score.appendChild(playerWinLog);
score.appendChild(computerWinLog);
score.appendChild(tieLog);

let numberOfPlayerWins = 0;
let numberOfComputerWins = 0;
let numberOfTies = 0;

// Function that takes the playRound function as a parameter and tallies the score of the game.

function logScore(roundWinner) {
    
    if (roundWinner === 'Player wins round') {
        playerWinLog.textContent = `Player Wins: ${++numberOfPlayerWins}`;
        return numberOfPlayerWins;
    }
    if (roundWinner === 'Computer wins round') {
        computerWinLog.textContent = `Computer Wins: ${++numberOfComputerWins}`;
        return numberOfComputerWins;
    }
    if (roundWinner === 'Tie') {
        tieLog.textContent = `Ties: ${++numberOfTies}`;
        return numberOfTies;
    }
}

const winner = document.querySelector('#winner');
const gameResult = document.createElement('p')
winner.appendChild(gameResult);

// Function that takes the logScore function as a parameter and prints the overall winner of 
// the game.

function printWinner (numberOfWins) {

    if (numberOfPlayerWins >= 5) {
        gameResult.textContent ='YOU WON!!';
    }
    else if (numberOfComputerWins >= 5){ 
        gameResult.textContent ='YOU LOST.';
    }
}

