console.log('Hello World!')
function getComputerChoice() {
    let compChoice = ['Rock', 'Paper', 'Scissors'];
    let randomChoice = Math.floor(Math.random() * compChoice.length) + 1;

    if (randomChoice === 1) {
        return 'Rock';
    }
    if (randomChoice === 2) {
        return 'Paper';
    }
    if (randomChoice === 3) {
        return 'Scissors';
    }
}