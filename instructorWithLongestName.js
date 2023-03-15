const instructorWithLongestName = function(instructors) {
  for (let i = 0; i < instructors.length - 1; i++) {
    if (instructors[i].name.length > instructors[i + 1].name.length) {
      let temp = instructors[i];
      instructors[i] = instructors[i + 1];
      instructors[i + 1] = temp;
      i = -1;
    }
  }
  return instructors[instructors.length - 1];
};

console.log(instructorWithLongestName([
  { name: "Samuel", course: "iOS" },
  { name: "Jeremiah", course: "Web" },
  { name: "Ophilia", course: "Web" },
  { name: "Donald", course: "Web" }
]));
console.log(instructorWithLongestName([
  { name: "Matthew", course: "Web" },
  { name: "David", course: "iOS" },
  { name: "Domascus", course: "Web" }
]));