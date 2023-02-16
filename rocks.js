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

    console.log(compRPS); /* debugging */

    return compRPS
}

/* function to prompt user to input selection,
input will be case insensitive and return a trimmed string value, if the
input is not "Rock" "Paper" or "Scissors" no value will be returned and 
a message will be displayed */
function getUserChoice() {
    let rawInput = prompt('Please choose your weapon! [Rock, Paper or Scissors]');

    /* console.log(rawInput);  *//* debugging */

    /* capitalise input string */

    let capitalizedInput = rawInput.substr(0,1).toUpperCase() + rawInput.substring(1).toLowerCase();

   /*  console.log(capitalizedInput); /* debugging */

    /* Trim input */
    let trimmedInput = capitalizedInput.trim()

    console.log(trimmedInput); /* debugging */

    /* check if user has entered "Rock", "Paper" or "Scissors"
    If it has entered a valid weapon, assigns trimmedInput to userRPS*/

    let userRPS

    if (trimmedInput === "Rock" || trimmedInput === "Paper" || trimmedInput === "Scissors" ) {
        userRPS = trimmedInput;


        /* If user has entered "Rocks"  
        assign "Rock" to userRPS */
    } else if (trimmedInput === "Rocks" ) {
        userRPS = "Rock";
       
        /* If user has entered "Papers"  
        assign "Paper" to userRPS */
    } else if (trimmedInput === "Papers" ) {
        userRPS = "Paper";

        /* If user has entered "Scissor"  
        assign "Scissors" to userRPS */
    } else if (trimmedInput === "Scissor" ) {
        userRPS = "Scissors";        

        /* if user input is not a valid weapon, randomly select a weapon for the user
    using same process as applied under getComputerChoice function */

    } else { 
        let RandomNum = Math.ceil(Math.random()*3);
    /*     console.log(RandomNum); /* debugging */
    
        if (RandomNum === 1) {
            userRPS = "Rock"
        } else if (RandomNum === 2) {
            userRPS = "Paper"
        } else {
            userRPS = "Scissors"
        }
        console.log(userRPS);
        alert(`Sorry, "${rawInput}" is not a valid weapon! ${userRPS} has been selected for you.`)
    }

    return userRPS
}

/* playRound function.  requires two parameters
playerSelection and computerSelection*/

function playRound(computerSelection, playerSelection) {

    let result


    /* If both arguments are identical assign "Draw" to result variable.  Display message that round is drawn */
    if (computerSelection === playerSelection) {
        result = "Draw";
        alert(`The computer chose ${computerSelection}.  You chose ${playerSelection}. The round is drawn!`);

    /* If arguments are not equal, check if computer has selected "Rock".  
    If computer has selected "Rock", check User selection.  
    If User has selected "Scissors", assign "Lose" to result variable and display message to notify User of result.  
    Otherwise User must have selected "Paper". Assign "Win" to result variable  and display message to notify User of result.   */    
    } else if (computerSelection === "Rock") {
        if (playerSelection === "Scissors") {
            result = "Lose";
            alert(`The computer chose ${computerSelection}.  You chose ${playerSelection}. You Lose! Rock beats Scissors!`)
        } else {
            result = "Win";
            alert(`The computer chose ${computerSelection}.  You chose ${playerSelection}. You Win! Paper beats Rock!`)
        }

    /* If arguments are not equal, and computer did not select "Rock", check if computer has selected "Scissors".  
    If computer has selected "Scissors", check User selection.  
    If User has selected "Paper", assign "Lose" to result variable and display message to notify User of result.  
    Otherwise User must have selected "Rock".  Assign "Win" to result variable  and display message to notify User of result.   */
    } else if (computerSelection === "Scissors") {
        if (playerSelection === "Paper") {
            result = "Lose";
            alert(`The computer chose ${computerSelection}.  You chose ${playerSelection}. You Lose! Scissors beat Paper!`)
        } else {
            result = "Win";
            alert(`The computer chose ${computerSelection}.  You chose ${playerSelection}. You Win! Rock beats Scissors!`)
        }

    /* If arguments are not equal, and computer did not select "Rock" or "Scissors", computer must have selected "Paper".  
    Check User selection.  If User has selected "Rock", assign "Lose" to result variable and display message to notify User of result.  
    Otherwise User must have selected "Scissors".  Assign "Win" to result variable  and display message to notify User of result.    */
    } else {
        if (playerSelection === "Rock") {
            result = "Lose";
            alert(`The computer chose ${computerSelection}.  You chose ${playerSelection}. You Lose! Paper beats Rock!`)
        } else {
            result = "Win";
            alert(`The computer chose ${computerSelection}.  You chose ${playerSelection}. You Win! Scissors beats Paper!`)
        }
    }

    /* retun result variable */
/*     console.log(result); */
    return result;
}

/* playRound(getComputerChoice(), getUserChoice()) */;

/* add a function called game()

game() will:

    declare compScore and userScore variables to record scores;
    
    declare totalRounds and completedRounds variables to set the number of rounds 
    and record progress;

    declare roundResult and finalResult to record the outcome of each round / game;
    
    use a loop to call the playRound() function [i] times;

    assign values to compScore and userScore at the end of each loop;

    notify the user of the current score between each round using an alert 
    that references userScore and compScore;

    log the roundResult of each round in the console at the end of each loop;

    log the finalResult to the console after [i] loops;

    notify the user of the finalResult at the end of the game
 */


function game() {
/* declare variables*/
    let compScore = 0;
    let userScore = 0;
    let totalRounds = 2
    let completedRounds;
    let roundResult;
    let finalResult;

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

            alert(`Score Update - Round ${completedRounds}:
            
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

    alert(`FINAL SCORE:
    
                    The computer has ${compScore} points.  
                    You have ${userScore} points.
                    
                    ${finalResult}`)

}