function hasTargetSum(array, target) {
  const numMap = {};

  for (const num of array) {
    if (numMap[target - num]) {
      return true;
    }
    numMap[num] = (numMap[num] || 0) + 1;
  }

  return false;
}

/* 
  Write the Big O time complexity of your function here
  Time Complexity: O(n), where n is the length of the input array.
  Space Complexity: O(m), where m is the number of unique elements in the array.
*/

/* 
  Add your pseudocode here
  1. Create an empty object numMap.
  2. Iterate through each number num in the input array.
     a. If numMap[target - num] exists, return true.
     b. Otherwise, increment the frequency of num in numMap.
  3. If no pair is found during the iteration, return false.
*/

/*
  Add written explanation of your solution here
  - We use an object (numMap) to store the numbers encountered so far and their frequencies.
  - As we iterate through the input array, for each number num, we check if there exists another number in numMap such that (target - num). If such a number exists, we return true as we found a pair that adds up to the target.
  - If no pair is found during the iteration, we return false, indicating that no such pair exists in the array.
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([], 5));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([1, 1, 1, 1], 2));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 3, 4], 10));
}



module.exports = hasTargetSum;
