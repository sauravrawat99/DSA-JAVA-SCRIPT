// ============================================
// BRUTE FORCE — O(n³)
// ============================================
function containsAll(sub, t) {
  const tMap = new Map();
  for (let char of t) {
    tMap.set(char, (tMap.get(char) || 0) + 1);
  }
  for (let char of sub) {
    if (tMap.has(char)) {
      tMap.set(char, tMap.get(char) - 1);
    }
  }
  for (let val of tMap.values()) {
    if (val > 0) return false;
  }
  return true;
}

function minWindow_Brute(s, t) {
  let minWindow = "";

  for (let i = 0; i < s.length; i++) {
    for (let j = i + 1; j <= s.length; j++) {
      const sub = s.substring(i, j);

      if (containsAll(sub, t)) {
        if (minWindow === "" || sub.length < minWindow.length) {
          minWindow = sub;
        }
      }
    }
  }

  return minWindow;
}

// ============================================
// OPTIMIZED — Sliding Window O(n + m)
// ============================================
function minWindow_Optimized(s, t) {
  // Step 1: t ki frequency map
  const tMap = new Map();
  for (let char of t) {
    tMap.set(char, (tMap.get(char) || 0) + 1);
  }

  // Step 2: Variables
  let left = 0;
  let minLen = Infinity;
  let minStart = 0;
  let required = tMap.size; // kitne unique chars chahiye
  let formed = 0;           // kitne mil gaye

  const wMap = new Map();   // window frequency map

  // Step 3: Right pointer badhao
  for (let right = 0; right < s.length; right++) {
    const char = s[right];
    wMap.set(char, (wMap.get(char) || 0) + 1);

    // Char ki frequency match hui?
    if (tMap.has(char) && wMap.get(char) === tMap.get(char)) {
      formed++;
    }

    // Step 4: Saare chars mile? Left badhao!
    while (formed === required) {
      // Minimum window track karo
      if (right - left + 1 < minLen) {
        minLen = right - left + 1;
        minStart = left;
      }

      // Left char hatao
      const leftChar = s[left];
      wMap.set(leftChar, wMap.get(leftChar) - 1);

      if (tMap.has(leftChar) && wMap.get(leftChar) < tMap.get(leftChar)) {
        formed--;
      }
      left++;
    }
  }

  return minLen === Infinity ? "" : s.substring(minStart, minStart + minLen);
}

// ============================================
// TEST CASES — Dono Compare Karo
// ============================================
const tests = [
  { s: "ADOBECODEBANC", t: "ABC",  expected: "BANC" },
  { s: "a",             t: "b",    expected: ""     },
  { s: "aa",            t: "aa",   expected: "aa"   },
  { s: "AAAB",          t: "AAB",  expected: "AAAB" },
];

console.log("=== BRUTE FORCE ===");
for (let test of tests) {
  const result = minWindow_Brute(test.s, test.t);
  const status = result === test.expected ? "✅" : "❌";
  console.log(`${status} Input: "${test.s}", t: "${test.t}"`);
  console.log(`   Expected: "${test.expected}" Got: "${result}"`);
}

console.log("\n=== OPTIMIZED ===");
for (let test of tests) {
  const result = minWindow_Optimized(test.s, test.t);
  const status = result === test.expected ? "✅" : "❌";
  console.log(`${status} Input: "${test.s}", t: "${test.t}"`);
  console.log(`   Expected: "${test.expected}" Got: "${result}"`);
}