const numberOfVowels = function(data) {
  let number = 0;
  let vowels = ['a', 'e', 'i', 'o', 'u'];
  for (const alphabet of data) {
    if (vowels.includes(alphabet)) {
      number++;
    }
  }
  return number;
};

console.log(numberOfVowels("orange"));
console.log(numberOfVowels("lighthouse labs"));
console.log(numberOfVowels("aeiou"));