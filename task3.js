let someNumbers = [4, 5, 6, 78, 2, 3, 45, 34, 2, 23, 5, 45, 6, 7, 23];

const testnum1 = 3;
const testnum2 = 5;
const testnum3 = 60;
const testnum4 = 90;

// Use some() to check if any of the numbers in the array are divisible by the testnum variables
// depending on whether there is at least one multiple of that number in the array.

if (someNumbers.some(num => num % testnum1 === 0)) {
  console.log("There is at least one multiple of 3 in the array.");
} else {
  console.log("There are no multiples of 3 in the array.");
}
if (someNumbers.some(num => num % testnum2 === 0)) {
  console.log("There is at least one multiple of 5 in the array.");
} else {
  console.log("There are no multiples of 5 in the array.");
}
if (someNumbers.some(num => num % testnum3 === 0)) {
  console.log("There is at least one multiple of 60 in the array.");
} else {
  console.log("There are no multiples of 60 in the array.");
}
if (someNumbers.some(num => num % testnum4 === 0)) {
  console.log("There is at least one multiple of 90 in the array.");
} else {
  console.log("There are no multiples of 90 in the array.");
}