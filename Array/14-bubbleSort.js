
// Analogy: Paani mein bubbles upar aate hain — waise hi bada element baar baar
//  swap hoke end mein pahunch jaata hai.


function bubbleSort(arr) {
  let n = arr.length;

  for (let i = 0; i < n; i++) {
    let swapped = false;

    for (let j = 0; j < n - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        swapped = true;
      }
    }

    if (!swapped) break;
  }

  return arr;
}

// Test
console.log(bubbleSort([5, 3, 2, 4, 1]));
