const generateBoard = function(whiteQueen, blackQueen) {
  const row = new Array(8).fill(0);
  const board = [];
  for (let i = 0; i < 8; i++) {
    // When constructing 2D array
    // explicitly declare each entry in board as an array.
    board[i] = new Array(8).fill(0);
  }
  if (Array.isArray(whiteQueen)) {
    board[whiteQueen[0]][whiteQueen[1]] = 1;
  }

  if (Array.isArray(blackQueen)) {
    board[blackQueen[0]][blackQueen[1]] = 1;
  }

  return board;
};

const queenThreat = function(generatedBoard) {
  let canFight = false;
  let tempR, tempC;
  for (let i = 0; i < generatedBoard.length; i++) {
    for (j = 0; j < generatedBoard[i].length; j++) {
      if (generatedBoard[i][j] === 1) {
        if (tempR === undefined && tempC === undefined) {
          tempR = i;
          tempC = j;
        }
        else {
          if (i === tempR || j === tempC) {
            canFight = true;
          }
          if (Math.abs(i - tempR) === Math.abs(j - tempC)) {
            canFight = true;
          }
        }
      }
    }
  }
  return canFight;
};

let whiteQueen = [0, 5];
let blackQueen = [5, 0];
let generatedBoard = generateBoard(whiteQueen, blackQueen);
console.log(generatedBoard);
console.log(queenThreat(generatedBoard));

// let whiteQueen = [0, 0];
// let blackQueen = [5, 7];
// let generatedBoard = generateBoard(whiteQueen, blackQueen);
// console.log(generatedBoard);
// console.log(queenThreat(generatedBoard));


