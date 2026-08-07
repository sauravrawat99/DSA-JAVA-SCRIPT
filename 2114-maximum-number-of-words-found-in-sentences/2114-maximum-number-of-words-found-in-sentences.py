class Solution:
    def mostWordsFound(self, sentences: List[str]) -> int:
        maxcount=0
        for j in range(len(sentences)):
            char=sentences[j].split(" ")
            if len(char)>maxcount:
                maxcount=len(char)
        return maxcount   
    