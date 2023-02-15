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

    return rPS
}