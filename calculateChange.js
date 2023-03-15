const calculateChange = function(total, cash) {
  let amountOfChange = cash - total;
  let change = {};
  if (amountOfChange / 2000 >= 1) {
    change.twentyDollar = Math.floor(amountOfChange / 2000);
    amountOfChange %= 2000;
  }

  if (amountOfChange / 1000 >= 1) {
    change.tenDollar = Math.floor(amountOfChange / 1000);
    amountOfChange %= 1000;
  }

  if (amountOfChange / 500 >= 1) {
    change.fiveDollar = Math.floor(amountOfChange / 500);
    amountOfChange %= 500;
  }

  if (amountOfChange / 200 >= 1) {
    change.twoDollar = Math.floor(amountOfChange / 200);
    amountOfChange %= 200;
  }

  if (amountOfChange / 100 >= 1) {
    change.oneDollar = Math.floor(amountOfChange / 100);
    amountOfChange %= 100;
  }

  if (amountOfChange / 25 >= 1) {
    change.quarter = Math.floor(amountOfChange / 25);
    amountOfChange %= 25;
  }

  if (amountOfChange / 10 >= 1) {
    change.dime = Math.floor(amountOfChange / 10);
    amountOfChange %= 10;
  }

  if (amountOfChange / 5 >= 1) {
    change.nickel = Math.floor(amountOfChange / 5);
    amountOfChange %= 5;
  }

  change.penny = amountOfChange;

  return change;
};

console.log(calculateChange(1787, 2000));
console.log(calculateChange(2623, 4000));
console.log(calculateChange(501, 1000));