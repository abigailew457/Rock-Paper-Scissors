console.log('Hello World!')
function getComputerChoice() {
    let compChoice = ["Rock", "Paper", "Scissors"];
    let randomChoice = compChoice [Math.floor(Math.random() * compChoice.length)];
    return randomChoice
}

// Play a single round
    
function game() {
    let selection = prompt ("Enter your choice.");
    
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
    return playRound
}


const playerSelection = "Rock";
const computerSelection = getComputerChoice();
console.log(playerSelection + " - Player")
console.log(computerSelection + " - Computer")