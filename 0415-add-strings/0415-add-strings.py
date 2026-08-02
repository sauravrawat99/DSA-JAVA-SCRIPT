class Solution:
    def addStrings(self, num1: str, num2: str) -> str:
        i = len(num1) - 1
        j = len(num2) - 1
        carry = 0
        result = []

        while i >= 0 or j >= 0 or carry > 0:
            number1 = int(num1[i]) if i >= 0 else 0
            number2 = int(num2[j]) if j >= 0 else 0

            total = number1 + number2 + carry
            curr = total % 10
            carry = total // 10

            result.append(str(curr))
            i -= 1
            j -= 1

        result.reverse()
        return ''.join(result)