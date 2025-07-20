let userscore=0;
let compscore=0;
const choices=document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");

 userscorepara=document.querySelector("#user-score");
 compscorepara=document.querySelector("#comp-score");

const genCompChoice=()=>{
    const options=["rock","paper","scissor"];
    const randomIdx=Math.floor(Math.random()*3);
    return options[randomIdx];
};
const drawGame=()=>{
    msg.innerText="Game was draw.Try again";
    msg.Style.backgroundColor="#081b31";
};
const showWinner=(userWin,userChoice,compChoice)=>{
    if(userWin){
        userscore++;
        userscorepara.innerText=userscore;
        msg.innerText=(`You win! your ${userChoice} beats ${compChoice}.`);
        msg.style.backgroundColor="#008000";
    }
    else{
        compscore++;
        compscorepara.innerText=compscore;
         msg.innerText=(`You lost ${compChoice} beats ${userChoice}.`);
        msg.style.backgroundColor="#ff0000";
    }
};
const playGame=(userChoice)=>{
   const compChoice=genCompChoice();
   if(compChoice===userChoice){
    drawGame();
   }
   else {
    let userWin=true;
    if(userChoice=="rock"){
        userWin=compChoice=="paper"?false:true;
    }else if(userChoice=="paper"){
        userWin=compChoice=="scissor"?false:true;
    }else{
        userWin=compChoice=="rock"?false:true;
    }
    showWinner(userWin,userChoice,compChoice);
   }
};



choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const userChoice=choice.getAttribute("id");
        playGame(userChoice);
    });
});