function isAlphanumeric(char) {
  return /^[a-z0-9]$/i.test(char);
}

var isPalindrome = function (s) {
  let st = 0;
  let end = s.length - 1;

  while (st < end) {
    // skip non-alphanumeric
    while (st < end && !isAlphanumeric(s[st])) st++;
    while (st < end && !isAlphanumeric(s[end])) end--;

    if (s[st].toLowerCase() !== s[end].toLowerCase()) {
      return false;
    }
    st++;
    end--;
  }
  return true;
};

console.log(isPalindrome("A man, a plan, a canal: Panama"));