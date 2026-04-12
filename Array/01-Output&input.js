let num = Number(prompt("enter the number"));

if (isNaN(num)) {
  console.log("invalid input");
} else {
  console.log("the number is " + num);
}

let array = new Array(5);

for (let i = 0; i < array.length; i++) {
  let num = Number(prompt("enter the number for index " + i));
  if (isNaN(num)) {
    console.log("invalid input for index " + i);
  } else {
    array[i] = num;
  }
}
console.log(array);
