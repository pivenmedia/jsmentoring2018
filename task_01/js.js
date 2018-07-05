document.getElementById('container').innerHTML = "<h2>Krestiki Noliki</h2>";
const table = document.getElementById('gameField');
table.onclick = function(event) {
  const target = event.target;

  // цикл двигается вверх от target к родителям до table
  while (target !== table) {
    if (target.tagName === 'TD') {
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
let stateMatrix = [[" "," "," "],[" "," "," "],[" "," "," "]];
function resetGame() {
  stateMatrix = [[" "," "," "],[" "," "," "],[" "," "," "]];
}
function doMove(target) {
  var i,j;
  [i, j] = target.id.split('_').map(function(ind){ return +ind });
  console.log(target.id);
  console.log(stateMatrix.toString());
  console.log("i:" + i + ", j:" + j);
  if (stateMatrix[i][j] === " ") {
    stateMatrix[i][j] = getMove();
    target.innerHTML = stateMatrix[i][j];
    console.log(stateMatrix[i][j]);
  }
  checkWinner();
}
function checkWinner() {
  const row0 = [stateMatrix[0][0],stateMatrix[0][1],stateMatrix[0][2]].join("");
  const row1 = [stateMatrix[1][0],stateMatrix[1][1],stateMatrix[1][2]].join("");
  const row2 = [stateMatrix[2][0],stateMatrix[2][1],stateMatrix[2][2]].join("");
  const col0 = [stateMatrix[0][0],stateMatrix[1][0],stateMatrix[2][0]].join("");
  const col1 = [stateMatrix[0][1],stateMatrix[1][1],stateMatrix[2][1]].join("");
  const col2 = [stateMatrix[0][2],stateMatrix[1][2],stateMatrix[2][2]].join("");
  const diag0022 = [stateMatrix[0][0],stateMatrix[1][1],stateMatrix[2][2]].join("");
  const diag0220 = [stateMatrix[0][2],stateMatrix[1][1],stateMatrix[2][0]].join("");

  const states = [row0,row1,row2,col0,col1,col2,diag0022,diag0220];
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
let makeCurrentMoveGetter = function() {
  let mover = "X";
  return function() {
    if (makeCurrentMoveGetter.mover === "X") {
      makeCurrentMoveGetter.mover = "O";
    } else {
      makeCurrentMoveGetter.mover = "X";
    }
    return makeCurrentMoveGetter.mover;
  }
}
let getMove = makeCurrentMoveGetter();
