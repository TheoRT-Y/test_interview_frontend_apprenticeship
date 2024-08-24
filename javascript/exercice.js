// Task 1: Array Manipulation

function getEvenNumbers(numbers) {
  return numbers.filter(function (number) {
    return number % 2 === 0;
  });
}

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const evenNumbers = getEvenNumbers(numbers);
console.log(evenNumbers);
