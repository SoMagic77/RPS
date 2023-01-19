function getComputerChoice(){
    let random = Math.floor(Math.random() * 3)
    if(random == 0){rSelection
        aiAns = "Rock"
    }
    else if(random == 1){
        aiAns = "Paper"
    }
    else if(random == 2){
        aiAns = "Scissors"
    }
    else{
        aiAns = "UhOh"
    }
    return aiAns
}
getComputerChoice()
let answer = prompt("Rock, Paper, or Scissors?")
let playerSelection = answer.toLowerCase()
let computerSelection = aiAns.toLowerCase()
console.log(playerSelection)
console.log(computerSelection)
function round(computerSelection,playerSelection){
    if(computerSelection === playerSelection){
        return "Tie!"
    }
    else if(computerSelection === "rock" && playerSelection === "scissors"){
        return "You Lost! Rock beats Scissors!"
    }
    else if(computerSelection === "paper" && playerSelection === "rock"){
        return "You Lost! Paper beats Rock!"
    }
    else if(computerSelection === "scissors" && playerSelection === "paper"){
        return "You Lost! Scissors beats Paper!"
    }
    else if(computerSelection === "rock" && playerSelection === "paper"){
        return "You Won! Paper beats Rock!"
    }
    else if(computerSelection === "paper" && playerSelection === "Scissors"){
        return "You Won! Scissors beats Paper!"
    }
    else if(computerSelection === "scissors" && playerSelection === "rock"){
        return "You Won! Rock beats Scissors!"
    }
}

console.log(round())


