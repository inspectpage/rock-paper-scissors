const score = document.querySelector(".score");
score.style.cssText = "color: black; background: white;"

const div = document.querySelector(".div");
div.style.cssText = "color: black; background: white;"

const result = document.querySelector(".result");
result.style.cssText = "color: black; background: white;"

const winner = document.querySelector(".winner");
score.style.cssText = "color: black; background: white;"

const btn1 = document.querySelector(".rock");
btn1.addEventListener("click", function() {
    playround(getComputerChoice(), "rock")
})

const btn2 = document.querySelector(".paper");
btn2.addEventListener("click", function() {
    playround(getComputerChoice(), "paper")
})

const btn3 = document.querySelector(".scissors");
btn3.addEventListener("click", function() {
    playround(getComputerChoice(), "scissors")
})

function getComputerChoice(){
    
    let min = Math.ceil(1);
    let max = Math.floor(4);
    let random = Math.floor(Math.random() * (max - min)+min)
    let Computerchoice;
    
    switch (random) {
        case 1:
            Computerchoice = "rock"
            break
        case 2:
            Computerchoice = "paper"
            break
        case 3:
            Computerchoice = "scissors"
            break
    }
    return Computerchoice;
}

let humanScore = 0;
let computerScore = 0; 

function playround(computer, human){

    result.textContent = `Computer chose: ${computer} vs Human chose: ${human}`
    if (computer == human) {
        div.textContent = "Tie!"
    }
        else if (computer == "rock" && human == "paper"){
            humanScore += 1;
            div.textContent = "Human Wins! Paper beats Rock!"
        }
        else if (computer == "rock" && human == "scissors"){
            computerScore += 1
            div.textContent = "Computer Wins! Rock beats Scissors!"
        }
        else if (computer == "paper" && human == "scissors"){
            humanScore += 1;
            div.textContent = "Human Wins! Scissors beats Paper!"
        }
        else if (computer == "paper" && human == "rock"){
            computerScore += 1
            div.textContent = "Computer Wins! Paper beats Rock!"
        }
        else if (computer == "scissors" && human == "rock"){
            humanScore += 1;
            div.textContent = "Human Wins! Rock beats Scissors!"
        }
        else if (computer == "scissors" && human == "paper"){
            computerScore += 1
            div.textContent = "Computer Wins! Scissors beat Paper"
        }
    score.textContent = `Human:${humanScore} Computer:${computerScore}`
    
    if (humanScore === 5){
        winner.textContent = "Game over, Human wins!";
        setTimeout(reset, 2000);
    }
    else if (computerScore === 5){
        winner.textContent = "Game over, Computer wins!";
        setTimeout(reset, 2000);  
    }
}

function reset(){
    humanScore = 0;
    computerScore = 0;
    div.textContent = "";
    winner.textContent = "";
    score.textContent = "";
    result.textContent = "";
}
