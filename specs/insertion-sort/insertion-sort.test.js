/*
  Insertion sort!
  
  Be sure to call your function insertionSort!
  
  The idea here is that the beginning of your list is sorted and the everything else is assumed to be an unsorted mess.
  
  The outer loop goes over the whole list, the index of which signifies where the "sorted" part of the list is. The inner loop goes over the sorted part of the list and inserts it into the correct position in the array.
  
  Like bubble sort, there's a visualization mechanism available to you. Just call snapshot(myArray) at the beginning of
  your inner loop and it should handle the rest for you!
  
  And you put xdescribe instead of describe if you want to suspend running the unit tests.  
*/

//i: arr of nums
//o: sorted arr of nums

/* 

Test cases 

const arr = [3, 2, 5, 4, 1]; // [1,2,3,4,5]
const arr2 = [2,4,3,1]; // [1,2,3,4]
const arr3 = [0,10,2,5,0]; // [0,0,2,5,10]


i = 3
numberToInsert = 8
j = 3 - 1 = 2
nums[2] = 10 > 8
nums[2 + 1] = nums[2] > nums[3] = 10

j = 1
nums[1] = 5 > 8
nums[1 + 1] = numberToInsert
nums[2] = 8


*/

function insertionSort(nums) {
  //Loop to keep track of current index - starting at index 1
  for (let i = 1; i < nums.length; i++) {
    //loop over the "sorted" part of the list and insert element
    let numberToInsert = nums[i];
    let j = i - 1; //counter for inner loop to start at the sorted elements (elements to the left)

    //while current el is greater than the numberToInsert and current index is greater than or equal to 0, move the current el to the right 
    while (j >= 0 && nums[j] > numberToInsert) {
      nums[j + 1] = nums[j];
      j--;
    }
    //once the while loop breaks insert the numberToInsert into its correct spot. Since j has been decremented, it will be inserted into the appropriate place
    nums[j + 1] = numberToInsert;
  }

  //return sorted array
  return nums;
}

// const arr = [3, 2, 5, 4, 1]; // [1,2,3,4,5]
// const arr2 = [2,4,3,1]; // [1,2,3,4]
// const arr3 = [0,10,2,5,0]; // [0,0,2,5,10]

// console.log(insertionSort(arr))

/* 
Big O Analysis



Time Complexity

O(n^2) - because if an unsorted array is passed into the function, then the function will have 
loop over every iteration and perform instructions within the second loop


Space Complexity

O(1) - constant because no new memories in space are being created. The same array that is passed in is modified. This also makes the sort destructive

reference - https://www.freecodecamp.org/news/most-asked-questions-about-insertion-sort-algorithm/


*/

// unit tests
// do not modify the below code
test('insertion sort', function () {
  const nums = [10, 5, 3, 8, 2, 6, 4, 7, 9, 1];
  insertionSort(nums);
  expect(nums).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
});
