# Projects related to DOM

## Project link

[click here](https://stackblitz.com/edit/dom-project-chaiaurcode?file=index.html)

# Solution Code

## Project 1 Solution

```javascript
const buttons = document.querySelectorAll(".button");
const body = document.querySelector("body");

buttons.forEach((button) => {
  button.addEventListener("click", (e) => {
    if (e.target.id === "grey") {
      body.style.backgroundColor = e.target.id;
    } else if (e.target.id === "white") {
      body.style.backgroundColor = e.target.id;
    } else if (e.target.id === "blue") {
      body.style.backgroundColor = e.target.id;
    } else if (e.target.id === "yellow") {
      body.style.backgroundColor = e.target.id;
    } else {
      body.style.backgroundColor = "#212121";
      body.style.color = "#fff";
    }
  });
});
```

## Project 2 Solution

```javascript
const form = document.querySelector("form");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const height = parseInt(document.getElementById("height").value);
  const weight = parseInt(document.getElementById("weight").value);
  const result = document.getElementById("results");

  if (height === "" || height < 0 || isNaN(height)) {
    result.innerHTML = `<p>Please enter a valid height: ${height}</p>`;
  } else if (weight === "" || weight < 0 || isNaN(weight)) {
    result.innerHTML = `<p>Please enter a valid weight: ${weight}</p>`;
  } else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);
    if (bmi < 18.6) {
      result.innerHTML = `<p>Your BMI is: ${bmi} <br /> You are under weight.</p>`;
    } else if (bmi >= 18.6 && bmi < 24.9) {
      result.innerHTML = `<p>Your BMI is: ${bmi} <br /> You are normal.</p>`;
    } else {
      result.innerHTML = `<p>Your BMI is: ${bmi} <br /> You are Overweight.</p>`;
    }
  }
});
```

## Project 3 Solution

```javascript
const clock = document.querySelector("#clock");

setInterval(() => {
  const date = new Date();
  clock.innerHTML = date.toLocaleTimeString();
}, 1000);
```
## Project 4 Solution by Muhammad Naeem Raza

```javascript

const randomNumber = parseInt(Math.random() * 100 + 1);

let guessField = document.querySelector('#guessField');
const subt = document.querySelector('#subt');
const guesses = document.querySelector('.guesses');
const lastResult = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');
const form = document.querySelector('form');

let previouesValues = [];
let remainingChance = 10;

form.addEventListener('submit', (e) => {
  e.preventDefault();

  let guessFieldValue = parseInt(guessField.value);
  previouesValues.push(guessFieldValue);
  guesses.innerHTML = previouesValues;
  --remainingChance;
  lastResult.innerHTML = remainingChance;
  if (guessFieldValue === randomNumber) {
    lowOrHi.innerHTML = `<p>Congratulations! You Won 😍🔥🔥🔥 <br/> Click here to play again!</p>`;

    lowOrHi.addEventListener('click', () => {
      previouesValues = [];
      remainingChance = 10;
      guessField.value = '';
      guessField.removeAttribute('disabled');
      subt.style.visibility = 'visible';
    });
  } else if (guessFieldValue > randomNumber) {
    lowOrHi.innerHTML = `<p>Higher Value</p>`;

    if (remainingChance === 0) {
      lowOrHi.innerHTML = `<p>Game Over, Click here to play again!</p>`;
      guessField.setAttribute('disabled', '');
      subt.style.visibility = 'hidden';

      lowOrHi.addEventListener('click', () => {
        previouesValues = [];
        remainingChance = 10;
        guessField.value = '';
        guessField.removeAttribute('disabled');
        subt.style.visibility = 'visible';
        guesses.innerHTML = previouesValues;
        lastResult.innerHTML = remainingChance;
        lowOrHi.innerHTML = `<p></p>`;
      });
    }
  } else {
    lowOrHi.innerHTML = `<p>Lower Value</p>`;
    if (remainingChance === 0) {
      lowOrHi.innerHTML = `<p>Game Over, Click here to play again!</p>`;
      guessField.setAttribute('disabled', '');
      subt.style.visibility = 'hidden';

      lowOrHi.addEventListener('click', () => {
        previouesValues = [];
        remainingChance = 10;
        guessField.value = '';
        guessField.removeAttribute('disabled');
        subt.style.visibility = 'visible';
        guesses.innerHTML = previouesValues;
        lastResult.innerHTML = remainingChance;
        lowOrHi.innerHTML = `<p></p>`;
      });
    }
  }
});
```

## Project 4 Solution by Hitesh Choudury

```javascript

let randomNumber = parseInt(Math.random() * 100 + 1);

const submit = document.querySelector('#subt');
let userInput = document.querySelector('#guessField');
const guessSlot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');
const startOver = document.querySelector('.resultParas');

const p = document.createElement('p');

let prevGuess = [];
let numGuess = 1;

let playGame = true;

if (playGame) {
  submit.addEventListener('click', (e) => {
    e.preventDefault();
    const guess = parseInt(userInput.value);
    console.log(guess);
    validateGuess(guess);
  });
}

// to validate input is correct or not (only numbers from 1 to 100)
function validateGuess(guess) {
  if (isNaN(guess)) {
    alert('Please enter a valid number');
  } else if (guess < 1) {
    alert('Please enter a valid number');
  } else if (guess > 100) {
    alert('Please enter a valid number');
  } else {
    prevGuess.push(guess);
    if (numGuess === 10) {
      displayGuess(guess);
      displayMessage(`Game over, The random number is ${randomNumber}`);
      endGame();
    } else {
      displayGuess(guess);
      checkGuess(guess);
    }
  }
}

// to check input guess value is correct or not (lower value, higher value or Won)
function checkGuess(guess) {
  if (guess === randomNumber) {
    displayMessage('Congratulation, You guess it right 👌😍🔥');
  } else if (guess > randomNumber) {
    displayMessage('Number is too high ↗️');
  } else if (guess < randomNumber) {
    displayMessage('Number is too low ↘️');
  }
}

// to display all previous guesses value, remaining values and clear previous input
function displayGuess(guess) {
  userInput.value = ''
  if (prevGuess.length === 1) {
    guessSlot.innerHTML += `${guess}`
  }
  else {
    guessSlot.innerHTML += `, ${guess}`
  }
  numGuess++;
  remaining.innerHTML = `${11 - numGuess}`
}

// to display message according to the input from checkGuess function
function displayMessage(message) {
  lowOrHi.innerHTML = `<h1>${message}</h1>`  
}

// to end the game
function endGame() {
  userInput.value = ''
  userInput.setAttribute('disabled', '')
  p.classList.add('button')
  p.innerHTML =  `<h2 id="newGame">Start new game</h2>`
  startOver.appendChild(p)
  playGame = false
  newGame()
}

// to start game again
function newGame() {
  const newGameButton = document.querySelector('#newGame');
  newGameButton.addEventListener('click', function (e) {
    randomNumber = parseInt(Math.random() * 100 + 1);
    prevGuess = [];
    numGuess = 1;
    guessSlot.innerHTML = '';
    remaining.innerHTML = `${11 - numGuess} `;
    userInput.removeAttribute('disabled');
    startOver.removeChild(p);
    playGame = true;
    displayMessage('');
  })
}

```
