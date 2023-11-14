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
## Project 4 Solution

```javascript

const randomNumber = parseInt(Math.random() * 100 + 1);
// console.log(randomNumber)

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
  // console.log(guessFieldValue)
  previouesValues.push(guessFieldValue);
  // console.log(previouesValues)
  guesses.innerHTML = previouesValues;
  --remainingChance;
  lastResult.innerHTML = remainingChance;
  if (guessFieldValue === randomNumber) {
    lowOrHi.innerHTML = `<p>Congratulations! You Won 😍🔥🔥🔥 <br/> Click here to play again!</p>`;

    lowOrHi.addEventListener('click', () => {
      previouesValues = [];
      remainingChance = 10;
      guessField.value = '';
      guessField.setAttribute('enable', '');
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
        guessField.setAttribute('enable', '');
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
        guessField.setAttribute('enable', '');
        subt.style.visibility = 'visible';
        guesses.innerHTML = previouesValues;
        lastResult.innerHTML = remainingChance;
        lowOrHi.innerHTML = `<p></p>`;
      });
    }
  }
});



```