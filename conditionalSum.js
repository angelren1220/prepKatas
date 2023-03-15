const conditionalSum = function(values, conditions) {
  let sum = 0;
  if (values.length === 0) {
    return sum;
  }
  else {
    if (conditions === "even") {
      for (let i = 0; i < values.length; i++) {
        if (values[i] % 2 === 0) {
          sum += values[i];
        }
      }
      return sum;
    }
    else if (conditions === "odd") {
      for (let i = 0; i < values.length; i++) {
        if (values[i] % 2 !== 0) {
          sum += values[i];
        }
      }
      return sum;
    }
  }
};

console.log(conditionalSum([1, 2, 3, 4, 5], "even"));
console.log(conditionalSum([1, 2, 3, 4, 5], "odd"));
console.log(conditionalSum([13, 88, 12, 44, 99], "even"));
console.log(conditionalSum([], "odd"));