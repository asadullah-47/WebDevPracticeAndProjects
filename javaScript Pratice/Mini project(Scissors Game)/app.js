let userScore = 0;
let compScore = 0;
let msg = document.querySelector("#msg");

const choices = document.querySelectorAll(".choice");
const userScorePara =document.querySelector("#user-score");
const compScorePara =document.querySelector("#comp-score");

const genCompChoice = () => {
  const option = ["rock", "paper", "scissors"];
  const randIdx = Math.floor(Math.random() * 3);
  return option[randIdx];
  //reock, paper, scissor
};
const drawGame = () => {
//   console.log("Match was draw");
  msg.innerText="Match was Draw!. Play again";
  msg.style.backgroundColor = "#084B83";
};
const showWinner =(userWin, userChoice, compChoice) =>{
    if(userWin){
        userScore++;
        userScorePara.innerText = userScore;
        // console.log("You win")
        msg.innerText=`You Win! Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor ="green";
    } else{
        compScore++;
        compScorePara.innerText = compScore;
        // console.log("You Lost");
        msg.innerText=`You Lost! ${compChoice} beats Your ${userChoice}`;
        msg.style.backgroundColor ="red";
        
    }
}
const playGame = (userChoice) => {
//   console.log("userChoice =", userChoice);

  //Genereate computer choice
  const compChoice = genCompChoice();
//   console.log("computer Choice =", compChoice);

  if (userChoice === compChoice) {
    // Draw Game
    drawGame();
  } else {
    let userWin = true;
    if (userChoice === "rock") {
      //scissors , rock
      userWin = compChoice === "paper" ? false : true;
    } else if (userChoice === "paper") {
        // rock, scissors
      userWin = compChoice === "scissors" ? false : true;
    }else {
        // rock , paper
        userWin= compChoice === "rock" ? false :true;
    }
    showWinner(userWin, userChoice, compChoice);
  }
};

choices.forEach((choice) => {
//   console.log(choice);
  choice.addEventListener("click", () => {
    const userChoice = choice.getAttribute("id");
    // console.log("Choices was clicked", userChoice);
    playGame(userChoice);
  });
});
