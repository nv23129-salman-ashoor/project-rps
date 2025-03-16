// Step 1: Log to check if JavaScript is linked correctly
console.log("Hello World");

// Step 2: Function to get the computer's choice
function getComputerChoice() {
    const randomNumber = Math.random(); // Generates a number between 0 and 1
    if (randomNumber < 0.33) {
        return "rock";
    } else if (randomNumber < 0.66) {
        return "paper";
    } else {
        return "scissors";
    }
}

// Step 3: Function to get the human's choice
function getHumanChoice() {
    const choice = prompt("Enter your choice (rock, paper, or scissors):");
    return choice.toLowerCase(); // Convert input to lowercase for consistency
}

// Step 4: Declare score variables
let humanScore = 0;
let computerScore = 0;

// Step 5: Function to play a single round
function playRound(humanChoice, computerChoice) {
    // Make humanChoice case-insensitive
    humanChoice = humanChoice.toLowerCase();

    if (humanChoice === computerChoice) {
        console.log("It's a tie!");
    } else if (
        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "scissors" && computerChoice === "paper")
    ) {
        console.log(`You win! ${humanChoice.charAt(0).toUpperCase() + humanChoice.slice(1)} beats ${computerChoice}.`);
        humanScore++;
    } else {
        console.log(`You lose! ${computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1)} beats ${humanChoice}.`);
        computerScore++;
    }
}

// Step 6: Function to play the entire game
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
