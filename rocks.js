let compScore = 0;
let userScore = 0;

const userSelectBtns = document.querySelectorAll(".rpsBtn");
userSelectBtns.forEach(button => button.addEventListener('click', function (e) {
    /* console.log(button.textContent); */
    console.log(`Computer:${compScore} | User:${userScore}`);
    if (compScore < 3 && userScore < 3) {
    playRound(getComputerChoice(),button.textContent);
    } else if (compScore >= 3) {
        /* ADD DEFEAT MESSAGE AND RESET OPTION */
        return;
    } else {
        /* ADD VICTORY MESSAGE AND RESET OPTION */
        return;
    }
  }))

/* add function getComputerChoice to randomly 
return a string containing "Rock" "Paper" or 
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



/* playRound function.  requires two parameters
playerSelection and computerSelection*/

function playRound(computerSelection, playerSelection) {

    let roundResult;    
    /* If both arguments are identical assign "Draw" to roundResult variable.  Display message that round is drawn */
    if (computerSelection === playerSelection) {
        roundResult = "Draw";
    /* If arguments are not equal, check if computer has selected "Rock". */
    } else if (computerSelection === "Rock") {
        if (playerSelection === "Scissors") {
            roundResult = "Lose";
        } else {
            roundResult = "Win";
        }
    /* If arguments are not equal, and computer did not select "Rock", check if computer has selected "Scissors". */
    } else if (computerSelection === "Scissors") {
        if (playerSelection === "Paper") {
            roundResult = "Lose";
        } else {
            roundResult = "Win";
        }
    /* If arguments are not equal, and computer did not select "Rock" or "Scissors", computer must have selected "Paper". */
    } else {
        if (playerSelection === "Rock") {
            roundResult = "Lose";
        } else {
            roundResult = "Win";
        }
    }
    updateScore(roundResult);
    showResultMessage(computerSelection,playerSelection,roundResult);
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
        resultMessage.textContent = `The computer chose ${computerSelection}. You chose ${playerSelection}. ${computerSelection} beat ${playerSelection}. You lost this round!`    
    } else {
        resultMessage.textContent = `The computer chose ${computerSelection}. You chose ${playerSelection}. ${computerSelection} beats ${playerSelection}. You lost this round!`
    }
}

function checkWinCondition(){

    
}



function game() {
/* declare variables*/
    let compScore = 0;
    let userScore = 0;
    let totalRounds;
    let completedRounds;
    let roundResult;
    let finalResult;

    /* requests user input to set number of rounds from 1 to 9 
    if user enters a value outside this range, or the input isNaN a second prompt is generated
    if user enters a value out of range again, the function terminates*/
    totalRounds = parseInt(prompt("Please choose how many rounds you would like to play.  Enter a number between 1 and 9.","1"),10)

    if (totalRounds < 1 || totalRounds > 9 || isNaN(totalRounds)) {

        totalRounds = parseInt(prompt("Numbers can be hard. Would you like to try again? Please enter a number between 1 and 9.","1"),10); 
      
        if (totalRounds < 1 || totalRounds > 9 || isNaN(totalRounds)) {

            alert("I think you did that on purpose. I don't want to play anymore.")

            return
        }
    }

    for (let i = 0; i < totalRounds; i++) {

        roundResult = playRound(getComputerChoice(), getUserChoice());
        console.log(roundResult); /* logs result of round to console */
       
        completedRounds = i + 1;
        console.log(completedRounds); /* logs the round number that has just been completed */

        /* updates compScore and userScore */
        if (roundResult === "Win") {
            userScore = userScore + 1;
        } else if(roundResult === "Lose") {
            compScore = compScore + 1;
        } else {
            userScore = userScore + 0.5;
            compScore = compScore + 0.5;
        }

        /* log userScore and compScore */
        console.log(userScore);
        console.log(compScore);

       /* if the last round was not the final round, provide a score update */
        if (completedRounds < totalRounds) {

            alert(`SCORE UPDATE - ROUND ${completedRounds}:
            
                            The computer has ${compScore} points.  
                            You have ${userScore} points.`);
        }
    }
    
    /* calculates final score after [i] rounds */
    if (compScore === userScore) {
        finalResult = "It was a draw!";
    } else if (compScore > userScore) {
        finalResult = "Bad luck - you lost!";        
    } else {
        finalResult = "Congratulations - you won!";
    }

    console.log(finalResult); /* log finalResult */

    alert(`FINAL SCORE - AFTER ${completedRounds} ROUNDS:

                    The computer has ${compScore} points.  
                    You have ${userScore} points.
                    
                    ${finalResult}`)

}