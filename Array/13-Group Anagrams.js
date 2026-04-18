const strs = ["eat", "tea", "tan", "ate", "nat", "bat"];

function groupAnagrams(strs) {
  // step 1 create a map
  const map = new Map();
  // 2 loop
  for (let word of strs) {
    // create key
    const key = word.split("").sort().join("");
    if (!map.has(key)) {
      map.set(key, []);
    }
    // push words
    map.get(key).push(word);
  }
  //   return map value
  return [...map.values()];
}

console.log(groupAnagrams(strs));
