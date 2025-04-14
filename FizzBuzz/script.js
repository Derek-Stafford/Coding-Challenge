let number = [];
let of_3 = [];
let of_5 = [];
let both = [];
con1 = "Fizz"
con2 = "Buzz"
con3 = "FizzBuzz"

for (let i = 1; i <= 100; i++){
  if (i % 3 === 0 && i % 5 === 0) {
    both.push(i);
    console.log(con3);
  } else if (i % 3 === 0) {
    of_3.push(i);
    console.log(con1);
  } else if (i % 5 === 0) {
    of_5.push(i);
    console.log(con2);
  } else {
    number.push(i);
  }
}
console.log(of_3);
console.log(of_5);
console.log(both);
console.log(number);
