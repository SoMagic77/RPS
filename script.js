function getComputerChoice(){
    let random = Math.floor(Math.random() * 3)
    if(random == 0){
        aiAns = "rock"
    }
    else if(random == 1){
        aiAns = "paper"
    }
    else if(random == 2){
        aiAns = "scissors"
    }
    else{
        aiAns = "UhOh"
    }
    return aiAns
}
let playerScore = 0
let computerScore = 0
function round(computerSelection,playerSelection){
    if(computerSelection == playerSelection){
        return "Tie!"
    }
    else if(computerSelection == "rock" && playerSelection == "scissors"){
        computerScore++
        return "You Lost! Rock beats Scissors!"
    }
    else if(computerSelection == "paper" && playerSelection == "rock"){
        computerScore++
        return "You Lost! Paper beats Rock!"
    }
    else if(computerSelection == "scissors" && playerSelection == "paper"){
        computerScore++
        return "You Lost! Scissors beats Paper!"
    }
    else if(computerSelection == "rock" && playerSelection == "paper"){
        playerScore++
        return "You Won! Paper beats Rock!"
    }
    else if(computerSelection == "paper" && playerSelection == "Scissors"){
        playerScore++
        return "You Won! Scissors beats Paper!"
    }
    else if(computerSelection == "scissors" && playerSelection == "rock"){
        playerScore++
        return "You Won! Rock beats Scissors!"
    }
}
function game(){
        let answer = prompt("Rock, Paper, or Scissors?")
        getComputerChoice()
        let playerSelection = answer.toLowerCase()
        let computerSelection = aiAns.toLowerCase()
        console.log(round(computerSelection, playerSelection))
        console.log("player " + playerScore + " and computer " + computerScore)
}


