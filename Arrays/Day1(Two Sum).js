/*Given an array of integers nums and an integer target, return indices of 
the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may 
not use the same element twice.

You can return the answer in any order.


Example 1:

Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].

Example 2:

Input: nums = [3,2,4], target = 6
Output: [1,2]

Follow-up: Can you come up with an algorithm that is less than O(n2) time complexity?

*/

/* Approaches-
1.We can use brute force approach where we can loop over the array for inner and can
  check whether the nums in outer iteration and inner iteration is equal. if yes return 
  the indices of both outer loop and inner loop, but the problem with these solution is it 
  takes O(n^2). We need to come up with more efficient solution.

2. we can create a hashmap or object (prefer hashmap as it has higher performance), 
   we need to check the (target-x) is present in hasmap if yes, then return indices of
   x and hasmap key corresponding value, else store the value of x and its indices in hasmap
   below is the solution.

  // link for ref - https://leetcode.com/problems/two-sum/description/
*/

var twoSum = function(nums,target) {
  
  let mp = new Map(); //creating hashmap
  let n = nums.length;
  for(let i=0;i<n;i++) {
    let diff = target - nums[i];
    if(mp.has(diff)){  // mp.has(<num>) returns true if num exist in map else it returns false
      return [i,mp.get(diff)] // mp.get(<key>) returns value of key passed in argument
    } 
    mp.set(nums[i],i); // mp.set(<key>,<value>) this method is used to set key-value pair in hasmap.
  }
}