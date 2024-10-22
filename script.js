function getComputerChoice(){
    let result = Math.random();
    result *= 3;
    if (result < 1) result = 'ROCK'
    else if ((result >= 1) && (result < 2)) result = 'PAPER'
    else result = 'SCISSORS';
    return result;
}

const rockButton = document.querySelector("#rock");
const paperButton = document.querySelector("#paper");
const scissorsButton = document.querySelector("#scissors");


rockButton.addEventListener('click', ()=>{
    let computerSelection = getComputerChoice();
    let humanSelection = 'ROCK';
    playRound(humanSelection, computerSelection);
});

paperButton.addEventListener('click', ()=>{
    let computerSelection = getComputerChoice();
    let humanSelection = 'PAPER';
    playRound(humanSelection, computerSelection);
});

scissorsButton.addEventListener('click', ()=>{
    let computerSelection = getComputerChoice();
    let humanSelection = 'SCISSORS';
    playRound(humanSelection, computerSelection);
});


let humanScore = 0;
let computerScore = 0;
let roundWinner = '';
let roundCount = 0;


let humanOutcome = document.querySelector("#humanScore");
let computerOutcome = document.querySelector("#computerScore");
let result = document.querySelector("#roundResult");
let humanImage = document.querySelector("#humanImage");
let computerImage = document.querySelector("#computerImage");
let round = document.querySelector("#roundName");


    function playRound(humanSelection, computerSelection) {
        if (humanSelection === computerSelection){
            result.textContent = "It's a tie!"
            humanImage.src = ("./images/" + humanSelection + ".png");
            computerImage.src = ("./images/" + computerSelection + ".png");
            roundCount++;
            round.textContent = "round "+roundCount;
        } else if(
            ((humanSelection === 'ROCK') && (computerSelection === 'SCISSORS')) ||
            ((humanSelection === 'SCISSORS') && (computerSelection === 'PAPER')) ||
            ((humanSelection === 'PAPER') && (computerSelection === 'ROCK'))){
                humanScore++;
                result.textContent = ("You've won! "+humanSelection + " beats "+computerSelection);
                humanImage.src = ("./images/" + humanSelection + ".png");
                computerImage.src = ("./images/" + computerSelection + ".png");
                humanOutcome.textContent = humanScore;
                computerOutcome.textContent = computerScore;
                roundCount++;
                round.textContent = "round "+roundCount;
            } else if (
            ((humanSelection === 'SCISSORS') && (computerSelection === 'ROCK')) ||
            ((humanSelection === 'PAPER') && (computerSelection === 'SCISSORS')) ||
            ((humanSelection === 'ROCK') && (computerSelection === 'PAPER'))){
                computerScore++;
                result.textContent = ("You've lost! "+humanSelection + " gets beaten by "+computerSelection);
                computerImage.src = ("./images/" + computerSelection + ".png");
                humanOutcome.textContent = humanScore;
                computerOutcome.textContent = computerScore;
                roundCount++;
                round.textContent = "round "+roundCount;
            }
            if ((humanScore === 5)||(computerScore === 5)){
                endGame(humanScore, computerScore);
            }
}

function endGame(humanScore, computerScore){
    if(humanScore>computerScore){
        alert("you've won the game!");
        clearGame();
    } else if (humanScore >= computerScore){
        alert("It's a draw!");
        clearGame();
    } else{
        alert("You've lost the game!");
        clearGame();
    }
    
}

function clearGame(){
    humanScore = 0;
    computerScore = 0;
    roundWinner = '';
    roundCount = 0;
    result.textContent = ("RESULT");
    humanOutcome.textContent = humanScore;
    computerOutcome.textContent = computerScore;
    round.textContent = "round "+roundCount;
}
        



