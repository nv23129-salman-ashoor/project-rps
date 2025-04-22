// Function to choose the computer's choice
function getComputerChoice() {
    const randomNumber = Math.random(); 
    if (randomNumber < 0.33) {
        return "rock";
    } else if (randomNumber < 0.66) {
        return "paper";
    } else {
        return "scissors";
    }
}

// Function to choose the human's choice
function getHumanChoice() {
    const choice = prompt("Choose one: rock, paper, or scissors:");
    return choice.toLowerCase(); // Convert input to lowercase for consistency
}

// Initialize the score variables
let humanScore = 0;
let computerScore = 0;

// Function to play a single round
function playRound(humanChoice, computerChoice) {
    // Make humanChoice case-insensitive
    humanChoice = humanChoice.toLowerCase();

    console.log(`Computer Choice: ${computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1)}`);
    console.log(`Human Choice: ${humanChoice.charAt(0).toUpperCase() + humanChoice.slice(1)}`);

    if (humanChoice === computerChoice) {
        console.log("Result: It's a tie!");
    } else if (
        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "scissors" && computerChoice === "paper")
    ) {
        console.log(`Result: You win! ${humanChoice.charAt(0).toUpperCase() + humanChoice.slice(1)} beats ${computerChoice}.`);
        humanScore++;
    } else {
        console.log(`Result: You lose! ${computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1)} beats ${humanChoice}.`);
        computerScore++;
    }

    // Log the current scores
    console.log(`Scores: Human: ${humanScore}, Computer: ${computerScore}`);
    console.log(''); // Add a blank line for better readability
}



    // Final score display
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
