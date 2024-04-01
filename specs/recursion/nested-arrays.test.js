/* 

  write a function that accepts an array that only contains
  two types of things: numbers and arrays. those nested arrays
  also only contain numbers and other, nested arrays.

  example: nestedAdd([1, 2, [3]]) = 6
           nestedAdd([[[2]], 1, [1, 3]]) = 7

           nestedAdd([1,20,[4]]) // 25
           nestedAdd([6,[[7]],1]) // 14
 
 */

//i: arr of numbers - could be nested
//o: number

/**
 * array = [[[2]], 1, [1, 3]]
 * first call: [[2]]
 *
 *
 * within array check
 *  nestedAdd([2]) = 2
 *    array = [2]
 *    curr = 2
 *  nestedAdd([1, [1, 3]])
 *  array = 1, [1, 3]
 *    curr = 1
 *
 *  nestedAdd([1, 3])
 *  array = [1,3]
 *  curr =
 *
 */

function nestedAdd(array) {
  console.log({ array });

  //base case
  //check if the current length of array is 0
  //return 0 because there is no element to add
  if (array.length === 0) return 0;

  //capture current element
  const curr = array[0];
  console.log({ curr });

  //recursive case

  //check if the current element is an array
  //return nestedAdd invoked by slicing first element to the end
  if (Array.isArray(curr)) {
    if (Array.isArray(curr[0])) {
      console.log(`within Array is Array ${curr} and ${array}`);
      return nestedAdd(curr[0]) + nestedAdd(curr.slice(1)) + nestedAdd(array.slice(1));
    } else {
      return curr[0] + nestedAdd(curr.slice(1)) + nestedAdd(array.slice(1));
    }
  }

  //return current element + invoking nestedAdd with the next element
  return curr + nestedAdd(array.slice(1));
}

//console.log(nestedAdd([1, [2], 3])); //= 6
//console.log(nestedAdd([1, 2, [3]])); //= 6
//console.log(nestedAdd([[[2]], 1, [1, 3]])); //= 7

// console.log(nestedAdd([1,20,[4]])); // 25
// console.log(nestedAdd([6,[[7]],1])); // 14

test('nested arrays addition', () => {
  expect(nestedAdd([1, 2, 3])).toEqual(6);
  expect(nestedAdd([1, [2], 3])).toEqual(6);
  expect(nestedAdd([[[[[[[[[5]]]]]]]]])).toEqual(5);
  expect(nestedAdd([10, [12, 14, [1], [16, [20]]], 10, 11])).toEqual(94);
});
