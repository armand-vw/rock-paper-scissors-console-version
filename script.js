function computerPlay() {
    const choices = ['Rock', 'Paper', 'Scissors'];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

function playRound(playerSelection, computerSelection) {
    const player = playerSelection.toLowerCase();
    const computer = computerSelection.toLowerCase();

    if (player === computer) {
        return "draw";
    } else if (
        (player === 'rock' && computer === 'scissors') ||
        (player === 'paper' && computer === 'rock') ||
        (player === 'scissors' && computer === 'paper')
    ) {
        return "player";
    } else {
        return "computer";
    }
}

function game() {
    console.log("=== BATTLE COMMENCED: Human vs. Evil AI ===");
    console.log("First to win 3 rounds saves the world. Invalid entries or draws do not count!");

    let playerScore = 0;
    let computerScore = 0;
    let roundCount = 1;

    while (playerScore < 3 && computerScore < 3) {
        let input = prompt(`Round ${roundCount}\nScore - You: ${playerScore} | AI: ${computerScore}\nEnter Rock, Paper, or Scissors:`);

        if (input === null) {
            console.log("Game aborted by user. The Evil AI wins by default!");
            alert("You fled from the battle! The AI has dominated the world.");
            return;
        }

        let cleanedInput = input.trim().toLowerCase();
        let playerSelection = "";
        
        if (cleanedInput === "rock") playerSelection = "Rock";
        else if (cleanedInput === "paper") playerSelection = "Paper";
        else if (cleanedInput === "scissors") playerSelection = "Scissors";

        if (!playerSelection) {
            console.log(`[Invalid Input]: "${input}" is not recognized. Try again. Score unaffected.`);
            alert("Invalid choice! Please enter Rock, Paper, or Scissors.");
            continue; 
        }

        let computerSelection = computerPlay();
        let result = playRound(playerSelection, computerSelection);

        console.log(`--- Round ${roundCount} Result ---`);
        console.log(`You chose: ${playerSelection}`);
        console.log(`AI chose: ${computerSelection}`);

        if (result === "player") {
            playerScore++;
            console.log(`You won this round! Point awarded.`);
        } else if (result === "computer") {
            computerScore++;
            console.log(`The AI won this round! Point awarded.`);
        } else {
            console.log(`It's a draw! No points awarded.`);
        }

        console.log(`Current Score -> You: ${playerScore} | AI: ${computerScore}\n`);
        roundCount++;
    }

    console.log("=== FINAL BATTLE RESULTS ===");
    if (playerScore === 3) {
        console.log(`VICTORY! You defeated the Evil AI with a score of ${playerScore} to ${computerScore}!`);
        alert("Congratulations! You stopped the Evil AI and saved the world!");
    } else {
        console.log(`DEFEAT! The Evil AI won with a score of ${computerScore} to ${playerScore}.`);
        alert("Mwahahaha! The Evil AI has successfully dominated the world!");
    }
}

document.addEventListener("DOMContentLoaded", () => {
    const startBtn = document.getElementById("start-btn");
    if (startBtn) {
        startBtn.addEventListener("click", () => {
            console.log("Defense Protocol initialized by user action.");
            game();
        });
    }
});