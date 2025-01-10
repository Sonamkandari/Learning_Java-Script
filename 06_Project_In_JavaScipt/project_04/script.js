// Generate a random number between 1 and 100
// Math.random() generates a decimal number between 0 and 1. We multiply it by 100 and add 1 to get a number between 1 and 100.
// parseInt is used to convert the decimal value to an integer.
const RandomNumber = parseInt(Math.random() * 100 + 1);
console.log(RandomNumber); // Log the generated random number for debugging.

// Selecting DOM elements
const submit = document.querySelector('#subt'); // Submit button
const UserInput = document.querySelector('#guessField'); // Input field for user's guess
const guessSlot = document.querySelector('.guesses'); // Display previous guesses
const Remaining = document.querySelector('.LastResult'); // Display remaining attempts
const lowOrhi = document.querySelector('.lowOrHi'); // Display feedback (too high/low)
const startover = document.querySelector('.resultParas'); // Container for restarting the game

// Placeholder for dynamically created elements
const p = document.createElement("p");

// Array to store all guesses entered by the user
let prevguess = [];

// Variable to track the number of guesses made
let numGuess = 1;

// Boolean flag to control the game state
let playGame = true;

/**
 * Adding event listener to the submit button.
 * This will listen for a click event when the user submits a guess.
 * e.preventDefault() prevents the default form submission behavior.
 */
if (playGame) {
  submit.addEventListener('click', function (e) {
    e.preventDefault();
    const guess = parseInt(UserInput.value); // Parse the user's input as an integer
    console.log(guess); // Log the guess for debugging
    validateGuess(guess); // Validate the user's guess
  });
}

/**
 * Function to validate the user's guess.
 * Ensures the guess is within the acceptable range and handles invalid inputs.
 */
function validateGuess(guess) {
  if (isNaN(guess)) {
    alert('Please enter a valid number.');
  } else if (guess < 1) {
    alert('Please enter a number greater than or equal to 1.');
  } else if (guess > 100) {
    alert('Please enter a number less than or equal to 100.');
  } else {
    prevguess.push(guess); // Store the valid guess
    if (numGuess === 11) {
      displayguess(guess); // Display the guess
      displayMessage(`Game over. Random number was ${RandomNumber}.`); // End game message
      endGame(); // End the game
    } else {
      displayguess(guess); // Display the guess
      checkguess(guess); // Check if the guess is correct
    }
  }
}

/**
 * Function to check if the guess is correct, too high, or too low.
 * Displays appropriate messages for each case.
 */
function checkguess(guess) {
  if (guess === RandomNumber) {
    displayMessage(`You guessed it right!`); // Correct guess
    endGame(); // End the game
  } else if (guess < RandomNumber) {
    displayMessage(`Number is too low.`); // Guess is too low
  } else if (guess > RandomNumber) {
    displayMessage(`Number is too high.`); // Guess is too high
  }
}

/**
 * Function to display the user's guesses and remaining attempts.
 */
function displayguess(guess) {
  UserInput.value = ''; // Clear the input field
  guessSlot.innerHTML += `${guess}, `; // Display the guess
  numGuess++; // Increment the guess count
  Remaining.innerHTML = `${11 - numGuess}`; // Update remaining attempts
}

/**
 * Function to display messages in the UI.
 * This is used for feedback like "too high" or "too low."
 */
function displayMessage(message) {
  lowOrhi.innerHTML = `<h2>${message}</h2>`;
}

/**
 * Function to end the game.
 * Disables input and provides an option to restart the game.
 */
function endGame() {
  UserInput.value = '';
  UserInput.setAttribute('disabled', ''); // Disable the input field
  p.classList.add('button');
  p.innerHTML = `<h2 id="newGame">Start New Game</h2>`;
  startover.appendChild(p); // Add the restart button
  playGame = false; // Stop the game
  newGame(); // Initialize the restart functionality
}

/**
 * Function to restart the game.
 * Resets all variables and UI elements to their initial state.
 */
function newGame() {
  const newGameButton = document.querySelector('#newGame'); // Select the restart button
  newGameButton.addEventListener('click', function () {
    RandomNumber = parseInt(Math.random() * 100 + 1); // Generate a new random number
    prevguess = []; // Reset the guesses
    numGuess = 1; // Reset the guess count
    guessSlot.innerHTML = ''; // Clear previous guesses
    Remaining.innerHTML = `${11 - numGuess}`; // Reset remaining attempts
    UserInput.removeAttribute('disabled'); // Enable the input field
    startover.removeChild(p); // Remove the restart button
    playGame = true; // Restart the game
  });
}
