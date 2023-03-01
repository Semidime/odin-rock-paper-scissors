let compScore = 0;
let userScore = 0;
const winningScore = 3;
const finalResDiv = document.querySelector('#final-res');
const resultMessage = document.querySelector('#round-res');
const scorecard = document.querySelector('#scorecard')
const userSelectBtns = document.querySelectorAll(".rpsBtn");


/* event listeners attached to each rps button.
on click calls playRound(), and adds selected class to chosen button and calls addSelectedRpsImg */
userSelectBtns.forEach(button => button.addEventListener('click', function (e) {
    if (compScore < winningScore && userScore < winningScore) {
        button.classList.add('selected');
        addSelectedRpsImg(button.textContent);
        playRound(getComputerChoice(),button.textContent);
    }
}))

/* removes selected class from rps button and calls removeSelectedRpsImg after transition has completed */
userSelectBtns.forEach(button => button.addEventListener('transitionend', function (e) {
    if (e.propertyName !== 'transform') return;
    removeSelectedRpsImg(button.textContent);
    button.classList.remove('selected');
}))

/* adds selected-img class to rps image */
function addSelectedRpsImg (rps) {
    const rpsImageID = rps+"-img";
    const rpsImage = document.querySelector(`#${rpsImageID}`);
    rpsImage.classList.add('selected-img');
}

/* removes selected-img class from rps image */
function removeSelectedRpsImg (rps) {
    const rpsImageID = rps+"-img";
    const rpsImage = document.querySelector(`#${rpsImageID}`);
    rpsImage.classList.remove('selected-img');
}


/* randomly returns a string containing "Rock" "Paper" or 
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

/* playRound checks the arguments passed to it 
assigns the result of the round to roundResult variable
calls updateScore() and showRoundRes()
if userScore or compScore is greater than or equal to winningScore calls showFinalRes() */
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

/* updates userScore and compScore after each round, publishes updated score to scorecard */
function updateScore(roundResult) {
    if (roundResult === "Win") {
        userScore = userScore + 1;
    } else if(roundResult === "Lose") {
        compScore = compScore + 1;
    }
      
    scorecard.textContent = `Meatbag: ${userScore} | Robot Overlord: ${compScore}`
}

/* shows outcome of each round.  publishes result of round to resultMessage */
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

/* called when compScore or userScore equal to winningScore
fades out most recent roundResult
adds a heading declaring a winner
adds a paragraph with a final result message
adds button to reload page */
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

    resultMessage.style.transition = "all 4s ease";
    resultMessage.style.color = "rgb(239, 255, 17)";


    setTimeout(() => {
        finalResDiv.appendChild(finalResHeading);
        finalResDiv.appendChild(finalResMessage);
        resetButton.textContent="Play again?";
        finalResDiv.appendChild(resetButton);       
        resetButton.addEventListener('click', function() {
            location.reload()
        })
    }, 2000);
}
