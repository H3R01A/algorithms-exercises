/*
  Write a bubble sort here
  Name the function bubbleSort
  Return the sorted array at the end
  
  To run the tests, change the `test.skip(…)` below to `test(…)`
  
  Bubble sort works by comparing two adjacent numbers next to each other and then
  swapping their places if the smaller index's value is larger than the larger
  index's. Continue looping through until all values are in ascending order
*/

//i: array of numbers
//o: sorted array

//test cases
//[1, 5, 4, 2, 3] > [1, 2, 3, 4, 5]
//[2,4,1] > [1,2,4]
//[0,0,0] > [0,0,0]

function bubbleSort(nums) {
  //create a swapped flag
  let swapped = true;
  //check to determine if there was a swap? If there was, means additional sorting will need to be done
  while (swapped) {
    //make swapped flag false. If there is a swap, this will change to true
    swapped = false;
    //loop to check neighbor numbers
    for (let i = 0; i < nums.length; i++) {
      //check if current num > next num if so swap. If not, do nothing
      if (nums[i] > nums[i + 1]) {
        //swapping using Destructuring
        [nums[i], nums[i + 1]] = [nums[i + 1], nums[i]];
        swapped = true;
      }
    }
  }
  //finally return sorted arr
  return nums;
}

//test cases
//[1, 5, 4, 2, 3] > [1, 2, 3, 4, 5]
//[2,4,1] > [1,2,4]
//[0,0,0] > [0,0,0]

// unit tests
// do not modify the below code
test('bubble sort', function () {
  const nums = [10, 5, 3, 8, 2, 6, 4, 7, 9, 1];
  const sortedNums = bubbleSort(nums);
  expect(sortedNums).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
});
