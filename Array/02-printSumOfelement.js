let arr = [1, 2, 3, 4, 5];
let sum = 0;
function sumElement(num) {
  if (num.length === 0) {
    return "array is empty";
  }
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}

console.log(sumElement(arr));
