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

// Task 3: Basic Fetch

function fetchAndDisplayTodos() {
  fetch("https://jsonplaceholder.typicode.com/todos")
    .then(response => response.json()) // Convert the response to JSON
    .then(todos => {
      // Create an unordered list element
      const ul = document.createElement("ul");

      // Loop through the first 5 todos
      for (let i = 0; i < 5; i++) {
        // Create a list item for each todo title
        const li = document.createElement("li");
        li.textContent = todos[i].title;

        // Append item to the list
        ul.appendChild(li);
      }
      // Append the list to the body of the document
      document.body.appendChild(ul);
    })
    .catch(error => {
      console.error("Error : ", error);
    });
}
fetchAndDisplayTodos();
