/*
  Write a function that performs mergesort
  Name the function mergeSort
  It will take in a array of numbers and return a sorted array numbers

  You'll need to write more than just one function

  i: array of numbers
  o: sorted of array of numbers
*/

const mergeSort = (nums) => {
  //merge function
  //i: arr1 and arr2
  //o: sorted array
  function merge(arr1, arr2) {
    const sortArr = [];
    //loop through both arrays while they both have length and determine which current element smaller
    while (arr1.length > 0 && arr2.length > 0) {
      //add smaller element to sortArr to return back (using shift to remove the first element)
      if (arr1[0] < arr2[0]) {
        sortArr.push(arr1.shift());
      } else {
        sortArr.push(arr2.shift());
      }
    }
    //if arr1 is empty, add the rest of arr2 and return the sorted array
    if (arr1.length === 0) {
      return [...sortArr, ...arr2];
    }
    //if arr2 is empty, add the rest of arr1 and return the sorted array
    if (arr2.length === 0) {
      return [...sortArr, ...arr1];
    }
  }

  //recursive function
  //base case
  if (nums.length === 1) return nums;

  const middle = nums.length / 2;
  //recursive case
  return merge(mergeSort(nums.slice(0, middle)), mergeSort(nums.slice(middle)));
};

// const nums2 = [1, 22, 10, 6];
// console.log(mergeSort(nums2));

// const nums3 = [1, 22, 10, 6, 4, 100, 8, 7];
// console.log(mergeSort(nums3));

// const nums = [10, 5, 3, 8, 2, 6, 4, 7, 9, 1];
// console.log(mergeSort(nums));

// unit tests
// do not modify the below code
test('merge sort', function () {
  const nums = [10, 5, 3, 8, 2, 6, 4, 7, 9, 1];
  const ans = mergeSort(nums);
  expect(ans).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
});
