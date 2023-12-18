//Exercise 2: Fizz Buzz

const fizzBuzz = function (n) {
  //Start coding here
  let arr = [];
  for (i = 0; i < n; i++) {
    if ((i + 1) % 3 === 0 && (i + 1) % 5 === 0) {
      arr.push("fizzbuzz");
    } else if ((i + 1) % 3 === 0) {
      arr.push("fizz");
    } else if ((i + 1) % 5 === 0) {
      arr.push("buzz");
    } else {
      arr.push(`${i + 1}`);
    }
    console.log(arr);
  }
  return arr;
};

const result1 = fizzBuzz(3);
const result2 = fizzBuzz(5);
const result3 = fizzBuzz(15);

console.log(result1); // ["1","2","Fizz"]
console.log(result2); // ["1","2","Fizz","4","Buzz"]
console.log(result3); // ["1","2","Fizz","4","Buzz","Fizz","7","8","Fizz","Buzz","11","Fizz","13","14","FizzBuzz"]
