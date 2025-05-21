let boxes=document.querySelectorAll(".box");
let reset=document.querySelector("#reset");
let msgContainer=document.querySelector(".msg-container");
let msg=document.querySelector("#msg");
let newGameBtn=document.querySelector("#newGame");
let turnContainer=document.querySelector(".turn-container");
let turn0=true;

const winPattern=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
];


//reset game:
const resetGame=() => {
    turn0=true;
    msgContainer.style.display="none";
    document.querySelector(".bg").style.left="0";
    boxes.forEach((box) => {
        box.disabled=false;
        box.innerText="";  
    });
};

//newgame:
const newGame=() => {
    turn0=true;
    msgContainer.style.display="none";
    turnContainer.style.display="grid";
    document.querySelector(".bg").style.left="0px";
    boxes.forEach((box) => {
        box.disabled=false;
        box.innerText="";
        box.style.backgroundColor="";
    });
};


turnFor=() => {
    boxes.forEach((box) => {
       
    if(turn0){
        document.querySelector(".bg").style.left="85px";
    
    }
    else{
        document.querySelector(".bg").style.left="0px";
    } });
}

boxes.forEach((box) => {
box.addEventListener("click", () => {
// console.log("box is clicked");
if (turn0){//playerO
    box.innerText="O";
    turnFor();
    box.style.fontSize="80px";
    turn0=false;
}
else{//playerX
    turnFor();
    box.innerText="X";
    box.innerHTML="<b>X</b>";
    turn0=true;
}
box.disabled=true;

checkWinner();

})
});

const checkWinner=() => {
 for (let pattern of winPattern){
    // console.log(pattern[0],pattern[1],pattern[2]);
    // console.log(boxes[pattern[0]].innerText,boxes[pattern[1]].innerText,boxes[pattern[2]].innerText);
    let pos1Val=boxes[pattern[0]].innerText;
    let pos2Val=boxes[pattern[1]].innerText;        
    let pos3Val=boxes[pattern[2]].innerText;    
    if (pos1Val==pos2Val && pos2Val==pos3Val && pos1Val!=""){
        // alert("Player "+pos3Val+" is the winner");
        boxes[pattern[0]].style.backgroundColor="green";
        boxes[pattern[1]].style.backgroundColor="green";
        boxes[pattern[2]].style.backgroundColor="green";
        showWinner(pos1Val);
        return;
       
    }
 }
};

const showWinner=(winnerVal) => {
    msgContainer.style.display="block";
    turnContainer.style.display="none";
    msg.innerText=`Congratulations🥳, Player ${winnerVal} is the winner!`;
    boxes.forEach((box) => {
        box.disabled=true;
    });
};

reset.addEventListener("click", () => { 
    resetGame();
});

newGameBtn.addEventListener("click", () => { 
    newGame();
});


