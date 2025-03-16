function getComputerChoice() {
    const randomNumber = Math.floor(Math.random() * 3);
    if (randomNumber === 0) return "rock";
    if (randomNumber === 1) return "paper";
    return "scissors";
}
function getHumanChoice() {
    const choice = prompt("Enter your choice (rock, paper, or scissors):");
    return choice.toLowerCase();
}
let humanScore = 0;
let computerScore = 0;
function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        console.log("It's a tie!");
    } else if (
        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "scissors" && computerChoice === "paper")
    ) {
        console.log(`You win! ${humanChoice} beats ${computerChoice}.`);
        humanScore++;
    } else {
        console.log(`You lose! ${computerChoice} beats ${humanChoice}.`);
        computerScore++;
    }
}
function playGame() {
    for (let i = 0; i < 5; i++) {
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);
    }
    console.log(`Final Score: You - ${humanScore}, Computer - ${computerScore}`);
    if (humanScore > computerScore) {
        console.log("Congratulations! You are the overall winner!");
    } else if (humanScore < computerScore) {
        console.log("Sorry! The computer is the overall winner.");
    } else {
        console.log("It's a tie overall!");
    }
}

// Start the game
playGame();
