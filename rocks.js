let compScore = 0;
let userScore = 0;

const userSelectBtns = document.querySelectorAll(".rpsBtn");
userSelectBtns.forEach(button => button.addEventListener('click', function (e) {
    /* console.log(button.textContent); */
    console.log(`Computer:${compScore} | User:${userScore}`);
    if (compScore < 5 && userScore < 5) {
    playRound(getComputerChoice(),button.textContent);
    } else if (compScore >= 3) {
        /* ADD DEFEAT MESSAGE AND RESET OPTION */
        return;
    } else {
        /* ADD VICTORY MESSAGE AND RESET OPTION */
        return;
    }
  }))

/* function to randomly return a string containing "Rock" "Paper" or 
"Scissors" */

function getComputerChoice() {
    let RandomNum = Math.ceil(Math.random()*3);
   /*  console.log(RandomNum);  */

    let compRPS;

    if (RandomNum === 1) {
        compRPS = "Rock"
    } else if (RandomNum === 2) {
        compRPS = "Paper"
    } else {
        compRPS = "Scissors"
    }

    /* console.log(compRPS);  *//* debugging */

    return compRPS
}



function playRound(computerSelection, playerSelection) {

    let roundResult;    
    /* If both arguments are identical assign "Draw" to roundResult variable.*/
    if (computerSelection === playerSelection) {
        roundResult = "Draw";
        
    /* If arguments are not equal, check if computer has selected "Rock". */
    } else if (computerSelection === "Rock") {
        if (playerSelection === "Scissors") {
            roundResult = "Lose";
        } else {
            roundResult = "Win";
        }
    /* If arguments are not equal, and computer did not select "Rock", check if computer has selected "Paper". */
    } else if (computerSelection === "Paper") {
        if (playerSelection === "Rock") {
            roundResult = "Lose";
        } else {
            roundResult = "Win";
        }
    /* If arguments are not equal, and computer did not select "Rock" or "Paper", computer must have selected "Scissors". */
    } else {
        if (playerSelection === "Paper") {
            roundResult = "Lose";
        } else {
            roundResult = "Win";
        }
    }
    updateScore(roundResult);
    showResultMessage(computerSelection,playerSelection,roundResult);
    checkWinCondition();
}


function updateScore(roundResult) {
    if (roundResult === "Win") {
        userScore = userScore + 1;
    } else if(roundResult === "Lose") {
        compScore = compScore + 1;
    } else {
        userScore = userScore + 0.5;
        compScore = compScore + 0.5;
    }
   
    const scorecard = document.querySelector('.scorecard')
    scorecard.textContent = `User: ${userScore} | Computer: ${compScore}`
}

function showResultMessage(computerSelection,playerSelection,roundResult) {
    const resultMessage = document.querySelector('.round-res');
    if (roundResult ==="Draw") {
        resultMessage.textContent = `You chose ${playerSelection}. The computer also chose ${computerSelection}. The round is drawn!`
    } else if (roundResult ==="Win" && playerSelection === "Scissors") {
        resultMessage.textContent = `You chose ${playerSelection}. The computer chose ${computerSelection}. ${playerSelection} beat ${computerSelection}. You win this round!`
    } else if (roundResult ==="Win" && playerSelection !== "Scissors") {
        resultMessage.textContent = `You chose ${playerSelection}. The computer chose ${computerSelection}. ${playerSelection} beats ${computerSelection}. You win this round!`
    } else if (roundResult ==="Lose" && computerSelection === "Scissors") {
        resultMessage.textContent = `The computer chose ${computerSelection}. You chose ${playerSelection}. ${computerSelection} beat ${playerSelection}. You lose this round!`    
    } else {
        resultMessage.textContent = `The computer chose ${computerSelection}. You chose ${playerSelection}. ${computerSelection} beats ${playerSelection}. You lose this round!`
    }
}

function checkWinCondition(){

    
}

