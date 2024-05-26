let userScore=0;
let compScore=0;
const msg=document.querySelector("#msg")
const userScorePara=document.querySelector("#user-score")
const compScorePara=document.querySelector("#comp-score")

let choices=document.querySelectorAll(".choice");
choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const userChId=choice.getAttribute("id")
        playGame(userChId)
    });
});

const genComp=()=>{
    const options=["rock","paper","scissor"];
    const ranIdx=Math.floor(Math.random()*3);
    return options[ranIdx];
}

const drawGame=()=>{
    console.log("GAME IS DRAW")
    msg.innerText="It's a Draw. Play Again"
    msg.style.backgroundColor="LightSlateGray"

}

const showWinner=(userWin,userChId,compChId)=>{
    if(userWin){
        userScore=userScore+1;
        userScorePara.innerText=userScore;
        console.log("YOU WIN!")
        msg.innerText=`You Win! Your ${userChId} beats Computer's ${compChId}`
        msg.style.backgroundColor="SeaGreen"
    }
    else{
        compScore=compScore+1;
        compScorePara.innerText=compScore;
        console.log("YOU LOSE!")
        msg.innerText=`You Lose! Computer's ${compChId} beats Your ${userChId}`
        msg.style.backgroundColor="Salmon"
    }
}

const playGame=(userChId)=>{
    console.log("user choice=",userChId)
    const compChId=genComp();
    console.log("comp choice=",compChId)
    if(userChId===compChId){
       drawGame();
    }
    else{
        let userWin=true;
        if(userChId==="rock"){
            userWin=compChId==="paper"?false:true;
        }
        else if(userChId==="paper"){
            userWin=compChId==="scissor"?false:true;
        }
        else{
            userWin=compChId=="rock"?false:true;
        }
        showWinner(userWin,userChId,compChId)
    }
}

