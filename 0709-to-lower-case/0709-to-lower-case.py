class Solution:
    def toLowerCase(self, s: str) -> str: 
        result = []
        for ch in s:
            if 'A' <= ch <= 'Z':
                # uppercase to lowercase: ASCII value me 32 add karo
                result.append(chr(ord(ch) + 32))
            else:
                result.append(ch)
        return ''.join(result)