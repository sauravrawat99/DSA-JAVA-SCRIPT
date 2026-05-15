function subsets(nums) {

  function solve(index, current){

    console.log("ENTER", index, current);

    if(index === nums.length){
      console.log("PRINT", current);
      return;
    }

    // UPPER CALL (TAKE)
    current.push(nums[index]);

    console.log("UPPER CALL =>", index + 1, current);

    solve(index + 1, current);

    // BACKTRACK
    current.pop();

    // LOWER CALL (NOT TAKE)
    console.log("LOWER CALL =>", index + 1, current);

    solve(index + 1, current);

    console.log("EXIT", index, current);
  }

  solve(0, []);
}

subsets([1,2]);