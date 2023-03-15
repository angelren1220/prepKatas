const isLetter = function(char) {
  if (typeof char === 'string' &&
    char.toLowerCase() === char.toUpperCase()
    && char.length === 1) {
    return false;
  }
  return true;
};

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

const pascalCase = function(input) {
  for (let i = 0; i < input.length; i++) {
    if (input[i] === " ") {
      let tempFront = input.slice(0, i);
      let upper = input.charAt(i + 1).toUpperCase();
      let tempBack = input.slice(i + 2, input.length);
      input = tempFront + upper + tempBack;
    }
  }
  let upper = input[0].toUpperCase();
  let tempBack = input.slice(1, input.length);
  input = upper + tempBack;

  return input;
};

const snakeCase = function(input) {
  for (let i = 0; i < input.length; i++) {
    if (input[i] === " ") {
      let tempFront = input.slice(0, i);
      let sub = "_";
      let tempBack = input.slice(i + 1, input.length);
      input = tempFront + sub + tempBack;
    }
  }
  return input;
};

const kebabCase = function(input) {
  for (let i = 0; i < input.length; i++) {
    if (input[i] === " ") {
      let tempFront = input.slice(0, i);
      let sub = "-";
      let tempBack = input.slice(i + 1, input.length);
      input = tempFront + sub + tempBack;
    }
  }
  return input;
};

const titleCase = function(input) {
  for (let i = 0; i < input.length; i++) {
    if (input[i] === " ") {
      let tempFront = input.slice(0, i + 1);
      let upper = input.charAt(i + 1).toUpperCase();
      let tempBack = input.slice(i + 2, input.length);
      input = tempFront + upper + tempBack;
    }
  }
  let upper = input[0].toUpperCase();
  let tempBack = input.slice(1, input.length);
  input = upper + tempBack;

  return input;
};

const upperCase = function(input) {
  let newString = "";
  for (let char of input) {
    let temp;
    if (isLetter(char)) {
      temp = char.toUpperCase();
    }
    else {
      temp = char;
    }
    newString += temp;
  }
  return newString;
};

const lowerCase = function(input) {
  let newString = "";
  for (let char of input) {
    let temp;
    if (isLetter(char)) {
      temp = char.toLowerCase();
    }
    else {
      temp = char;
    }
    newString += temp;
  }
  return newString;
};

const vowelCase = function(input) {
  let newString = "";
  let vowels = ["a", "e", "i", "o", "u",
    "A", "E", "I", "O", "U"];
  for (let char of input) {
    let temp;
    if (isLetter(char) && vowels.includes(char)) {
      temp = char.toUpperCase();
    }
    else {
      temp = char;
    }
    newString += temp;
  }
  return newString;
};

const consonantCase = function(input) {
  let newString = "";
  let vowels = ["a", "e", "i", "o", "u",
    "A", "E", "I", "O", "U"];
  for (let char of input) {
    let temp;
    if (isLetter(char) && !vowels.includes(char)) {
      temp = char.toUpperCase();
    }
    else {
      temp = char;
    }
    newString += temp;
  }
  return newString;
};

const chooseCase = function(input, token) {
  switch (token) {
    case "camel":
      return camelCase(input);
    case "pascal":
      return pascalCase(input);
    case "snake":
      return snakeCase(input);
    case "kebab":
      return kebabCase(input);
    case "title":
      return titleCase(input);
    case "vowel":
      return vowelCase(input);
    case "consonant":
      return consonantCase(input);
    case "upper":
      return upperCase(input);
    case "lower":
      return lowerCase(input);
  }
};

const makeCase = function(input, token) {
  let result;
  let order1 = ["camel", "pascal", "snake", "kebab", "title"];
  let order2 = ["vowel", "consonant"];
  let order3 = ["upper", "lower"];
  if (Array.isArray(token)) {
    for (let i = 0; i < token.length; i++) {
      if (order3.includes(token[i])) {
        let temp = token[token.length - 1];
        token[token.length - 1] = token[i];
        token[i] = temp;
      }
      if (order1.includes(token[i])) {
        let temp = token[0];
        token[0] = token[i];
        token[i] = token[0];
      }
    }

    result = chooseCase(input, token[0]);

    for (let i = 1; i < token.length; i++) {
      result = chooseCase(result, token[i]);
    }
  }

  else {
    result = chooseCase(input, token);
  }
  return result;
};


console.log(makeCase("this is a string", "camel"));
console.log(makeCase("this is a string", "pascal"));
console.log(makeCase("this is a string", "snake"));
console.log(makeCase("this is a string", "kebab"));
console.log(makeCase("this is a string", "title"));
console.log(makeCase("this is a string", "vowel"));
console.log(makeCase("this is a string", "consonant"));
// console.log(makeCase("this is a string", "upper"));
// console.log(makeCase("THIS IS A STRING", "lower"));
console.log(makeCase("this is a string", ["upper", "snake"]));