const boxes = document.querySelectorAll(".box");
const reset = document.getElementById("reset");
const  container = document.getElementById('message-container');
const newGame = document.getElementById('newgame');
let count = 0;

const winningPatterns = [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];


let player1 = true;
let gameActive = true;

boxes.forEach((box) => {
    box.addEventListener('click',() => {
      if(!gameActive || box.innerText !== "") return;
      count++;
      if(player1){
        box.innerText = 'X';
        player1 = false;
      }
      else{
        box.style.color = 'green';
        box.innerText = 'O';
        player1 = true;
      }

      checkWinner();
    });
});


const checkWinner = () => {
  for(let pattern of winningPatterns){
    let pos1 = boxes[pattern[0]].innerText;
    let pos2 = boxes[pattern[1]].innerText;
    let pos3 = boxes[pattern[2]].innerText;

    if(pos1 != "" && pos2 != "" && pos3 != ""){
      if(pos1 === pos2 && pos2 === pos3){
        if(player1)container.innerText = "Player 1 won";
        else{
          container.innerText = "Player 2 won";
        } 
        gameActive = false;
        toggleVisibility(newGame, true);
        return;
        
      }
    }
  }
  if(count === 9){
    container.innerText = "Draw";
    gameActive = false;
    toggleVisibility(newGame,true);
  }
};

reset.addEventListener('click',()=>{
  boxes.forEach((box)=>{
    box.innerText = "";
  })
  gameActive = true;
  player1 = true;
  container.innerText = "";
  toggleVisibility(newGame, false);
  count = 0;
})


newGame.addEventListener('click', () => {
  boxes.forEach((box) => {
      box.innerText = "";
  });
  gameActive = true;
  player1 = true;
  container.innerText = "";
  toggleVisibility(newGame, false); 
  count = 0;
});

const toggleVisibility = (element, visible) => {
  if(visible) {
      element.style.display = 'block';
  } else {
      element.style.display = 'none';
  }
};
