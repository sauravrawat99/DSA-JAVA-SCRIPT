/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var nextGreaterElement = function(nums1, nums2) {
    let stack=[];
    let map=new Map();

    for(num of nums2){
        while(stack.length>0 && num > stack[stack.length-1]){
            let smallest=stack.pop();
            map.set(smallest,num);
        }
        stack.push(num);
    }

    while(stack.length>0){
        map.set(stack.pop(),-1);
    }

    return nums1.map((val)=>map.get(val));
};