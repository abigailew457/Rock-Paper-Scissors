console.log('Hello World!')
let playerScore = 0;
let computerScore = 0; 

function getComputerChoice() {
    let compChoice = ["rock", "paper", "scissors"];
    let randomChoice = compChoice [Math.floor(Math.random() * compChoice.length)];
    return randomChoice
}

// Play a single round
function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase()

    if (playerSelection === "rock" && computerSelection === "scissors") {
        playerScore++
        alert(`You Win! Rock beats Scissors.
                \nYour score: ${playerScore}\nComputer's score: ${computerScore}`);
    } else if (playerSelection === "rock" && computerSelection === "paper") {
        computerScore++
        alert(`You Lose! Paper beats Rock
                \nYour score: ${playerScore}\nComputer's score: ${computerScore}`);
    } else if (playerSelection === "paper" && computerSelection === "rock") {
        playerScore++
        alert(`You Win! Paper beats Rock
                \nYour score: ${playerScore}\nComputer's score: ${computerScore}`);
    } else if (playerSelection === "paper" && computerSelection === "scissors") {
        computerScore++
        alert(`You Lose! Scissors beats Paper
                \nYour score: ${playerScore}\nComputer's score: ${computerScore}`);
    } else if (playerSelection === "scissors" && computerSelection === "paper") {
        playerScore++
        alert(`You Win! Scissors beats Paper
                \nYour score: ${playerScore}\nComputer's score: ${computerScore}`);
    } else if (playerSelection === "scissors" && computerSelection === "rock") {
        computerScore++
        alert(`You Lose! Rock beats Scissors
                \nYour score: ${playerScore}\nComputer's score: ${computerScore}`);
    } else if (playerSelection === computerSelection) {
        alert(`Draw!
                \nYour score: ${playerScore}\nComputer's score: ${computerScore}`) 
    } else {
        alert("That's not an option you silly goose.")
    }
}    

// make ui 

const container = document.querySelector('#container');

const rock = document.createElement('button');
rock.setAttribute('id', 'rock');
console.log(rock);
container.appendChild(rock); 

const paper = document.createElement('button');
paper.setAttribute('id', 'paper');
console.log(paper);
container.appendChild(paper); 

const scissors = document.createElement('button');
scissors.setAttribute('id', 'scissors');
console.log(scissors);
container.appendChild(scissors); 