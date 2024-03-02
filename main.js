let userScore = 0;
let compScore = 0;

// let user = prompt("Enter your Name :)");
// let userName = document.querySelector("#name");

// const displayName = (user) => {
//     userName.innerText = "user";
// }


const choices =  document.querySelectorAll(".choice");

const msg = document.querySelector("#msg");
const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");


const genCompChoice = () => {
    const options = ["rock" , "paper","scissors"];
    const randIdx = Math.floor(Math.random() * 3);
    return options[randIdx];
};

const drawGame = () =>{
    msg.innerText = "Game was Draw.Play again!!";
    msg.style.backgroundColor = "#35374B";
};

const showWinner = (userWin ,userChoice,compChoice) =>{
    if(userWin){
        userScore++;
        userScorePara.innerText = userScore;
        msg.innerText = 'You won!';
        msg.style.backgroundColor = "#99BC85";
    }
   
    
    else{
        compScore++;
        compScorePara.innerText = compScore ;
        msg.innerText = 'You lost';
        msg.style.backgroundColor = "#D24545";
    }

};



const playGame = (userChoice) => {
    const compChoice = genCompChoice () ;  
    console.log("computer choice = " ,compChoice);


    if (userChoice === compChoice){
        drawGame();
    }
    else{
        let userWin = true;
        if(userChoice === "rock"){
            //Scissors, Paper
            userWin = compChoice === "paper" ? false :true;
        }
        else if (userChoice === "paper"){
            //rock,scissors
            userWin = compChoice === "scissors" ? false : true;
        }
        else{
            //rock,paper
            userWin = compChoice === "rock" ? false :true;
        }
        showWinner(userWin,userChoice,compChoice);
    }
};

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});
