//start playing after playBtnclick
const playBtn = document.querySelector('.play-btn');
const subheader = document.querySelector('#subheader');
const gameStarted = document.querySelector('#game-started');
playBtn.addEventListener('click', () => {
    subheader.style.display = 'none';
    gameStarted.style.display = 'block';
});

//values for results for each round
const resultText = document.querySelector('#results');
let playerScore = 0;
const playerScoreText = document.querySelector('#player-score');
let computerScore = 0;
const computerScoreText = document.querySelector('#computer-score');


//play round and check outcome of round
const rock = document.querySelector('#rock');
rock.addEventListener('click', () => {
    document.querySelector('.player-rock').style.display = 'block';
    document.querySelector('.player-paper').style.display = 'none';
    document.querySelector('.player-scissors').style.display = 'none';
    playRound('rock', computerPlay());
});
const paper = document.querySelector('#paper');
paper.addEventListener('click', () => {
    document.querySelector('.player-rock').style.display = 'none';
    document.querySelector('.player-paper').style.display = 'block';
    document.querySelector('.player-scissors').style.display = 'none';
    playRound('paper', computerPlay());
});
const scissors = document.querySelector('#scissors');
scissors.addEventListener('click', () => {
    document.querySelector('.player-rock').style.display = 'none';
    document.querySelector('.player-paper').style.display = 'none';
    document.querySelector('.player-scissors').style.display = 'block';
    playRound('scissors', computerPlay());
});

//endgame values
const endGame = document.querySelector('#end-game');
const endResult = document.querySelector('#end-result');
const grin = document.querySelector('#grin');
const frown = document.querySelector('#frown');

//resets values
const playAgainBtn = document.querySelector('#play-again');
playAgainBtn.addEventListener('click', () => {
    grin.style.display = 'none';
    frown.style.display = 'none';
    endGame.style.display = 'none';
    gameStarted.style.display = 'block';
    document.querySelector('#btn-container').style.display = 'flex';
    document.querySelector('#choose').style.display = 'block';
    playerScore = 0;
    computerScore = 0;
    playerScoreText.textContent = `${playerScore}`;
    computerScoreText.textContent = `${computerScore}`;
    resultText.textContent = "";
    document.querySelector('.computer-rock').style.display = 'none';
    document.querySelector('.computer-paper').style.display = 'none';
    document.querySelector('.computer-scissors').style.display = 'none';
    document.querySelector('.player-rock').style.display = 'none';
    document.querySelector('.player-paper').style.display = 'none';
    document.querySelector('.player-scissors').style.display = 'none';
});

//check if a player reached 5 points and display winner
function checkPoints(playerPoints, computerPoints) {
    if (playerPoints === 5) {
        grin.style.display = 'block';
        endResult.textContent = 'YOU WON THE GAME!';
        document.querySelector('#choose').style.display = 'none';
        document.querySelector('#btn-container').style.display = 'none';
        gameStarted.style.display = 'none';
        endGame.style.display = 'block';
    }
    if (computerPoints === 5) {
        frown.style.display = 'block';
        endResult.textContent = 'YOU LOST THE GAME!';
        document.querySelector('#choose').style.display = 'none';
        document.querySelector('#btn-container').style.display = 'none';
        gameStarted.style.display = 'none';
        endGame.style.display = 'block';
    }

}

//computerPlay function RANDOMLY returns "Rock", "Paper", or "Scissors".
function computerPlay() {
    let array = ["rock", "paper", "scissors"];
    let compMove = array[getRandom(0, array.length)];
    console.log(compMove);
    if (compMove === "rock") {
        document.querySelector('.computer-rock').style.display = 'block';
        document.querySelector('.computer-paper').style.display = 'none';
        document.querySelector('.computer-scissors').style.display = 'none';
    } else if (compMove === "paper") {
        document.querySelector('.computer-rock').style.display = 'none';
        document.querySelector('.computer-paper').style.display = 'block';
        document.querySelector('.computer-scissors').style.display = 'none';
    } else if (compMove === "scissors") {
        document.querySelector('.computer-rock').style.display = 'none';
        document.querySelector('.computer-paper').style.display = 'none';
        document.querySelector('.computer-scissors').style.display = 'block';
    }
    return compMove;
}
//return random number
function getRandom(min, max) {
    return Math.floor(Math.random() * (max - 0) + 0);
}

//function that plays one round of rock, paper, scissors:
function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        resultText.textContent = "This round is a tie!";
        return;
    }
    switch (playerSelection) {
        case "rock":
            if (computerSelection === "paper") {
                resultText.textContent = "You lose this round! Paper beats Rock!";
                computerScore++;
                checkPoints(playerScore, computerScore);
                computerScoreText.textContent = `${computerScore}`;

            } else {
                playerScore++;
                checkPoints(playerScore, computerScore);
                playerScoreText.textContent = `${playerScore}`;
                resultText.textContent = "You win this round! Rock beats Scissors!";
            }
            break;
        case "paper":
            if (computerSelection === "rock") {
                playerScore++;
                checkPoints(playerScore, computerScore);
                playerScoreText.textContent = `${playerScore}`;
                resultText.textContent = "You win this round! Paper beats Rock!";
            } else {
                computerScore++;
                checkPoints(playerScore, computerScore);
                computerScoreText.textContent = `${computerScore}`;
                resultText.textContent = "You lose this round! Scissors beats Paper!";
            }
            break;
        case "scissors":
            if (computerSelection === "rock") {
                computerScore++;
                checkPoints(playerScore, computerScore);
                computerScoreText.textContent = `${computerScore}`;
                resultText.textContent = "You lose this round! Rock beats Scissors!";
            } else {
                playerScore++;
                checkPoints(playerScore, computerScore);
                playerScoreText.textContent = `${playerScore}`;
                resultText.textContent = "You win this round! Scissors beats Paper!";
            }
            break;
    }
};