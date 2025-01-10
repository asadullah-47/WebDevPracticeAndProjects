let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-button");
let newGameBtn = document.querySelector("#new-button");
let msgContainer = document.querySelector(".message-container");
let msg = document.querySelector("#msg");
let turnO = true; //playerx ,PlayerO
let  count = 0;
const winPatterns = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8],
  
];

const matchDraw = (count) =>{
 if(count === 9){
  drawContainer.classList.remove("matchDraw")
 }
}

const resetGame = () => {
  turnO = true;
  msgContainer.classList.add("hide");
  enableleBoxes();
};

boxes.forEach((box) => {
  box.addEventListener("click", () => {
  
    if (turnO == true) {
      //PlayerO
      box.innerText = "O";
      turnO = false;
      box.style.color = "#084B83";
    } else {
      box.innerText = "X";
      //   box.style.innerText.color ="red";
      turnO = true;
    }
    box.disabled = true;
    count++;
    let isWinner = checkWinner();
     if(count ===9 && !isWinner){
      gameDraw();
     }

  });
});
const gameDraw = () => {
  msg.innerText = `Game was a Draw.`;
  msgContainer.classList.remove("hide");
  disableBoxes();
};
// Disable game when the winner print
const disableBoxes = () => {
  for (let box of boxes) {
    box.disabled = true;
  }
};
const enableleBoxes = () => {
  for (let box of boxes) {
    box.disabled = false;
    box.innerText = "";
  }
};

const showWinner = (winner) => {
  msg.innerText = `Congratulations, winner is ${winner}`;
  msgContainer.classList.remove("hide");
  disableBoxes();
};
const checkWinner = () => {
  for (let pattern of winPatterns) {
    let pos1Val = boxes[pattern[0]].innerText;
    let pos2Val = boxes[pattern[1]].innerText;
    let pos3Val = boxes[pattern[2]].innerText;

    if (pos1Val != "" && pos2Val != "" && pos3Val != "") {
      if (pos1Val === pos2Val && pos2Val === pos3Val) {
        showWinner(pos1Val);
      }
    }
  }
};

newGameBtn.addEventListener("click", resetGame);
resetBtn.addEventListener("click", resetGame);
