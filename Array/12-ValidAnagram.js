let s = "anagram";
let r = "nagaram";
let index = 0;

const findAnagram = (s, r) => {
  if (s.length !== r.length) {
    return false;
  }

  for (let i = 0; i < s.length; i++) {
    while (index < r.length - 1) {
      if (s.charAt(i) !== r.charAt(j)) {
        return false;
      }
    }
  }
  return true;
};

console.log(findAnagram(s, r));
