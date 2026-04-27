function lengthOfLongestSubstring(s) {
  // Step 1: Map aur variables banao
  const map = new Map();
  let left = 0; // window start
  let maxLen = 0; // answer store karo

  for (let right = 0; right < s.length; right++) {
    const char = s[right];

    // Step 2: Duplicate check karo
    if (map.has(char) && map.get(char) >= left) {
      left = map.get(char) + 1; // window shrink
    }

    // Step 3: Map update karo
    map.set(char, right);

    // Step 4: maxLen update karo
    maxLen = Math.max(maxLen, right - left + 1);
  }

  return maxLen;
}

console.log(lengthOfLongestSubstring("asdfghzcvzxczxc"));
