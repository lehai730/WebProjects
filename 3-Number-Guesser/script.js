let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:
const generateTarget = () => {
    return Math.floor(Math.random()*10);
};

const compareGuesses = (human, computer, target) => {
    if (Math.abs(target-human) === Math.abs(target-computer)) {
        return true;
    } else if (Math.abs(target - human) > Math.abs(target - computer)) {
        return false;
    } else {
        return true;
    }
};

const updateScore = winner => {
    if (winner === 'human') {
        humanScore++;
    } else if (winner === 'computer') {
        computerScore++;
    } else {
        console.log('updateScore have wrong input');
    }
}

const advanceRound = () => currentRoundNumber++;
console.log(generateTarget());