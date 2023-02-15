/* add function getComputerChoice to randomly 
return a string containing "Rock" "Paper" or 
"Scissors" */

function getComputerChoice() {
    let RandomNum = Math.ceil(Math.random()*3);
    console.log(RandomNum); /* debugging */

    let rPS;

    if (RandomNum === 1) {
        rPS = "Rock"
    } else if (RandomNum === 2) {
        rPS = "Paper"
    } else {
        rPS = "Scissors"
    }

    console.log(rPS); /* debugging */

    return rPS
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
    if any other answer provided generate pop-up and ask them to choose again */

    if (trimmedInput === "Rock" || trimmedInput === "Paper" || trimmedInput === "Scissors" ) {
        return trimmedInput;
    } else { 
        alert(`Sorry, "${rawInput}" is not a valid weapon!`)
    }

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