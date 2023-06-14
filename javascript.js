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
        console.log("You Win! Rock beats Scissors");
    } else if (playerSelection === "rock" && computerSelection === "Paper") {
        console.log("You Lose! Paper beats Rock");
    } else if (playerSelection === "paper" && computerSelection === "Rock") {
        console.log("You Win! Paper beats Rock");
    } else if (playerSelection === "paper" && computerSelection === "Scissors") {
        console.log("You Lose! Scissors beats Paper");
    } else if (playerSelection === "scissors" && computerSelection === "Paper") {
        console.log("You Win! Scissors beats Paper");
    } else if (playerSelection === "scissors" && computerSelection === "Rock") {
        console.log("You Lose! Rock beats Scissors");
    } else {
        console.log("Draw!") 
    }
}
    const playerSelection = selection;
    const computerSelection = getComputerChoice();
    console.log(playRound(playerSelection, computerSelection));
}


console.log(game())