/*
  Make a function that computes a factorial recursively.
  A factorial is when you take a number n and multiply by each preceding integer until you hit one.
  n * (n-1) * (n-2) ... * 3 * 2 * 1
  
  Call the function factorial
  
  factorial(1) = 1
  factorial(2) = 2
  factorial(3) = 6 

  n = 3
  3 * factorial(3 - 1) = 2

  fact(2)
  n = 2
  2 * fact(2 - 1) = 1

  fact(1)
  n = 1
  return 1

*/

//i: number
//o: number
/**
 * 
 * 
 */

function factorial(n) {

  //base case - anything less than 2 because both 0! and 1! are equal to 1
  if(n < 2) return 1;

  //recursive case
  return n * factorial(n - 1);
}

// console.log(factorial(1)); //1
// console.log(factorial(2)); //2
// console.log(factorial(3)); //6

// unit tests
// do not modify the below code
test("factorials", () => {
  expect(factorial(1)).toEqual(1);
  expect(factorial(2)).toEqual(2);
  expect(factorial(3)).toEqual(6);
  expect(factorial(10)).toEqual(3628800);
});
