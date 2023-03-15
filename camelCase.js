const camelCase = function(input) {
  for (let i = 0; i < input.length; i++) {
    if (input[i] === " ") {
      let tempFront = input.slice(0, i);
      let upper = input.charAt(i + 1).toUpperCase();
      let tempBack = input.slice(i + 2, input.length);
      input = tempFront + upper + tempBack;
    }
  }
  return input;
};

console.log(camelCase("this is a string"));
console.log(camelCase("loopy lighthouse"));
console.log(camelCase("supercalifragalisticexpialidocious"));
