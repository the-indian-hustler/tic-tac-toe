const boxes = document.querySelectorAll('.box');
const winner = document.getElementById('winner');
const scoreone = document.getElementById('you');
const scoretwo = document.getElementById('computer');

let YourScore = 0;
let ComputerScore = 0;

function computer(){
  const arr = ["rock","paper","scissor"];
  return arr[Math.floor(Math.random()*3)];
}

const checkWinner = (elementId,computerId) =>{
  if(elementId == computerId){
    return "Draw";
  }
  else if((elementId == "rock" && computerId == "paper") || (elementId == "paper" && computerId == "scissor") || (elementId == "scissor" && computerId == "rock")){
    return "Computer Won";
  }
  else{
    return "You Won";
  }
}

boxes.forEach((box) => {
  box.addEventListener('click', (event) => {
    const elementId = event.target.id;
    const computerId = computer();
    let answer = checkWinner(elementId, computerId);
    winner.innerText = `${answer + "," + "Your Choice : " + elementId + " " + "Computer Choice : " + computerId}`;
    if(answer === "You Won"){
      YourScore++;
    }
    else if(answer === "Computer Won"){
      ComputerScore++;
    }
    scoreone.innerText = YourScore;
    scoretwo.innerText = ComputerScore;

  });
});