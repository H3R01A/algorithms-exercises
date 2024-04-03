/*
  Write a function that performs mergesort
  Name the function mergeSort
  It will take in a array of numbers and return a sorted array numbers

  You'll need to write more than just one function


*/

//recursive function
//i: array of numbers
//o: SORTED array of numbers
const mergeSort = (nums) => {
  //base case - return if length is 1 or 0
  if (nums.length < 0) return nums;

  const middle = Math.floor(nums.length / 2);
  const arr1 = nums.slice(0, middle);
  const arr2 = nums.slice(middle);
  //recursive case
  return merge(mergeSort(arr1), mergeSort(arr2));
};

//merge function
//i: two sorted arrays
//o: combined sorted array
function merge(arr1, arr2) {
  const results = [];
  //loop through both arrays while they both have length and determine which current element smaller
  while (arr1.length && arr2.length) {
    //add smaller element to sortArr to return back (using shift to remove the first element)
    if (arr1[0] <= arr2[0]) {
      results.push(arr1.shift());
    } else {
      results.push(arr2.shift());
    }
  }
  //since either arr1 or arr2 will be empty AND the remaining amount will be sorted, we can concat both at the end
  return results.concat(arr1, arr2);
}

// const nums2 = [1, 22, 10, 6];
// console.log(mergeSort(nums2));

// const nums3 = [1, 22, 10, 6, 4, 100, 8, 7];
// console.log(mergeSort(nums3));

// const nums = [10, 5, 3, 8, 2, 6, 4, 7, 9, 1];
// console.log(mergeSort(nums));

/**
 * Time and Space Analysis
 *
 * Time Complexity
 *
 * This would be O(n log n) because we have to iterate through all of the elements at least once so n. But then with economies of scale, we know the the arrays passed into merge will already be sorted so we do not have to look at them again
 *
 *
 *
 * Space Complexity
 *
 * This would be O(n) because for each element we are technically creating an array
 *
 */

// unit tests
// do not modify the below code
test('merge sort', function () {
  const nums = [10, 5, 3, 8, 2, 6, 4, 7, 9, 1];
  const ans = mergeSort(nums);
  expect(ans).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
});
