

function hasTargetSum(array, target) {
  // Write your algorithm here
  //iterate through each number in the array 
  for(let i = 0; i < array.length; i++){
   // for the current num, identify a complement that adds to the target (comp = target-num)
   const complement = target - array[i]
   //iterate through rest of the array
   for (let j =i + 1; j < array.length; j++){
    // check if any number is a  our complement
    //if so, return true
    if(array[j] === complement)return true
   } 
  }
  // if i reach end of array, return false.
  return false;
  
}

/* 
  Write the Big O time complexity of your function here
*/

/* 
  Add your pseudocode here
  hasTargetSum([22, 19, 4, 6, 30], 25);
  returns true because sum of 19 and 6 is 25.
  iterate through each number in the array and identify a complement that adds to the target.(complement= target -number)
  if there is complement 
  return true
  if i reach end of array with no complement
   return false.
*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
