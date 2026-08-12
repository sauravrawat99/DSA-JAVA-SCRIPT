class MinStack:

    def __init__(self):
        self.stack = []
        self.minStack = []

    def push(self, value: int) -> None:
        self.stack.append(value)
        if len(self.minStack) == 0:
            self.minStack.append(value)
        else:
            if value <= self.minStack[-1]:
                self.minStack.append(value)

    def pop(self) -> None:
        if len(self.stack) > 0:
            removeNumber = self.stack.pop()
            if removeNumber == self.minStack[-1]:
                self.minStack.pop()

    def top(self) -> int:
        if len(self.stack) > 0:
            return self.stack[-1]
        return None

    def getMin(self) -> int:
        if len(self.minStack) > 0:
            return self.minStack[-1]
        return None


# Your MinStack object will be instantiated and called as such:
# obj = MinStack()
# obj.push(value)
# obj.pop()
# param_3 = obj.top()
# param_4 = obj.getMin()