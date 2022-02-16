let playerFirst = document.getElementById("player_1");
let playerSecond = document.getElementById("player_2");
let gameBar = document.getElementById("game_bar");

let result = document.getElementById("result");
let squares = document.getElementsByClassName("square");
let player;

let step = 1;
function NewGame(){
  StartStyle();
  for(i=0;i<squares.length;i++){
    squares[i].innerHTML = '';
    counter.innerHTML = 0;
    step = 1;
    result.innerHTML="";
    squares[i].classList.remove('active_square_1'); 
    squares[i].classList.remove('active_square_2'); 
    gameBar.style.backgroundColor = "#0d0e10";
  }  
  squares[0].setAttribute("onclick","squareClicked(squares[0])");
  squares[1].setAttribute("onclick","squareClicked(squares[1])");
  squares[2].setAttribute("onclick","squareClicked(squares[2])");
  squares[3].setAttribute("onclick","squareClicked(squares[3])");
  squares[4].setAttribute("onclick","squareClicked(squares[4])");
  squares[5].setAttribute("onclick","squareClicked(squares[5])");
  squares[6].setAttribute("onclick","squareClicked(squares[6])");
  squares[7].setAttribute("onclick","squareClicked(squares[7])");
  squares[8].setAttribute("onclick","squareClicked(squares[8])");
}

function StartStyle(){
  playerFirst.classList.add("active_1");
  playerSecond.classList.remove("active_2");
}
function EndStyle(){
  result.innerHTML=player + "<br> Has won"
  playerFirst.classList.remove("active_1");
  playerSecond.classList.remove("active_2");
  for (w=0; w<squares.length; w++){
    squares[w].removeAttribute('onclick') 
  }
  if(player == "Player 1"){
    gameBar.style.backgroundColor = "rgba(1, 221, 150, 0.6)";
  } 
  else{
    gameBar.style.backgroundColor = "rgba(6, 98, 155, 0.6)";
  } 
}

function draw() {
  result.innerHTML="Draw"
  playerFirst.classList.remove("active_1");
  playerSecond.classList.remove("active_2");
  for (w=0; w<squares.length; w++){
    squares[w].removeAttribute('onclick') 
}
  gameBar.style.backgroundColor = "#ffbf00";
}

function squareClicked(click){
  counter.innerHTML = step;
  if(step%2==0){
    click.innerHTML = "O";
    playerFirst.classList.add("active_1");
    playerSecond.classList.remove("active_2");
    click.classList.add("active_square_2");
    player="Player 2";
    endGame(player);
  }
  else{
    click.innerHTML ="X";
    playerSecond.classList.add("active_2");
    playerFirst.classList.remove("active_1");
    click.classList.add("active_square_1");
    player="Player 1";
    endGame(player);
  }
  step++
  click.removeAttribute("onclick")
}
function endGame(player){

  let x0 = squares[0].innerHTML,
      x1 = squares[1].innerHTML,
      x2 = squares[2].innerHTML,
      x3 = squares[3].innerHTML,
      x4 = squares[4].innerHTML,
      x5 = squares[5].innerHTML,
      x6 = squares[6].innerHTML,
      x7 = squares[7].innerHTML,
      x8 = squares[8].innerHTML

  if      (x0 == x1 && x1 == x2 && x1 !='') {EndStyle(player, squares[0], squares[1], squares[2])}
  else if (x3 == x4 && x4 == x5 && x4 !='') {EndStyle(player, squares[3], squares[4], squares[5])}
  else if (x6 == x7 && x7 == x8 && x7 !='') {EndStyle(player, squares[6], squares[7], squares[8])}
  else if (x0 == x3 && x3 == x6 && x3 !='') {EndStyle(player, squares[0], squares[3], squares[6])}
  else if (x1 == x4 && x4 == x7 && x4 !='') {EndStyle(player, squares[1], squares[4], squares[7])}
  else if (x2 == x5 && x5 == x8 && x5 !='') {EndStyle(player, squares[2], squares[5], squares[8])}
  else if (x0 == x4 && x4 == x8 && x4 !='') {EndStyle(player, squares[0], squares[4], squares[8])}
  else if (x2 == x4 && x4 == x6 && x4 !='') {EndStyle(player, squares[2], squares[4], squares[6])}
  else if (x0 !='' && x1 !='' && x2 !='' && x3 !='' && x4 !='' && x5 !='' && x6 !='' && x7 !='' && x8 !=''){draw()}
}
