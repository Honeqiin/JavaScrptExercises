

function getComputerChoice(){
    let result = Math.random();
    result *= 3;
    if (result < 1) result = 1
    else if ((result >= 1) && (result < 2)) result = 2
    else result = 3;
    return result;
}

function getHumanChoice(){
const btn = document.querySelector("#chosenMove");
    btn.addEventListener("click", () => {
    alert("Hello World");
});

    //let choice = prompt("Please type what you choose: rock, paper, scissors", "yout choce goes here").toLowerCase();
    //if (choice=="rock") return 1; 
   // else if (choice=="paper") return 2; 
    //else return 3; 
}



function playGame(){

    var humanScore = 0;
    var computerScore = 0;

    for (let i = 0; i<5; i++){
        var humanSelection = getHumanChoice();
        var computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);
    }

    function playRound(humanChoice, computerChoice) {
        if (humanSelection == computerSelection) console.log("It's a draw!")
        else if ((humanSelection == 1)&&(computerSelection == 3)){
            console.log("You win! Rock beats scissors!");
            humanScore++;
            console.log("Your's score: "+ humanScore);
            console.log("Computer's score: "+ computerScore);
        }
        else if ((humanSelection == 3)&&(computerSelection == 1)){
            console.log("You loose! Scissors beats rock!");
            computerScore++;
            console.log("Your's score: "+ humanScore);
            console.log("Computer's score: "+ computerScore);
        }
        else if ((humanSelection == 3)&&(computerSelection == 2)){
            console.log("You win! Scissors beats paper!");
            humanScore++;
            console.log("Your's score: "+ humanScore);
            console.log("Computer's score: "+ computerScore);
        }
        else if ((humanSelection == 2)&&(computerSelection == 3)){
            console.log("You loose! Paper beats scissors!");
            computerScore++;
            console.log("Your's score: "+ humanScore);
            console.log("Computer's score: "+ computerScore);
        }
        else if ((humanSelection == 2)&&(computerSelection == 1)){
            console.log("You win! Paper beats rock!");
            humanScore++;
            console.log("Your's score: "+ humanScore);
            console.log("Computer's score: "+ computerScore);
        }
        else if ((humanSelection == 1)&&(computerSelection == 2)){
            console.log("You loose! Rock beats paper!");
            computerScore++;
            console.log("Your's score: "+ humanScore);
            console.log("Computer's score: "+ computerScore);
        }
}


        console.log("Final score:");
        console.log("Your's score: "+ humanScore);
        console.log("Computer's score: "+ computerScore);
        

}

playGame();

    