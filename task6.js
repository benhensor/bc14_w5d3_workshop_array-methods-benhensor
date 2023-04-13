const broomCupboard = [2, 4, 1, 3, 7, 5, 8, 6, 10, 9, 0];

console.log(broomCupboard.sort());

const potions = [
  { name: "polyjuice potion", shelf: 2 },
  { name: "draught of living death", shelf: 4 },
  { name: "pepperup potion", shelf: 1 },
  { name: "veritaserum", shelf: 3 },
];

console.log(potions.sort(function(a, b){return b.shelf - a.shelf}));

const students = [
  "Cedric Diggory",
  "Padma Patil",
  "Lucius Malfoy",
  "Seamus Finnigan",
  "Lavender Brown",
  "Luna Lovegood",
  "Gregory Goyle",
];

// sort the students alphabetically by last name

// const sortedStudents = [];
// const firstName = students.split(' ')[1];
// const lastName = students.split(' ')[1];
// lastName.sort((a, b) => a - b);


// console.log(sortedStudents);

// sort the students alphabetically by last name
// COPILOTS SOLUTION
const sortedStudents = students.sort(function(a, b){
  const [aFirst, aLast] = a.split(' ');
  const [bFirst, bLast] = b.split(' ');
  return aLast > bLast ? 1 : -1;
}
);

console.log(sortedStudents);
