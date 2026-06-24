/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    // slinding window 
    let left=0;

    // store max length
    let maxlen=0;
    // edge case
    if(s.length<0) return -1;

    // using map
     const map=new Map();

    //  loop
    for(let right=0;right<s.length;right++){
        let char=s[right];

        // check ripeating character
        if(map.has(char) && map.get(char)>=left){
        // window shrink
        left=map.get(char)+1;
        }

       //    update map
         map.set(char,right);

         // find maxlen
       maxlen=Math.max(maxlen,right-left+1);
       }
    
    return maxlen;
};