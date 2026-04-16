// Problem: Count frequency of each element
// arr = [1, 2, 2, 3, 3, 3, 4]
// Output: {1:1, 2:2, 3:3, 4:1}

function frequencyCounter(arr) {
  const freq = new Map();

  for (let num of arr) {
    // agar pehle se hai toh +1, nahi hai toh 1 set karo
    freq.set(num, (freq.get(num) || 0) + 1);
  }

  return freq;
}
console.log(frequencyCounter([1, 2, 2, 3, 3, 3]));

// 🔍 Dry Run — arr = [1, 2, 2, 3, 3, 3]:
// num=1: map={1:1}
// num=2: map={1:1, 2:1}
// num=2: map={1:1, 2:2}
// num=3: map={1:1, 2:2, 3:1}
// num=3: map={1:1, 2:2, 3:2}
// num=3: map={1:1, 2:2, 3:3}  ✅

// Time: O(n)  |  Space: O(n)
