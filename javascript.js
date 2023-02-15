console.log("Hello")

const numbers = [];
for (let i = 0; i < 10; i++) {
  numbers.push(Math.floor(Math.random() * 100) + 1);
}
numbers.sort((a, b) => a - b);
console.log(`Here are your sorted numbers: ${numbers.join(', ')}`);

const randomNumber = Math.floor(Math.random() * 10) + 1;
console.log(`Your random number is: ${randomNumber}`);

function factorial(n) {
    if (n === 0) {
      return 1;
    } else {
      return n * factorial(n - 1);
    }
  }
  
  const randomNum = Math.floor(Math.random() * 10) + 1;
  const fact = factorial(randomNum);
  console.log(`The factorial of ${randomNum} is ${fact}`);