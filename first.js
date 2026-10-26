let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg =document.querySelector("#msg");
const userScorepara= document.querySelector("#user-score");
const compScorepara= document.querySelector("#comp-score");

const genCompChoice= ()=>{
    const options=["rock", "paper","scissors"];
    const randIDX=Math.floor(Math.random() * 3);
    return options[randIDX];
};
const drawGame=()=>{
    msg.innerText="Game was Draw. Play again";
     msg.style.backgroundColor="#1E1233"
};

const showWinner= (userWin, userChoice, compChoice)=>{
    if(userWin){
        userScore++;
        userScorepara.innerText= userScore;
        msg.innerText=`You win! ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor="#F355FF"
    } else {
        compScore++;
        compScorepara.innerText= compScore;
        msg.innerText=`You lost! ${compChoice} beats your ${userChoice}`;
         msg.style.backgroundColor="red"
    }
};

const playGame=(userChoice)=>{
    console.log("user choice = ", userChoice);
    //generate comp choice
    const compChoice=genCompChoice();
    console.log("comp choice=",compChoice);

    if (userChoice === compChoice) {
        drawGame();
        
    } else {
        let userWin = true;
        if(userChoice === "rock"){
         //scissors paper
        userWin = compChoice === "paper" ? false : true;
    } else if(userChoice===paper){
        //rock sissors
        userWin = compChoice ==="sissors" ? false: true;
    }else{
        //rock  paper
        userWin = compChoice ==="rock"?false:true;
    }
    showWinner(userWin, userChoice, compChoice);
  } 
};

choices.forEach((choice)=>{
    choice.addEventListener("click",() =>{
        const userChoice= choice.getAttribute("id");
        playGame(userChoice);
    })
})