//Utilizing Map (Transform each element inside an array)
/*Example*/
function mapFunction() {
  const numArray = [1, 2, 3, 4];
  const triple = numArray.map((a) => a * 3);
  return "The tripled values are: " + triple;
}
console.log(mapFunction());
/*Challenge*/
function fahrenheit() {
  const celcius = [0, 20, 30];
  const fahrenheit = celcius.map((b) => b * 1.8 + 32);
  return "Fahrenheit is: " + fahrenheit;
}
console.log(fahrenheit());
/*Challenge*/
function ageIncrease() {
  const ages = [12, 15, 18, 20, 21, 25];
  const ageIncrease = ages.map((a) => a + 1);
  return "After a year, the age is now: " + ageIncrease;
}
console.log(ageIncrease());
//Utilizing Filter (Creates a New Array that contains the element that can pass a test)
function adultAge() {
  const rowofAge = [11, 12, 15, 17, 18, 25, 19, 23];
  const adults = rowofAge.filter((rowofAge) => rowofAge >= 18);
  return adults;
}
console.log(adultAge());
/*Challenge*/
function evenNumbers() {
  const numbers = [1, 4, 7, 10, 13, 16, 19, 22];
  const evenNumbers = numbers.filter((numbers) => numbers % 2 === 0);
  return evenNumbers;
}
console.log(evenNumbers());
/*Challenge (Filter with String)*/
function longNames() {
  const names = ["Sid", "Samantha", "Raj", "Jonathan", "Alia", "Catherine"];
  // Your filter code here
  const lengthlongerthanFive = names.filter((name) => name.length > 5);
  return lengthlongerthanFive;
}
console.log(longNames());
/*Challenge (Filter starting with 'a')*/
function namesEndingWithA() {
  const names = ["Anna", "Raj", "Alia", "Jonathan", "Samantha", "Tom"];
  // Your filter code here
  const filterWitha = names.filter((name) => name.endsWith("a"));
  return filterWitha;
}
console.log(namesEndingWithA());
//Utilzing Filter Method (Accumalate all the values in an array then reduce to a single value)//
/*Example*/
function reduceEx() {
  const numbers = [1, 2, 3, 4, 5, 6];
  const sum = numbers.reduce((a, b) => a + b, 0);
  return sum;
}
console.log(reduceEx());
/*Example Flattening Arrays*/
function flattened() {
  const arrays = [
    [1, 2],
    [3, 4],
    [5, 6],
  ];
  const flattened = arrays.reduce(
    (accumlator, currentValue) => accumlator.concat(currentValue),
    []
  );
  return flattened;
}
console.log(flattened());
/*Example of counting occurences*/
function occurence() {
  const fruits = [
    "apples",
    "oranges",
    "mangoes",
    "apples",
    "cherries",
    "oranges",
  ];
  const count = fruits.reduce((accumlator, currentValue) => {
    accumlator[currentValue] = (accumlator[currentValue] || 0) + 1;
    return accumlator;
  }, {});
  return count;
}
console.log(occurence());
