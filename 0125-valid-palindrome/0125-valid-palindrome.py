import re

class Solution:
    def isPalindrome(self, s: str) -> bool:
        s = re.sub(r'[^a-z0-9]', '', s.lower())
        st = 0
        end = len(s) - 1

        while st < end:
            if s[st] != s[end]:
                return False
            st += 1
            end -= 1

        return True