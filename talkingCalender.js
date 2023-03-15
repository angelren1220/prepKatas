const talkingCalendar = function(date) {
  let dateStrings = date.split("/");
  const months = [
    "January",
    "Feburary",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
  ];

  let year = dateStrings[0];
  let month = months[Number(dateStrings[1] - 1)];
  let day = Number(dateStrings[2]);
  if (day % 10 === 1) {
    day += "st";
  }
  else if (day % 10 === 2) {
    day += "nd";
  }
  else if (day % 10 === 3) {
    day += "rd";
  }
  else {
    day += "th";
  }

  return month + " " + day + ", " + year;
};

console.log(talkingCalendar("2017/12/02"));
console.log(talkingCalendar("2007/11/11"));
console.log(talkingCalendar("1987/08/24"));
console.log(talkingCalendar("2022/01/23"));