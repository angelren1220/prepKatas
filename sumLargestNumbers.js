// const sumLargestNumbers = function(data) {
//   data.sort((a, b) => {return a - b});
//   return data[data.length-1] + data[data.length-2];
// };

const sumLargestNumbers = function(data) {
  // sort array
  for (let i = 0; i < data.length - 1; i++) {
    if (data[i] > data[i + 1]) {
      let temp = data[i];
      data[i] = data[i + 1];
      data[i + 1] = temp;

      i = -1;
    }
  }
  return data[data.length - 1] + data[data.length - 2];
};

console.log(sumLargestNumbers([1, 10]));
console.log(sumLargestNumbers([1, 2, 3]));
console.log(sumLargestNumbers([10, 4, 34, 6, 92, 2]));