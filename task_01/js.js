document.getElementById('container').innerHTML = "<h2>Krestiki Noliki</h2>";
var table;
table = document.getElementById('gameField');
table.onclick = function(event) {
  var target = event.target;

  // цикл двигается вверх от target к родителям до table
  while (target != table) {
    if (target.tagName == 'TD') {
      // нашли элемент, который нас интересует!
      doMove(target);
      return;
    }
    target = target.parentNode;
  }

  // возможна ситуация, когда клик был вне <td>
  // если цикл дошёл до table и ничего не нашёл,
  // то обработчик просто заканчивает работу
}
var stateMatrix = table.dataset.stateMatrix;
stateMatrix = [[" "," "," "],[" "," "," "],[" "," "," "]];
function resetGame() {
  stateMatrix = [[" "," "," "],[" "," "," "],[" "," "," "]];

}
function doMove(target) {
  var i,j;
  [i, j] = target.id.split('_').map(function(ind){ return +ind });
  console.log(target.id);
  console.log(stateMatrix.toString());
  console.log("i:" + i + ", j:" + j);
  if (stateMatrix[i][j] == " ") {
    target.innerHTML = stateMatrix[i][j] = getMove();
    console.log(stateMatrix[i][j]);
  }
  checkWinner();
}
function checkWinner() {
  var row0 = [stateMatrix[0][0],stateMatrix[0][1],stateMatrix[0][2]].join("");
  var row1 = [stateMatrix[1][0],stateMatrix[1][1],stateMatrix[1][2]].join("");
  var row2 = [stateMatrix[2][0],stateMatrix[2][1],stateMatrix[2][2]].join("");
  var col0 = [stateMatrix[0][0],stateMatrix[1][0],stateMatrix[2][0]].join("");
  var col1 = [stateMatrix[0][1],stateMatrix[1][1],stateMatrix[2][1]].join("");
  var col2 = [stateMatrix[0][2],stateMatrix[1][2],stateMatrix[2][2]].join("");
  var diag0022 = [stateMatrix[0][0],stateMatrix[1][1],stateMatrix[2][2]].join("");
  var diag0220 = [stateMatrix[0][2],stateMatrix[1][1],stateMatrix[2][0]].join("");

  var states = [row0,row1,row2,col0,col1,col2,diag0022,diag0220];
  console.log("states: " + states.toString());

  if (states.includes("XXX")) {
    console.log("X - win! Congrats!!!");
    alert("X - win! Congrats!!!");
    return;
  }
  if (states.includes("OOO")) {
    console.log("O - win! Congrats!!!");
    alert("O - win! Congrats!!!");
  }

}
function makeCurrentMoveGetter() {
  var mover = "X";
  return function() {
    if (this.mover === "X") {
      this.mover = "O";
    } else {
      this.mover = "X";
    }
    return this.mover;
  }
}
var getMove = makeCurrentMoveGetter();
