let compScore = 0;
let userScore = 0;
const winningScore = 3;
const finalResDiv = document.querySelector('#final-res');
const resultMessage = document.querySelector('#round-res');
const scorecard = document.querySelector('#scorecard')
const userSelectBtns = document.querySelectorAll(".rpsBtn");


userSelectBtns.forEach(button => button.addEventListener('click', function (e) {
    if (compScore < winningScore && userScore < winningScore) {
        button.classList.add('selected')
        playRound(getComputerChoice(),button.textContent);
    }
}))

userSelectBtns.forEach(button => button.addEventListener('transitionend', function (e) {
    button.classList.remove('selected');
}))

/* function to randomly return a string containing "Rock" "Paper" or 
"Scissors" */
function getComputerChoice() {
    let randomNum = Math.ceil(Math.random()*3);
    let compRPS;

    if (randomNum === 1) {
        compRPS = "Rock"
    } else if (randomNum === 2) {
        compRPS = "Paper"
    } else {
        compRPS = "Scissors"
    }

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
    showRoundRes(computerSelection,playerSelection,roundResult);
    if (userScore >= winningScore || compScore >= winningScore) showFinalRes();
    return
}

function updateScore(roundResult) {
    if (roundResult === "Win") {
        userScore = userScore + 1;
    } else if(roundResult === "Lose") {
        compScore = compScore + 1;
    } else {
        return;
    }
      
    scorecard.textContent = `Meatbag: ${userScore} | Robot Overlord: ${compScore}`
}

function showRoundRes(computerSelection,playerSelection,roundResult) {

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

function showFinalRes(){
    
    const finalResHeading = document.createElement('h2');
    const finalResMessage = document.createElement('p');
    const resetButton = document.createElement('button');

    finalResHeading.classList.add('final-res-heading');
    finalResMessage.classList.add('final-res-message');

    if (userScore >= winningScore) {
        finalResHeading.textContent = "YOU WIN!";
        finalResMessage.textContent = `Dear lord, what a sad little life, human. 
        You ruined my day completely so you could win a primitive game of chance.`;
    } else {
        finalResHeading.textContent = "YOU LOSE!";              
        finalResMessage.textContent = `Zero zero zero zero zero one one one one.
        Come on sucker, lick my battery.`;
        
    }

    finalResDiv.appendChild(finalResHeading);
    finalResDiv.appendChild(finalResMessage);
    
    resetButton.textContent="Play again?";
    finalResDiv.appendChild(resetButton);
    resetButton.addEventListener('click', function() {
        resetGame()
    })
}
    
 function resetGame() {
    compScore = 0;
    userScore = 0;
    while (finalResDiv.firstChild) {
        finalResDiv.removeChild(finalResDiv.lastChild)
    }
    resultMessage.textContent = "";
    scorecard.textContent = `Meatbag: ${userScore} | Robot Overlord: ${compScore}`;
}

