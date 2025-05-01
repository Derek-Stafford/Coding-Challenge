let number = [];
let divisible_by_3 = [];
let divible_by_5 = [];
let divisible_by_3and5 = [];
condition_1 = "Fizz"
condition_2 = "Buzz"
condition_3 = "FizzBuzz"

for (let i = 1; i <= 100; i++){
  if (i % 3 === 0 && i % 5 === 0) {
    divisible_by_3and5.push(i);
    console.log(condition_3);
  } else if (i % 3 === 0) {
    divisible_by_3.push(i);
    console.log(condition_1);
  } else if (i % 5 === 0) {
    divible_by_5.push(i);
    console.log(condition_2);
  } else {
    number.push(i);
  }
}

console.log("Numbers divisible by 3: ", divisible_by_3);
console.log("Numbers divisible by 5: ", divisible_by_5);
console.log("Numbers divisible by 3 and 5: ", divisible_by_3and5);