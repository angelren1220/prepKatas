const squareCode = function(message) {
  let string = message.split(' ').join('');
  let len = string.length;
  let colNum = Math.ceil(Math.sqrt(len));
  let rowNum = Math.ceil(len / colNum);
  let rowString = [];
  let squareString = "";

  for (let i = 0; i < string.length; i += colNum) {
    if (i + colNum <= string.length) {
      rowString.push((string.slice(i, i + colNum)).split(""));
    }
    else {
      rowString.push((string.slice(i, string.length)).split(""));
    }
  }

  for (let i = 0; i < colNum; i++) {
    let temp = "";
    for (let j = 0; j < rowNum; j++) {
      if (rowString[j][i] !== undefined) {
        temp += rowString[j][i];
      }
    }
    squareString += temp + " ";
  }

  return squareString;
};

console.log(squareCode("chill out"));
console.log(squareCode("feed the dog"));
console.log(squareCode("have a nice day"));
console.log(squareCode("if man was meant to stay on the ground god would have given us roots"));

