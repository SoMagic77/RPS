function getComputerChoice(){
    let random = Math.floor(Math.random() * 3)
    if(random == 0){
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