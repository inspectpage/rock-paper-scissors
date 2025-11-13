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

function getHumanChoice(){
    let Humanchoice = prompt();
    return Humanchoice;
}

function playGame(){
    let humanScore = 0
    let computerScore = 0;
    
    function playround(computer, human){
    human = human.toLowerCase();
    console.log(`Computer chose:${computer} vs Human chose:${human}`)
    if (computer == human) {
        console.log("Tie!")
    }
        else if (computer == "rock" && human == "paper"){
            humanScore += 1;
            console.log("Human Wins! Paper beats Rock!")
        }
        else if (computer == "rock" && human == "scissors"){
            computerScore += 1
            console.log("Computer Wins! Rock beats Scissors!")
        }
        else if (computer == "paper" && human == "scissors"){
            humanScore += 1;
            console.log("Human Wins! Scissors beats Paper!")
        }
        else if (computer == "paper" && human == "rock"){
            computerScore += 1
            console.log("Computer Wins! Paper beats Rock!")
        }
        else if (computer == "scissors" && human == "rock"){
            humanScore += 1;
            console.log("Human Wins! Rock beats Scissors!")
        }
        else if (computer == "scissors" && human == "paper"){
            computerScore += 1
            console.log("Computer Wins! Scissors beat Paper")
        }
    }
    playround(getComputerChoice(), getHumanChoice())
    playround(getComputerChoice(), getHumanChoice())
    playround(getComputerChoice(), getHumanChoice())
    playround(getComputerChoice(), getHumanChoice())
    playround(getComputerChoice(), getHumanChoice())
    console.log(`Computer Scored ${computerScore}\nHuman Scored ${humanScore}`)
}

playGame()