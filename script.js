const choices = ["rock", "paper","scissors"]
//this function will define the variables and return the computers pick
function computerPlay(){
    let randomNumber = Math.floor(Math.random() * 3) + 1;
    let rock = "rock";
    let paper = "paper";
    let scissors = "scissors";
    
    if (randomNumber === 1) {
        return rock;    
    } else if (randomNumber === 2) {
        return paper;
    } else {
        return scissors;
    }       
}
//function to keep user input lowercase
function playerChoice() {
    let input = prompt ("Choose rock, paper, or scissors.");
    input = input.toLowerCase();
    return input;
}

function game() {

    let playerScore = 0;
    let computerScore = 0;
    let winner = "";

    for (let i = 0; i < 5; i++){
        //placing the parameter definitions here as it was needed to show and test the outcome of console.log 
        //placing it elsewere early in writing the code returned nothing in the console
        const computerSelection = computerPlay();
        const playerSelection = playerChoice();
    
        function playRound(playerSelection, computerSelection) {

            let tie = "You picked " + playerSelection + " and the computer picked the same! " + "It's a tie.";
            let rockBeatsScissorsPlayerWin = "You win! Rock beats Scissors.";
            let rockBeatsScissorsPlayerLoss = "You lose, Rock beats Scissors.";
            let paperBeatsRockPlayerWin = "You win! Paper beats Rock!";
            let paperBeatsRockPlayerLoss = "You lose, paper beats rock.";
            let scissorsBeatsPaperPlayerWin = "You win! Scissors beats Paper!";
            let scissorsBeatsPaperPlayerLoss = "You lose, Scissors beats Paper.";
            let incorrectInput = "That is an incorrect guess, try again."

            if (playerSelection === computerSelection) {
                return tie;
            } else if ((playerSelection === 'rock') && (computerSelection === 'scissors')) {
                playerScore++;
                return rockBeatsScissorsPlayerWin;
            } else if ((playerSelection === 'scissors') && (computerSelection === 'rock')) {
                computerScore++;
                return rockBeatsScissorsPlayerLoss;
            } else if ((playerSelection === 'paper') && (computerSelection === 'rock')) {
                playerScore++;
                return paperBeatsRockPlayerWin;
            } else if ((playerSelection === 'rock') && (computerSelection === 'paper')) {
                computerScore++;
                return paperBeatsRockPlayerLoss;
            } else if ((playerSelection === 'scissors') && (computerSelection === 'paper')) {
                playerScore++;
                return scissorsBeatsPaperPlayerWin;
            } else if ((playerSelection === 'paper') && (computerSelection === 'scissors')){
                computerScore++;
                return scissorsBeatsPaperPlayerLoss;
            } else {
                return incorrectInput;

            }

        }
        console.log(playRound(playerSelection, computerSelection));
        

    }
    //should determine the winner after the 5 rounds based on the incrimental points from above
    if (playerScore === computerScore) {
        winner = "You've tied! Try again!";
    } else if (playerScore > computerScore) {
        winner = "You've won! I'm proud of you!";
    } else {
        winner = "The computer won. You'll get them next time."
    }
    //prints out the winner to the connsole
    console.log(winner)

}  

//needed to actually run the game function
game()
