let prompt = require("prompt-sync")();

// code below (replace this example)
const randomNumber = function(max) {
  return Math.floor(Math.random() * max);
};
const alreadyGuessed = function(number, guesses) {
  for (let i = 0; i < guesses.length; i++) {
    if (guesses[i] === number) {
      return true;
    }
  }
  return false;
};

let number = randomNumber(100);
// console.log(number);
let guesses = [];
let answer;
while (answer !== number) {
  answer = parseInt(prompt("Guess a number: "));
  // console.log(answer);
  if (Number.isNaN(answer)) {
    console.log("Not a number! Try again!");
  }
  else {
    if (!alreadyGuessed(answer, guesses)) {
      guesses.push(answer);
      if (answer - number > 0) {
        console.log("Too High!");
      }
      else if (answer - number < 0) {
        console.log("Too Low!");
      }
      else if (answer === number) {
        console.log("You got it! You took " + guesses.length + " attempts!");
      }
    }
    else {
      console.log("Already Guessed!");
    }
  }
}
