const organizeInstructors = function(instructors) {
  let organized = {};
  for (let instructor of instructors) {
    if (organized[instructor.course] == null) {
      let names = [];
      organized[instructor.course] = names;
      names.push(instructor.name);
    }
    else {
      organized[instructor.course].push(instructor.name);
    }
  }

  return organized;

};

console.log(organizeInstructors([
  { name: "Samuel", course: "iOS" },
  { name: "Victoria", course: "Web" },
  { name: "Karim", course: "Web" },
  { name: "Donald", course: "Web" }
]));
console.log(organizeInstructors([
  { name: "Brendan", course: "Blockchain" },
  { name: "David", course: "Web" },
  { name: "Martha", course: "iOS" },
  { name: "Carlos", course: "Web" }
]));