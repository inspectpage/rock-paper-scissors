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
