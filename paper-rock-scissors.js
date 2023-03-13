const buttons = document.querySelectorAll('button');
buttons.forEach((button) => {
    button.addEventListener('click',() => getPlayerSelection(button.id));
});

// Function that stores user input as a string in the variable 'playerSelection'.
function getPlayerSelection(button) {
   console.log(button)
    let playerSelection = '';
    if(button === '1')
        return playerSelection = 'paper';
    if(button === '2')
        return playerSelection = 'rock';
    if(button === '3')
        return playerSelection = 'scissors';
 //   let playerSelection = prompt('Please enter your selection: Paper Rock or Scissors','');
 //   playerSelection = playerSelection.toLowerCase();
 //   console.log("Player Selected: " + playerSelection);
 //   return playerSelection;   
}

// Function that generates the computer's random guess as a string in the variable 'computerChoice'.
function getComputerChoice() {

    let computerChoice = Math.floor(Math.random() * 3)

    if (computerChoice === 0) {
        console.log('Computer Selected: paper');
        let computerSelection = 'paper';
        return computerSelection;
    }
    else if (computerChoice === 1) {
        console.log('Computer Selected: rock');
        let computerSelection = 'rock';
        return computerSelection;
    }
    else if (computerChoice === 2) {
        console.log('Computer Selected: scissors');
        let computerSelection = 'scissors'
        return computerSelection;
    }
    else {
        console.log('Computer Selected: error');
        return 'Error';
    }
}

// Function that takes the parameters playerSelection and computerSelection 
// and returns a string declaring the winner of the round or replays the round if a tie.
function playRound (playerSelection, computerSelection) {

    if (playerSelection === 'rock' && computerSelection === 'scissors' ||
        playerSelection === 'paper' && computerSelection === 'rock' ||
        playerSelection === 'scissors' && computerSelection === 'paper') {
        console.log('Player wins round');
        return 'Player wins round';
        
    }
    else if (playerSelection === computerSelection) {
        console.log ('Tie');
        return playRound (getPlayerSelection(),getComputerChoice());
    }
    else {
        console.log('Computer wins round');
        return 'Computer wins round';
    }
}

// Function that repeats the playRound function for 5 rounds and returns the variable 
// 'numberOfPlayerWins' with the number of player wins.
function game () {

    let numberOfPlayerWins = 0
    let numberOfComputerWins = 0

    for (let i = 0; i < 5; i++) {

        if (playRound(getPlayerSelection(), getComputerChoice()) === 'Player wins round') {
            console.log(++numberOfPlayerWins);
        }
        else {
            console.log(++numberOfComputerWins);
        }
    }
    return ++numberOfPlayerWins;
}

// Function that takes the parameter 'numberOfPlayerWins' and determines the overall winner of the game.
function printWinner (numberOfPlayerWins) {

    if (numberOfPlayerWins >= 5) {
        console.log ('YOU WON!!')
    }
    else { 
        console.log('YOU LOST.')
    }
}

printWinner(game());

