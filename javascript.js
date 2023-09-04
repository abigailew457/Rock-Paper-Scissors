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
    computerSelection = getComputerChoice();

    if (playerSelection === "rock" && computerSelection === "scissors") {
        playerScore++
        results.textContent = `You Win! Rock beats Scissors
                \nYour score: ${playerScore} Computer's score: ${computerScore}`;
    } else if (playerSelection === "rock" && computerSelection === "paper") {
        computerScore++
        results.textContent = `You Lose! Paper beats Rock
                \nYour score: ${playerScore}\nComputer's score: ${computerScore}`;
    } else if (playerSelection === "paper" && computerSelection === "rock") {
        playerScore++
        results.textContent = `You Win! Paper beats Rock
                \nYour score: ${playerScore}\nComputer's score: ${computerScore}`;
    } else if (playerSelection === "paper" && computerSelection === "scissors") {
        computerScore++
        results.textContent = `You Lose! Scissors beats Paper
                \nYour score: ${playerScore}\nComputer's score: ${computerScore}`;
    } else if (playerSelection === "scissors" && computerSelection === "paper") {
        playerScore++
        results.textContent = `You Win! Scissors beats Paper
                \nYour score: ${playerScore}\nComputer's score: ${computerScore}`;
    } else if (playerSelection === "scissors" && computerSelection === "rock") {
        computerScore++
        results.textContent = `You Lose! Rock beats Scissors
                \nYour score: ${playerScore}Computer's score: ${computerScore}`;
    } else if (playerSelection === computerSelection) {
        results.textContent = `Draw!
                \nYour score: ${playerScore}\nComputer's score: ${computerScore}` 
    };
    
    if (playerScore === 5) {
        results.textContent = `Congrates! You're smarter then a computer.
        \nYour score: ${playerScore}\nComputer's score: ${computerScore}`;  
    } else if (computerScore === 5) {
        results.textContent = `Yicks! Outsmarted by a generator...
        \nYour score: ${playerScore}\nComputer's score: ${computerScore}`;
    };
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

const buttons = document.querySelectorAll('button');
buttons.forEach((button) => {
    button.addEventListener('click', () => {
        if (button.id === 'rock') {
            return(playRound('rock'));
        } else if (button.id === 'paper') {
            return(playRound('paper'));
        } else if (button.id === 'scissors'); {
            return(playRound('scissors'));
        }
      });
});

container.setAttribute('style', 'position: fixed; top: 50%; left: 50%;')

const results = document.createElement('div');
results.setAttribute('id', 'results');
results.setAttribute('style', 'border: 2px solid pink; height: 80px; width: 296px; display: flex; margin-top: 25px');
console.log(results);
container.appendChild(results);

//Make game stop when either player reaches 5pts