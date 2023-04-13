let queue = [
  "catHorse",
  "dogPig",
  "catHorse",
  "dogPig",
  "kangarooBear",
  "dogPig",
  "catHorse",
  "catHorse",
  "dogPig",
];

const unofficialQueue = [
  "rabbitSalmon",
  "rabbitSalmon",
  "rabbitSalmon",
  "rabbitSalmon",
];

queue.push("catHorse");
console.log(queue);

queue.shift("catHorse");
console.log(queue);

queue.unshift("owlDonkey");
console.log(queue);

queue.pop("catHorse");
console.log(queue);

queue.splice(4, 1);
console.log(queue);

queue.push(...unofficialQueue);
console.log(queue);