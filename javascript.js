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

    console.log(computerSelection)
    console.log(playerSelection)
}    

// make ui 

const container = document.querySelector('#container');

const rock = document.createElement('button');
rock.setAttribute('id', 'rock');
rock.setAttribute('style', 'height: 40px; width: 100px;');
rock.textContent = 'Rock';
console.log(rock);
container.appendChild(rock); 

const paper = document.createElement('button');
paper.setAttribute('id', 'paper');
paper.setAttribute('style', 'height: 40px; width: 100px;');
paper.textContent = 'Paper';
console.log(paper);
container.appendChild(paper); 

const scissors = document.createElement('button');
scissors.setAttribute('id', 'scissors');
scissors.setAttribute('style', 'height: 40px; width: 100px;');
scissors.textContent = 'Scissors';
console.log(scissors);
container.appendChild(scissors); 

rock.addEventListener('click', () => {
    const playerSelection = 'rock';
    return(playRound());
})
// Doesnt return the correct results
// need to figure out how to add ids to pSelect