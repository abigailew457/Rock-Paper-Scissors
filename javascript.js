console.log('Hello World!')
function getComputerChoice() {
    let compChoice = ["rock", "paper", "scissors"];
    let randomChoice = compChoice [Math.floor(Math.random() * compChoice.length)];
    return randomChoice
}

// Play a single round
function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase()

    if (playerSelection === "rock" && computerSelection === "scissors") {
        alert("You Win! Rock beats Scissors");
    } else if (playerSelection === "rock" && computerSelection === "paper") {
        alert("You Lose! Paper beats Rock");
    } else if (playerSelection === "paper" && computerSelection === "rock") {
        alert("You Win! Paper beats Rock");
    } else if (playerSelection === "paper" && computerSelection === "scissors") {
        alert("You Lose! Scissors beats Paper");
    } else if (playerSelection === "scissors" && computerSelection === "paper") {
        alert("You Win! Scissors beats Paper");
    } else if (playerSelection === "scissors" && computerSelection === "rock") {
        alert("You Lose! Rock beats Scissors.");
    } else if (playerSelection === computerSelection) {
        alert("Draw!") 
    } else {
        alert("That's not an option you silly goose.")
    }
}    

// Play a 5 match game
function game() {
    
    for (let i = 0; i < 5; i++) {
        let selection = prompt("Enter your choice.")
        const playerSelection = selection
        const computerSelection = getComputerChoice();
        console.log(playRound(playerSelection, computerSelection))
    }
}

game()

// edit messages to show; each players choice, result statement
// Your answer: ${playerSelection}  Computer's answer: ${computerSelection}
// You (win/lose)! (selection1) beats (selection2).
// show running score total

// Add a scoring system
// Establish a let scoring system for comp. and play. starting at 0
// add a point to each winner