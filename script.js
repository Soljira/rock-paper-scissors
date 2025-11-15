/*
    Algorithm
    1. Start the round
    2. Get computer choice
        - Generate a random number between 0 and 1.
        - Multiply the random number by 100.
        - If num <= 33, the choice is rock
        - If num <= 66 && num > 33, the choice is paper
        - If num > 66, the choice is scissors
    3. Get human choice
    4. Decide who wins the round
    5. Increment either the player's score or the computer's score
    6. Repeat step 1, until one of the players reaches a score of 5, then set keepPlaying to false
    7. If the player clicks 'Play Again', reset the scores to 0 and go back to step 1

*/

console.log("Rock Paper Scissors Game");
let humanScore = 0;
let computerScore = 0;

const choiceMenu = document.querySelector(".choices");
const buttons = document.querySelectorAll("button");
const btnRock = document.querySelector("#btn-rock");
const btnPaper = document.querySelector("#btn-paper");
const btnScissors = document.querySelector("#btn-scissors");

const resultsDiv = document.querySelector(".results");

function getComputerChoice() {
    const randomNum = Math.random() * 100;
    if (randomNum <= 33.33) {
        return "rock";
    } else if (randomNum <= 66.66 && randomNum > 33.33) {
        return "paper";
    } else {
        return "scissors";
    }
}

function getHumanChoice() {
    // let incorrectInput = true;
    // let choice = "";
    // while (incorrectInput) {
    //     choice = prompt("choice: ").toLowerCase();
    //     if (choice == "rock" || choice == "paper" || choice == "scissors") {
    //         incorrectInput = false;
    //     } else {
    //         console.log(
    //             "Incorrect input! The only choices are: 'rock', 'paper', and 'scissors'"
    //         );
    //     }
    // }
    // return choice;

    let choice = "";

    return choice;
}

function playRound(humanChoice, computerChoice) {
    console.log(`Human Choice: ${humanChoice}`);
    console.log(`Computer Choice: ${computerChoice}`);
    const resultsDiv = document.querySelector(".results");
    const roundResultsPara = document.querySelector(".roundResult");

    switch (humanChoice) {
        case "rock":
            if (computerChoice == "rock") {
                console.log("Tie");
                roundResultsPara.textContent = "Tie";
            } else if (computerChoice == "paper") {
                computerScore++;
                console.log("You lose!");
                roundResultsPara.textContent = "You lose!";
            } else if (computerChoice == "scissors") {
                humanScore++;
                console.log("You win!");
                roundResultsPara.textContent = "You win!";
            }
            break;

        case "paper":
            if (computerChoice == "rock") {
                humanScore++;
                console.log("You win!");
                roundResultsPara.textContent = "You win!";
            } else if (computerChoice == "paper") {
                console.log("Tie");
                roundResultsPara.textContent = "Tie";
            } else if (computerChoice == "scissors") {
                computerScore++;
                console.log("You lose!");
                roundResultsPara.textContent = "You lose!";
            }
            break;

        case "scissors":
            if (computerChoice == "rock") {
                computerScore++;
                console.log("You lose!");
                roundResultsPara.textContent = "You lose!";
            } else if (computerChoice == "paper") {
                humanScore++;
                console.log("You win!");
                roundResultsPara.textContent = "You win!";
            } else if (computerChoice == "scissors") {
                console.log("Tie");
                roundResultsPara.textContent = "Tie";
            }
            break;
        default:
            console.log("Unknown choice");
            break;
    }
}

function playGame() {
    let humanChoice = "";
    let computerChoice = "";
    const roundResultsPara = document.querySelector(".roundResult");

    let round = 1;
    let keepPlaying = true;

    // while (keepPlaying) {
    if (round === 5) {
        keepPlaying = false;
    }
    // computerChoice = getComputerChoice();

    // humanChoice = getHumanChoice();

    console.log("-----------------------------------------");
    // console.log(`Round ${round}`);

    // playRound(humanChoice, computerChoice);
    // round++;

    // console.log(`Human Score: ${humanScore}`);
    // console.log(`Computer Score: ${computerScore}`);
    // }

    // TODO: Score wont update at the last round
    choiceMenu.addEventListener("click", (event) => {
        let target = event.target;
        computerChoice = getComputerChoice();
        const roundCount = document.querySelector(".round");
        roundCount.textContent = `Round: ${round}`;

        const humanScorePara = document.querySelector(".human-score");
        const computerScorePara = document.querySelector(".computer-score");

        if (round < 5) {
            switch (target.id) {
                case "btn-rock":
                    playRound("rock", computerChoice);
                    humanScorePara.textContent = `Human Score: ${humanScore}`;
                    computerScorePara.textContent = `Computer Score: ${computerScore}`;
                    round++;

                    break;
                case "btn-paper":
                    // choice = "paper";
                    playRound("paper", computerChoice);
                    round++;
                    humanScorePara.textContent = `Human Score: ${humanScore}`;
                    computerScorePara.textContent = `Computer Score: ${computerScore}`;
                    // roundCount.textContent = `${round}`;

                    break;
                case "btn-scissors":
                    // choice = "scissors";
                    playRound("scissors", computerChoice);
                    humanScorePara.textContent = `Human Score: ${humanScore}`;
                    computerScorePara.textContent = `Computer Score: ${computerScore}`;
                    round++;
                    // roundCount.textContent = `${round}`;

                    break;
            }
        } else {
            const winner = document.createElement("p");
            if (humanScore > computerScore) {
                console.log("Human wins the game!");
                winner.textContent = "Human wins the game!";
                choiceMenu.disabled = true;
            } else if (humanScore < computerScore) {
                console.log("Computer wins the game!");
                winner.textContent = "Computer wins the game!";
                choiceMenu.disabled = true;
            } else {
                console.log("It's a tie!");
                winner.textContent = "It's a tie!";
                choiceMenu.disabled = true;
            }
            choiceMenu.disabled = true;

            const playAgain = document.createElement("button");

            playAgain.textContent = "Play Again";
            playAgain.addEventListener("click", () => {
                computerChoice = "";
                round = 1;
                humanScore = 0;
                computerScore = 0;
                roundCount.textContent = `Round: ${round}`;

                humanScorePara.textContent = `Human Score: ${humanScore}`;
                computerScorePara.textContent = `Computer Score: ${computerScore}`;
                playAgain.remove();
                winner.textContent = "";
                roundResultsPara.textContent = "";
                choiceMenu.disabled = false;

                buttons.forEach((button) => {
                    button.disabled = false;
                });
            });
            buttons.forEach((button) => {
                button.disabled = true;
            });
            resultsDiv.appendChild(winner);
            resultsDiv.appendChild(playAgain);
        }
    });
}

playGame();
