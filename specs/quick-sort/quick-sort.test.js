/*

  Quick Sort!
  
  Name your function quickSort.
  
  Quick sort should grab a pivot from the end and then separate the list (not including the pivot)
  into two lists, smaller than the pivot and larger than the pivot. Call quickSort on both of those
  lists independently. Once those two lists come back sorted, concatenate the "left" (or smaller numbers)
  list, the pivot, and the "right" (or larger numbers) list and return that. The base case is when quickSort
  is called on a list with length less-than-or-equal-to 1. In the base case, just return the array given.


  i: array of nums
  o: sorted array of nums
*/

function quickSort(nums) {
  //base case
  if (nums.length <= 1) return nums;

  //grab pivot
  const pivot = nums.pop();

  //separate left and right based on the pivot
  const left = [];
  const right = [];

  for (let i = 0; i < nums.length; i++) {
    const currNum = nums[i];
    if (currNum <= pivot) {
      left.push(currNum);
    } else {
      right.push(currNum);
    }
  }
  //call quickSort on both lists
  const sortedLeft = quickSort(left);
  const sortedRight = quickSort(right);

  //return concatenated lists
  return [...sortedLeft, pivot, ...sortedRight];
}

//tests
// console.log(quickSort([10,1,3,4]));
// console.log(quickSort([1,4,2,3]));
// console.log(quickSort([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));

/**
 * Space-Time Analysis
 *
 *
 * Time Complexity
 *
 * Worst case is O(n^2) when either a sorted array or reverse sorted array are passed into the function because we end up comparing every number against every other
 *
 * average case is O(n log n) only if a randomized list is passed in the algorithm because the pivot could potentially look over only have the list
 *
 *
 * Space Complexity
 *
 * in the above implemenation, it is O(n) because arrays are created for each element and therefore auxillary space is created in memory
 *
 *
 */

// unit tests
// do not modify the below code
test('quickSort', function () {
  const input = [10, 8, 2, 1, 6, 3, 9, 4, 7, 5];
  const answer = quickSort(input);

  expect(answer).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
});
