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
input will be case insensitive, will return prompt if the
input is not "rock" "paper" or "scissors" */
function getUserChoice() {
    let rawInput = prompt("Please choose your weapon!");

    console.log(rawInput); /* debugging */

    /* capitalise input string */

    let capitalizedInput = rawInput.substr(0,1).toUpperCase() + rawInput.substring(1).toLowerCase();

    console.log(capitalizedInput); /* debugging */

    /* check if user has entered Rocks, Paper or Scissors
    if any other answer provided generate error and ask them to choose again */



}

/* playRound function.  requires two parameters
playerSelection and computerSelection*/

function playRound(computerSelection, playerSelection) {

     

}