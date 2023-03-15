// const urlEncode = function(text) {
//   const subString = (text.trim()).split(' ');
//   return string = subString.join("%20");
// };

const urlEncode = function(text) {
  let string = "";
  // remove leading and ending spaces
  if (text[0] === " ") {
    text = text.slice(1, text.length);
  }
  if (text[text.length - 1] === " ") {
    text = text.slice(0, text.length - 1);
  }

  // convert whitespcae to %20
  for (let i = 0; i < text.length; i++) {
    if (text[i] === " ") {
      let temp = text.slice(0, i);
      text = temp + "%20" + text.slice(i + 1, text.length);
    }
  }
  return text;
};

console.log(urlEncode("Lighthouse Labs"));
console.log(urlEncode(" Lighthouse Labs "));
console.log(urlEncode("blue is greener than purple for sure"));