const urlDecode = function(text) {
  let strings = text.split("&");
  let code = {};
  for (let string of strings) {
    let pair = string.split("=");
    let key = pair[0];
    let valueStrings = pair[1].split("%20");
    let value = "";
    for (let valueString of valueStrings) {
      value += " " + valueString;
    }
    code[key] = value;
  }
  return code;
};

console.log(urlDecode("duck=rubber"));
console.log(urlDecode("bootcamp=Lighthouse%20Labs"));
console.log(urlDecode("city=Vancouver&weather=lots%20of%20rain"));
console.log(urlDecode("city=Vancouver&weather=lots%20of%20rain").weather);