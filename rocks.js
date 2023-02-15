/* add function getComputerChoice to randomly 
return a string containing "Rock" "Paper" or 
"Scissors" */

function getComputerChoice() {
    let RandomNum = Math.ceil(Math.random()*3);
    console.log(RandomNum); /* debugging */

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
    let rawInput = prompt('Please choose your weapon!');

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

    /* if user input is not a valid weapon, randomly select a weapon for the user
    using same process as applied under getComputerChoice function */

    } else { 
        let RandomNum = Math.ceil(Math.random()*3);
        console.log(RandomNum); /* debugging */
    
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
    return result;
}

playRound(getComputerChoice(), getUserChoice());