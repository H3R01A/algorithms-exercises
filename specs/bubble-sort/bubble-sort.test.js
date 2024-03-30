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
  let swapped = false;
  //create tracker for num of times we moved large nums to correct spot
  let numSwapped = 0;
  // Do While Loop (will happen at least once)
  do {
    //make swapped flag false. If there is a swap, this will change to true
    swapped = false;
    //loop to check neighbor numbers
    //loop until corrected spots where the largest nums are at. No need to go further
    for (let i = 0; i < nums.length - numSwapped - 1; i++) {

      //check if current num > next num if so swap. If not, do nothing
      if (nums[i] > nums[i + 1]) {
        const temp = nums[i];
        nums[i] = nums[i + 1];
        nums[i + 1] = temp;

        //swapping using Destructuring
        //! What is the time complexity of this? One post says O(n)...
        // [nums[i], nums[i + 1]] = [nums[i + 1], nums[i]];

        swapped = true;
      }
    }

    //if we successfully swapped, then increment tracker
    if (swapped) numSwapped++;

  } while (swapped);

  return nums;
}

//test cases
//[1, 5, 4, 2, 3] > [1, 2, 3, 4, 5]
//[2,4,1] > [1,2,4]
//[0,0,0] > [0,0,0]

// const arr = [1, 5, 4, 2, 3];

// console.log(bubbleSort(arr));

//Big O Explanations

/**
 * Time Complexity
 * O(n2) - because of the outer while loop (n) and the inner for loop (n)
 * while loop - will keep looping if there were unsorted elements
 * for loop - will iterate through the number of elements in the passed in array
 *
 *
 * Space Complexity
 * O(1) because we are not creating any new places in memory (i.e. arrays)
 *
 *
 *
 *
 * Optimal solution
 *  Time Complexity
 *  O(n) - However in order to get an optimal solution, a 'sorted' array would need to be passed in the function
 * 
 *  Space Complexity
 *  O(1) - remains the same. Nothing has changed.
 *  
 *
 */

// unit tests
// do not modify the below code
test('bubble sort', function () {
  const nums = [10, 5, 3, 8, 2, 6, 4, 7, 9, 1];
  const sortedNums = bubbleSort(nums);
  expect(sortedNums).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
});
