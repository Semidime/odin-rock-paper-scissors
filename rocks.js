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

    console.log(rawInput); /* debugging */

    /* capitalise input string */

    let capitalizedInput = rawInput.substr(0,1).toUpperCase() + rawInput.substring(1).toLowerCase();

    console.log(capitalizedInput); /* debugging */

    /* Trim input */
    let trimmedInput = capitalizedInput.trim()

    console.log(trimmedInput); /* debugging */

    /* check if user has entered "Rock", "Paper" or "Scissors"
    if any other answer provided generate pop-up and ask them to choose again */

    if (trimmedInput === "Rock" || trimmedInput === "Paper" || trimmedInput === "Scissors" ) {
        return trimmedInput;
    } else { 
        alert(`Sorry "${rawInput}" is not a valid weapon!`)
    }

}

/* playRound function.  requires two parameters
playerSelection and computerSelection*/

function playRound(computerSelection, playerSelection) {

     

}