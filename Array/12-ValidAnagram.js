let s = "anagram";
let r = "nagaram";
// let index = 0;

const findAnagram = (s, r) => {
  // Step 1: Length check
  if (s.length !== r.length) return false;

  // Step 2: s ki frequency map
  const map = new Map();
  for (let char of s) {
    map.set(char, (map.get(char) || 0) + 1);
  }

  // Step 3: r se frequency ghata do
  for (let char of r) {
    map.set(char, (map.get(char) || 0) - 1);
  }

  // Step 4: koi bhi value 0 se alag? → false
  for (let value of map.values()) {
    if (value !== 0) return false;
  }

  return true;
};

console.log(findAnagram("anagram", "nagaram")); // true
console.log(findAnagram("rat", "car")); // false

console.log(findAnagram(s, r));
