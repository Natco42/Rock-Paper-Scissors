



//changed randomNumber generator as previous math was generating infinitly
function computerPlay(){
    let rock = "Rock";
    let paper = "Paper";
    let scissors ="Scissors";
    let randomNumber = Math.random();
    if (randomNumber <= 0.33) {
        return rock;
    }  else if (randomNumber <= 0.66) {
        return paper;
    } else {
        return scissors;
    }
}

function game() {
    let playerWin = 0;
    let computerWin = 0;
    let gameWinner = "";

    const buttons = document.querySelectorAll('button');
    buttons.forEach((button) => {
        button.addEventListener('click', () => {
            playerSelection = button.className;
            let computerSelection = computerPlay();
            battleWinText.textContent = (playRound(playerSelection, computerSelection));
            playerWinText.textContent = "Your Win Total: " + playerWin;
            computerWinText.textContent = "Computer Win Total: " + computerWin;
            endGame();

        })
    })
            
            
            
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
            } else if ((playerSelection === 'Rock') && (computerSelection === 'Scissors')) {
                playerWin++;
                return rockBeatsScissorsPlayerWin;
            } else if ((playerSelection === 'Scissors') && (computerSelection === 'Rock')) {
                computerWin++;
                return rockBeatsScissorsPlayerLoss;
            } else if ((playerSelection === 'Paper') && (computerSelection === 'Rock')) {
                playerWin++;
                return paperBeatsRockPlayerWin;
            } else if ((playerSelection === 'Rock') && (computerSelection === 'Paper')) {
                computerWin++;
                return paperBeatsRockPlayerLoss;
            } else if ((playerSelection === 'Scissors') && (computerSelection === 'Paper')) {
                playerWin++;
                return scissorsBeatsPaperPlayerWin;
            } else if ((playerSelection === 'Paper') && (computerSelection === 'Scissors')){
                computerWin++;
                return scissorsBeatsPaperPlayerLoss;
            } 

        }
    

    const container = document.querySelector("#container");
    const resultsDiv = document.createElement("div");
    resultsDiv.style.marginTop = "20px";
    container.appendChild(resultsDiv);
            
    const playerWinText = document.createElement("p");
    playerWinText.style.color = "orange";
    playerWinText.textContent = "Your Win Total: " + playerWin;
    resultsDiv.appendChild(playerWinText);
            
    const computerWinText = document.createElement("p");
    computerWinText.style.color = "green";
    computerWinText.textContent = "Computer Win Total: " + computerWin;
    resultsDiv.appendChild(computerWinText);
            
    const battleWinText = document.createElement("p");
    battleWinText.style.color = "purple";
    resultsDiv.appendChild(battleWinText);
            
    const gameWinText = document.createElement("p");
    gameWinText.style.color = "blue";
    gameWinText.textContent = gameWinner;
    resultsDiv.appendChild(gameWinText);

    function endGame() {
        if (playerWin == 5) {
            gameWinner = "Congrats! You've won!";
            gameWinText.textContent = gameWinner;
        } else if (computerWin == 5) {
            gameWinner = "Sorry better luck next time! Commputer wins.";
            gameWinText.textContent = gameWinner;

            const resetButton = document.createElement('button');
            resetButton.textContent = "Would you like to play again?";
            resultsDiv.appendChild(resetButton);
            resetButton.addEventListener('click', () => {
                location.reload();
            })
        }

        
    }
}
 


game();