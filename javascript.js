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
