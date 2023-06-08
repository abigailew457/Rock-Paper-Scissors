console.log('Hello World!')
function getComputerChoice() {
    let compChoice = ['Rock', 'Paper', 'Scissors']; // Establishes computer choice options
    let randomChoice = Math.floor(Math.random() * compChoice.length) + 1; // Randomizing the chompChoice by creating a random number, multiplying it by the length of the choice, rounding it down, and adding it by 1

    if (randomChoice === 1) {
        return 'Rock';
    }
    if (randomChoice === 2) {
        return 'Paper';
    }
    if (randomChoice === 3) {
        return 'Scissors';
    } // Applying a clear string to the resutling numbers
}
console.log(getComputerChoice())

// Play a single round
function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1).toLowerCase();


    if (playerSelection === "Rock" && computerSelection === "Scissors") {
        return "You Win! Rock beats Scissors";
    } else if (playerSelection === "Rock" && computerSelection === "Paper") {
        return "You Lose! Paper beats Rock";
    } else if (playerSelection === "Paper" && computerSelection === "Rock") {
        return "You Win! Paper beats Rock";
    } else if (playerSelection === "Paper" && computerSelection === "Scissors") {
        return "You Lose! Scissors beats Paper";
    } else if (playerSelection === "Scissors" && computerSelection === "Paper") {
        return "You Win! Scissors beats Paper";
    } else if (playerSelection === "Scissors" && computerSelection === "Rock") {
        return "You Lose! Rock beats Scissors";
    } else {
        return "Draw!"
    }
}

const playerSelection = "Rock";
const computerSelection = getComputerChoice();
console.log(playerSelection)