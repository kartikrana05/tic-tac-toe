let boxes=document.querySelectorAll(".box");
let resetBtn=document.querySelector('#reset');
let turnO=true; //playerX and playerO
let newGame=document.querySelector("#newG");
let msgContainer=document.querySelector(".msg-container");
let msg=document.querySelector("#msg");
const disableBoxes=()=>{
    for(let box of boxes){
        box.disabled=true;
    }
}
let count=0;

const resetGame=()=>{
    turnO=true;
    enableBoxes();
    msgContainer.classList.add("hide");
    count=0;
}
const enableBoxes=()=>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
    }
}
const showWinner=(winner)=>{
    msg.innerHTML=`Congratulation, winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disableBoxes();

}
const winPatterns=[
    [0,1,2],
[0,3,6],[0,4,8],[1,4,7],[2,5,8],[2,4,6],[3,4,5],[6,7,8]];
boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        console.log("box was clicked");
        count++;
        if(turnO){
            box.innerText="O";
            turnO=false;
        }
        else{
            box.innerText="X";
            turnO=true;
        }
        box.disabled= true;
        checkWinner();
    })
   
});
const draw=()=>{
    msg.innerText="It's a Draw!";
    msgContainer.classList.remove("hide");
}
 
const checkWinner=()=>{
    let winnerFound=false
    for(pattern of winPatterns){

        // console.log(pattern[0],pattern[1],pattern[2]);
        let pos1val=boxes[pattern[0]].innerText;
        let pos2val=boxes[pattern[1]].innerText;
        let pos3val=boxes[pattern[2]].innerText;
        if(pos1val!="" && pos2val!=" " && pos3val!=""){
            if(pos1val===pos2val && pos2val===pos3val){
                console.log("Winner Player",pos1val);
                showWinner(pos1val);
                winnerFound=true;
                break;
            }
          
           
        } 
        
    }
    console.log("Count",count);
    console.log("Winner Found",winnerFound);
    if (!winnerFound && count === 9) {
        console.log("It's a Draw!");
        draw();
    }
   
};
newGame.addEventListener("click",resetGame);
resetBtn.addEventListener("click",resetGame);