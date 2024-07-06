let choices = document.querySelectorAll(".choice");


choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    })
})

let genComputerChoice = () => {
    const options = ["rock", "paper", "scissor"];
    const random = Math.floor(Math.random() * 3);
    return options[random];
}

let playGame = (userChoice) => {
    const computerChoice = genComputerChoice();
    if (computerChoice === userChoice) {
        alert("Draw");
    } else {
        let userWin = true;
        if (userChoice === "rock") {
            userWin = computerChoice === "paper" ? false : true;
        } else if (userChoice === "paper") {
            userWin = computerChoice === "scissor" ? false : true;
        } else {
            userWin = computerChoice === "rock" ? false : true;
        }
        Winner(userWin, userChoice, computerChoice);
    }
}

let Winner = (userWin, userChoice, computerChoice) => {
    if (userWin === true) {
        alert(`you win! your choice ${userChoice} beats ${computerChoice}`)
    } else {
        alert(`you loss! computer choice ${computerChoice} beats ${userChoice}`)
    }
}

