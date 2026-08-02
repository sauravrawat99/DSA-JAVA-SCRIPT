class Solution:
    def isSubsequence(self, s: str, t: str) -> bool:
        if len(s) > len(t):
            return False
        i = 0
        length = len(s)
        if length == 0:
            return True
        for j in range(len(t)):
            if i < length and s[i] == t[j]:
                i += 1
                if i == length:
                    return True
        return length == 0