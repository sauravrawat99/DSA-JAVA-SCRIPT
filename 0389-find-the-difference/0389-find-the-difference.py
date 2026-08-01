from collections import Counter

class Solution:
    def findTheDifference(self, s: str, t: str) -> str:
        t_count = Counter(t)
        s_count = Counter(s)
        diff = t_count - s_count   # Counter subtraction
        return list(diff.keys())[0]