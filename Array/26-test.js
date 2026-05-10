// Q1. (Easy)
// Ek array diya hai, usmein se duplicate elements hata ke naya array return karo.
// Input:  [1, 2, 2, 3, 4, 4, 5]
// Output: [1, 2, 3, 4, 5]

const arr = [1, 2, 2, 3, 4, 4, 5];
function findDupli(arr) {
  let set = new Set(arr);
  return [...set];
}
console.log(findDupli(arr));

// (Easy-Medium)
// Ek string diya hai, check karo ki wo palindrome hai ya nahi.
// Input:  "racecar"
// Output: true

// Input:  "hello"
// Output: false

function palimdrone(str) {
  let st = 0;
  let end = str.length - 1;
  
  while (st < end) {
    if (str[st] !== str[end]) {
      return false;
    }
    st++;
    end--;
  }
  return true;
}

console.log(palimdrone("hello"));

// Q3. (Medium)
// Ek array mein second largest number find karo (duplicates ignore karo).
// Input:  [10, 5, 20, 20, 8]
// Output: 10
// let arr = [10, 5, 20, 20, 8];

let arr2 = [10, 5, 20, 20, 8];
function findSecoundLargest(arr2) {
  let firstMax = -Infinity;
  let secondMax = -Infinity;

  for (let i = 0; i < arr2.length; i++) {
    if (arr2[i] > firstMax) {
      secondMax = firstMax;
      firstMax = arr2[i];
    } else if (arr2[i] < firstMax && secondMax < arr2[i]) {
      secondMax = arr2[i];
    }
  }
  return secondMax;
}
console.log(findSecoundLargest(arr2));

// Q4. (Medium)
// Ek string mein har word ko reverse karo, but word ka order same rakho.
// Input:  "hello world"
// Output: "olleh dlrow"
