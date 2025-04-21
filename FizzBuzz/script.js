let number = [];
let of_3 = [];
let of_5 = [];
let both = [];
condition_1 = "Fizz"
condition_2 = "Buzz"
condition_3 = "FizzBuzz"

for (let i = 1; i <= 100; i++){
  if (i % 3 === 0 && i % 5 === 0) {
    both.push(i);
    console.log(condition_3);
  } else if (i % 3 === 0) {
    of_3.push(i);
    console.log(condition_1);
  } else if (i % 5 === 0) {
    of_5.push(i);
    console.log(condition_2);
  } else {
    number.push(i);
  }
}
console.log(of_3);
console.log(of_5);
console.log(both);
console.log(number);
