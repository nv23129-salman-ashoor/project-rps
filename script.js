// Initialize scores
let playerScore = 0;
let computerScore = 0;

// Function to get computer's choice
function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

// Function to determine the winner of a round
function determineWinner(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return "It's a tie!";
    } else if (
        (playerSelection === "rock" && computerSelection === "scissors") ||
        (playerSelection === "paper" && computerSelection === "rock") ||
        (playerSelection === "scissors" && computerSelection === "paper")
    ) {
        playerScore++;
        return `You win! ${playerSelection} beats ${computerSelection}.`;
    } else {
        computerScore++;
        return `You lose! ${computerSelection} beats ${playerSelection}.`;
    }
}

// Function to reset the game
function resetGame() {
    playerScore = 0;
    computerScore = 0;
    updateScore();
}

// Function to update the score display
function updateScore() {
    const scoreDiv = document.getElementById("score");
    scoreDiv.textContent = `Current Score: Player - ${playerScore}, Computer - ${computerScore}`;
}

// Function to play a round
function playRound(playerSelection) {
    const computerSelection = getComputerChoice();
    const result = determineWinner(playerSelection, computerSelection);

    const resultDiv = document.getElementById("result");
    resultDiv.textContent = result; // Update with actual result
    updateScore(); // Update the score display

    // Check for a winner
    if (playerScore === 5) {
        alert("Player wins the game!");
        resetGame();
    } else if (computerScore === 5) {
        alert("Computer wins the game!");
        resetGame();
    }
}

// Add event listeners to buttons
document.getElementById("rock").addEventListener("click", () => playRound("rock"));
document.getElementById("paper").addEventListener("click", () => playRound("paper"));
document.getElementById("scissors").addEventListener("click", () => playRound("scissors"));

// Initialize score display
updateScore();
