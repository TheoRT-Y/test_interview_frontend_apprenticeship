// Task 1: Array Manipulation

function getEvenNumbers(numbers) {
  return numbers.filter(function (number) {
    return number % 2 === 0;
  });
}

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const evenNumbers = getEvenNumbers(numbers);
console.log(evenNumbers);

// Task 2: DOM Interaction

const button = document.getElementById("myText");

// Add an event listener to the button for the 'click' event
button.addEventListener("click", function () {
  // Select the element with the ID 'myText'
  const textElement = document.getElementById("myText");

  // Change the text of the clicked element
  textElement.textContent = "Hello, Check!";
});
