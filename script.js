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

    
    Pseudocode:
    SET humanScore to 0
    SET computerScore to 0
    SET round to 0
    SET keepPlaying to true

    SET humanChoice = "";
    SET computerChoice = "";

    WHILE keepPlaying is true
        CALCULATE random number then multiply it by 100
        IF num <= 33.33:
            SET computerChoice = "rock"
        ELSE IF num <= 66.66 && num > 33.33:
            SET computerChoice = "paper"
        ELSE:
            SET computerChoice = "scissors"
        ENDIF

        READ humanChoice

        CASE humanChoice OF
            humanChoice === "rock":
                IF computerChoice === "rock":
                    PRINT "Tie"
                ELSE IF computerChoice === "paper":
                    PRINT "You lose"
                    INCREMENT computerScore
                ELSE IF computerChoice === "scissors":
                    PRINT "You win"
                    INCREMENT humanScore
                ENDIF
                BREAK
            humanChoice === "paper":
                IF computerChoice === "rock":
                    PRINT "You win"
                    INCREMENT humanScore                
                ELSE IF computerChoice === "paper":
                    PRINT "Tie"
                ELSE IF computerChoice === "scissors":
                    PRINT "You lose"
                    INCREMENT computerScore
                ENDIF
                BREAK
            humanChoice === "scissors":
                IF computerChoice === "rock":
                    PRINT "You lose"
                    INCREMENT computerScore                
                ELSE IF computerChoice === "paper":
                    PRINT "You win"
                    INCREMENT humanScore    
                ELSE IF computerChoice === "scissors":
                    PRINT "Tie"
                ENDIF
                BREAK
        ENDCASE

        INCREMENT round

        IF round == 5
            SET keepPlaying to false
        ENDIF
    ENDWHILE

    IF humanScore > computerScore:
        PRINT "Human wins!"
    ELSE:
        PRINT "Computer wins!"
    ENDIF
*/

console.log("Rock Paper Scissors Game");
let humanScore = 0;
let computerScore = 0;

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
    let incorrectInput = true;
    let choice = "";
    while (incorrectInput) {
        choice = prompt("choice: ").toLowerCase();
        if (choice == "rock" || choice == "paper" || choice == "scissors") {
            incorrectInput = false;
        } else {
            console.log(
                "Incorrect input! The only choices are: 'rock', 'paper', and 'scissors'"
            );
        }
    }
    return choice;
}

function playRound(humanChoice, computerChoice) {
    console.log(`Human Choice: ${humanChoice}`);
    console.log(`Computer Choice: ${computerChoice}`);

    switch (humanChoice) {
        case "rock":
            if (computerChoice == "rock") {
                console.log("Tie");
            } else if (computerChoice == "paper") {
                computerScore++;
                console.log("You lose!");
            } else if (computerChoice == "scissors") {
                humanScore++;
                console.log("You win!");
            }
            break;

        case "paper":
            if (computerChoice == "rock") {
                humanScore++;
                console.log("You win!");
            } else if (computerChoice == "paper") {
                console.log("Tie");
            } else if (computerChoice == "scissors") {
                computerScore++;
                console.log("You lose!");
            }
            break;

        case "scissors":
            if (computerChoice == "rock") {
                computerScore++;
                console.log("You lose!");
            } else if (computerChoice == "paper") {
                humanScore++;
                console.log("You win!");
            } else if (computerChoice == "scissors") {
                console.log("Tie");
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

    let round = 1;
    let keepPlaying = true;

    while (keepPlaying) {
        if (round === 5) {
            keepPlaying = false;
        }
        computerChoice = getComputerChoice();
        humanChoice = getHumanChoice();

        console.log("-----------------------------------------");
        console.log(`Round ${round}`);

        playRound(humanChoice, computerChoice);
        round++;

        console.log(`Human Score: ${humanScore}`);
        console.log(`Computer Score: ${computerScore}`);
    }

    if (humanScore > computerScore) {
        console.log("Human wins the game!");
    } else {
        console.log("Computer wins the game!");
    }
}

playGame();
