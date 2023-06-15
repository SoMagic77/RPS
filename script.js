function getComputerChoice(){
    let random = Math.floor(Math.random() * 3)
    if(random == 0){
        computerSelection = "rock"
    }
    else if(random == 1){
        computerSelection = "paper"
    }
    else if(random == 2){
        computerSelection = "scissors"
    }
    else{
        computerSelection = "UhOh"
    }
    return computerSelection
}
let playerScore = 0
let computerScore = 0
const playerpts = document.querySelector('#playerpts')
const computerpts = document.querySelector('#computerpts')
function round(computerSelection,playerSelection){
    if(computerSelection == playerSelection){
        return "Tie!"
    }
    else if(computerSelection == "rock" && playerSelection == "scissors"){
        computerpts.textContent = ++computerScore
        return "You Lost! Rock beats Scissors!"
    }
    else if(computerSelection == "paper" && playerSelection == "rock"){
        computerpts.textContent = ++computerScore
        return "You Lost! Paper beats Rock!"
    }
    else if(computerSelection == "scissors" && playerSelection == "paper"){
        computerpts.textContent = ++computerScore
        return "You Lost! Scissors beats Paper!"
    }
    else if(computerSelection == "rock" && playerSelection == "paper"){
        playerpts.textContent = ++playerScore
        return "You Won! Paper beats Rock!"
    }
    else if(computerSelection == "paper" && playerSelection == "scissors"){
        playerpts.textContent = ++playerScore
        return "You Won! Scissors beats Paper!"
    }
    else if(computerSelection == "scissors" && playerSelection == "rock"){
        playerpts.textContent = ++playerScore
        return "You Won! Rock beats Scissors!"
    }
}
function game(){
        let answer = prompt("Rock, Paper, or Scissors?")
        getComputerChoice()
        let playerSelection = answer.toLowerCase()
        let computerSelection = computerSelection.toLowerCase()
        console.log(round(computerSelection, playerSelection))
        console.log("player " + playerScore + " and computer " + computerScore)
}

const rock = document.querySelector('#rock')
const paper = document.querySelector('#paper')
const scissors = document.querySelector('#scissors')
rock.addEventListener('click',() => {
    let playerSelection = 'rock'
    let computerSelection = getComputerChoice()
    console.log(round(computerSelection, playerSelection))
});
paper.addEventListener('click',() => {
    let playerSelection = 'paper'
    let computerSelection = getComputerChoice()
    console.log(round(computerSelection, playerSelection))
});
scissors.addEventListener('click',() => {
    let playerSelection = 'scissors'
    let computerSelection = getComputerChoice()
    console.log(round(computerSelection, playerSelection))

});





