const repeatNumbers = function(data) {
  let string = "";

  for (let i = 0; i < data.length; i++) {
    for (let j = 0; j < data[i][1]; j++) {
      string += data[i][0];
    }
    string += " ,";
  }
  // remove the last comma
  string = string.slice(0, string.length - 2);
  return string;
};

console.log(repeatNumbers([[1, 10]]));
console.log(repeatNumbers([[1, 2], [2, 3]]));
console.log(repeatNumbers([[10, 4], [34, 6], [92, 2]]));