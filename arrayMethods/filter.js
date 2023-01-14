const items = [
  { name: "bike", price: 2000 },
  { name: "bike", price: 20 },
  { name: "bike", price: 200 },
  { name: "bike", price: 3000 },
  { name: "bike", price: 5000 },
  { name: "bike", price: 8000 },
  { name: "bike", price: 2000 },
  { name: "bike1", price: 2000 },
];

const filtered = items.forEach((item) => {
  return item.name === "bike";
});
console.log(filtered);

const total = items.reduce((currentTotal, item) => {
  return item.price + currentTotal;
}, 0);
console.log(total);

const people = [
  { name: "rajesh", age: 22 },
  { name: "rajesh", age: 21 },
  { name: "rajesh", age: 23 },
  { name: "rajesh", age: 22 },
];

const result = people.reduce((groupedName, item) => {
  const age = item.age;
  if (groupedName[age] == null) groupedName[age] = [];
  groupedName[age].push(item);
  return groupedName;
}, {});
console.log(result);
console.log(null == undefined);
