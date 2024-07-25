let boxes = document.querySelectorAll(".box");
let resetbtn = document.querySelector('#reset-btn');
let newgamebtn = document.querySelector('#new-btn');
let msgcontainer = document.querySelector('.msg-container');
let msg = document.querySelector('#msg');
let turnO = true;//playerX, playerO
const winpatterns =[
   [0,1,2],
   [0,3,6],
   [0,4,8],
   [1,4,7],
   [2,5,8],
   [2,4,6],
   [3,4,5],
   [6,7,8],
];

const resetgame = () =>{
  turnO = true;
  enabledboxes();
  msgcontainer.classList.add("hide");
}


boxes.forEach((box)=>{
  box.addEventListener("click",()=>{
    if(turnO){
box.innerText = "O";
box.classList.add('O');
turnO = false; 
    }else{
box.innerText="X"; 
box.classList.remove('O');
turnO = true;

}
box.disabled = true;
checkwinner();
  });                                                                                                  
});

const disabledboxes = ()=>{
  for(let box of boxes) {
    box.disabled = true;
  }
}

const enabledboxes = ()=>{
  for(let box of boxes) {
    box.disabled = false;
    box.innerText = " ";
  }
}



const showWinner = (winner) => {
msg.innerText = `Congratulations , Winner is Player ${winner}`;
msgcontainer.classList.remove("hide");
disabledboxes();
};
const checkwinner = ()=>{
   for(let pattern of winpatterns){
    let pos1val = boxes[pattern[0]].innerText;
    let pos2val = boxes[pattern[1]].innerText;
    let pos3val = boxes[pattern[2]].innerText;
    if(pos1val != "" && pos2val != "" && pos3val !=""){
      if(pos1val === pos2val && pos2val === pos3val){
        showWinner(pos1val);
      }         
    }
   }                                                                                                 
}

newgamebtn.addEventListener("click" ,()=>{
  resetgame();

})
resetbtn.addEventListener("click" ,()=>{
  resetgame();

})