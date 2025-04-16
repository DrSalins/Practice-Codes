// JavaScript Coding Challenges
// Difficulty: Easy to Hard

// 1. Print all even numbers from 0 to 10
// Output: 0, 2, 4, 6, 8, 10
function printEvenNumbers() {
  let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  for (let x of numbers) {
    if (x % 2 === 0) {
      console.log(x);
    }
  }
}
printEvenNumbers();

// 2. Create a function that converts kilometers to miles
// Formula: miles = kilometers * 0.621371
function convertKmToMiles(kilometers) {
  // Your code here
  miles = kilometers * 0.621371;
  console.log(miles);
}
convertKmToMiles(1);

// 3. Print a multiplication table from 1 to 10
// Output: 1x1=1, 1x2=2, ..., 10x10=100
function printMultiplicationTable() {
  // Your code here
  for (i = 1; i <= 10; i++) {
    for (j = 1; j <= 10; j++) {
      console.log(`${i}*${j} = ${i * j}`);
    }
  }
}
printMultiplicationTable();

// 4. Find the largest number in an array
// Input: [3, 7, 2, 9, 5]
// Output: 9
function findLargestNumber(arr) {
  // Your code here
  let largestNum = arr[0];
  for (let x of arr) {
    if (x > largestNum) {
      largestNum = x;
    }
  }
  console.log(largestNum);
}
findLargestNumber([1, 2, 3, 4]);

// 5. Check if a string is a palindrome
// Input: "racecar"
// Output: true
function isPalindrome(str) {
  // Your code here
  for (let i = 0; i < str.length / 2; i++) {
    if (str[i] !== str[str.length - 1 - i]) {
      return false;
    }
  }
  return true;
}
console.log(isPalindrome("racecar"));

// 6. Remove duplicates from an array
// Input: [1, 2, 2, 3, 4, 4, 5]
// Output: [1, 2, 3, 4, 5]
function removeDuplicates(arr) {
  // Your code here
  return arr.filter((item, index) => arr.indexOf(item) === index);
}
console.log(removeDuplicates([1, 2, 3, 3, 4, 4, 5]));

// 7. Calculate the factorial of a number
// Input: 5
// Output: 120
function factorial(n) {
  // Your code here
  let result = 1;
  for (let i = n; i >= 1; i--) {
    result *= i;
    console.log(result);
  }
}
factorial(5);

// 8. Implement a function to reverse a string
// Input: "hello"
// Output: "olleh"
function reverseString(str) {
  // Your code here
  str = str.split("").reverse();
  console.log(str.join(""));
}
reverseString("Hello");

// 9. Find the longest word in a sentence
// Input: "The quick brown fox jumps over the lazy dog"
// Output: "jumps"
function findLongestWord(sentence) {
  // Your code here
  let newSentence = sentence.split(" ");
  let longestWord = [];
  for (let i = 0; i < newSentence.length; i++) {
    if (newSentence[i].length > longestWord.length) {
      longestWord = newSentence[i];
    }
  }
  console.log(longestWord);
}
findLongestWord("I love Chocolate");
// 10. Count the number of vowels in a string
// Input: "hello world"
// Output: 3
function countVowels(str) {
  // Your code here
  let sentence = str.toLowerCase().split("");
  let vowels = "aeiou";
  let count = 0;
  for (let i = 0; i < sentence.length; i++) {
    if (vowels.includes(sentence[i])) {
      count++;
    }
  }
  console.log(count);
}
countVowels("Siddarth Salins Mudaliar");

// 11. Implement the FizzBuzz problem
// For numbers from 1 to 100:
// - Print "Fizz" for multiples of 3
// - Print "Buzz" for multiples of 5
// - Print "FizzBuzz" for multiples of both 3 and 5
function fizzBuzz(num) {
  // Your code here
  if (num % 3 == 0 && num % 5 == 0) {
    console.log("FizzBuzz");
  } else if (num % 5 == 0) {
    console.log("Buzz");
  } else if (num % 3 == 0) {
    console.log("Fizz");
  } else {
    console.log("None");
  }
}
fizzBuzz(100);
// 12. Check if two strings are anagrams
// Input: "listen", "silent"
// Output: true
function areAnagrams(str1, str2) {
  // Your code here
  str1 = str1.toLowerCase().split("").sort().join("");
  str2 = str2.toLowerCase().split("").sort().join("");
  console.log(str1);
  console.log(str2);
  if (str1 === str2) {
    return true;
  } else {
    return false;
  }
}
console.log(areAnagrams("listen", "silent"));
// 13. Implement a function to flatten a nested array
// Input: [1, [2, [3, [4]], 5]]
// Output: [1, 2, 3, 4, 5]
function flattenArray(arr) {
  // Your code here
  return arr.flat(5);
}
console.log(flattenArray([1, [2, [3, [4]], 5]]));

// 14. Find the missing number in an array of 1 to n
// Input: [1, 2, 4, 5, 6]
// Output: 3
function findMissingNumber(arr) {
  // Your code here
  let n = arr.length + 1;
  let expectedSum = (n * (n + 1)) / 2;
  let actualSum = arr.reduce((sum, num) => sum + num, 0);
  let missingNum = expectedSum - actualSum;
  console.log(missingNum);
}
findMissingNumber([1, 2, 3, 4, 5, 6, 8, 9, 10]);

// 15. Implement a function to debounce another function
// Debounce ensures a function is only called after a certain delay
function debounce(func, delay) {
  // Your code here
}
