const multiplicationTable = function(maxValue) {
  let string = "";
  for (let i = 1; i <= maxValue; i++) {
    for (let j = 1; j <= maxValue; j++) {
      string += i * j + " ";
    }
    string += "\n";
  }
  return string;
};

console.log(multiplicationTable(1));
console.log(multiplicationTable(5));
console.log(multiplicationTable(10));