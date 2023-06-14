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
        alert("You Win! Rock beats Scissors");
    } else if (playerSelection === "rock" && computerSelection === "Paper") {
        alert("You Lose! Paper beats Rock");
    } else if (playerSelection === "paper" && computerSelection === "Rock") {
        alert("You Win! Paper beats Rock");
    } else if (playerSelection === "paper" && computerSelection === "Scissors") {
        alert("You Lose! Scissors beats Paper");
    } else if (playerSelection === "scissors" && computerSelection === "Paper") {
        alert("You Win! Scissors beats Paper");
    } else if (playerSelection === "scissors" && computerSelection === "Rock") {
        alert("You Lose! Rock beats Scissors.");
    } else {
        alert("Draw!") 
    }
}

    const playerSelection = selection;
    const computerSelection = getComputerChoice();
    console.log(playRound(playerSelection, computerSelection));
}


console.log(game())
// loop the game 5 times; 