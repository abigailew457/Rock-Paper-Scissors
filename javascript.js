console.log('Hello World!')
function getComputerChoice() {
    let compChoice = ["Rock", "Paper", "Scissors"]; // Establishes computer choice options
    let randomChoice = Math.floor(Math.random() * compChoice.length) + 1; // Randomizing the chompChoice by creating a random number, multiplying it by the length of the choice, rounding it down, and adding it by 1

    if (randomChoice === 1) {
        return "Rock";
    }
    if (randomChoice === 2) {
        return "Paper";
    }
    if (randomChoice === 3) {
        return "Scissors";
    } // Applying a clear string to the resulting numbers
}
console.log(getComputerChoice())

// Play a single round
function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase()


    if (playerSelection === "rock" && computerSelection === "Scissors") {
        return "You Win! Rock beats Scissors";
    } else if (playerSelection === "rock" && computerSelection === "Paper") {
        return "You Lose! Paper beats Rock";
    } else if (playerSelection === "paper" && computerSelection === "Rock") {
        return "You Win! Paper beats Rock";
    } else if (playerSelection === "paper" && computerSelection === "Scissors") {
        return "You Lose! Scissors beats Paper";
    } else if (playerSelection === "scissors" && computerSelection === "Paper") {
        return "You Win! Scissors beats Paper";
    } else if (playerSelection === "scissors" && computerSelection === "Rock") {
        return "You Lose! Rock beats Scissors";
    } else {
        return "Draw!"
    }
}

const playerSelection = "Rock";
const computerSelection = getComputerChoice();
console.log(playerSelection)

// Returns the wrong statment everytime
// test c.Selection under each if to see if the computer choice is the problem 