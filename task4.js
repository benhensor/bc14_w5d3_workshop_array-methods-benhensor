// 👉 4a. Using the `.every()` method, check that every number in the `sevenTimesTable` array is a multiple of `7`.
// 👉 4b. Check if every number in the `seventySevenTimesTable` array is a multiple of `77` using the `.every()` method.

let sevenTimesTable = [7, 14, 21, 28, 35, 42, 49, 56, 63, 70];
let seventySevenTimesTable = [77, 154, 231, 308, 385, 461, 538, 616, 693, 770];

console.log(sevenTimesTable.every((currentValue) => currentValue % 7 === 0));

console.log(seventySevenTimesTable.every((currentValue) => currentValue % 77 === 0));

console.log(seventySevenTimesTable.find((currentValue) => currentValue % 77 !== 0));

console.log(seventySevenTimesTable.findIndex((currentValue) => currentValue % 77 !== 0));