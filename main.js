var minInput = document.querySelector('#min-range-input');
var maxInput = document.querySelector('#max-range-input');
var currentMin = document.querySelector('.current-min');
var currentMax = document.querySelector('.current-max');
var updateButton = document.querySelector('#update-button');
var submitButton = document.querySelector('#submit-button');
  var guessOneInput = document.querySelector('#challenger1-guess-input');
  var guessTwoInput = document.querySelector('#challenger2-guess-input');
  var guessOneOutput = document.querySelector('.guess-display-one');
  var guessTwoOutput = document.querySelector('.guess-display-two');


updateButton.addEventListener('click', updateRange);
submitButton.addEventListener('click', submitGuesses);


function updateRange(event) {
  event.preventDefault();
  currentMin.innerText = minInput.value;
  currentMax.innerText = maxInput.value;
  var max = parseInt(maxInput.value);
  var min = parseInt(minInput.value);
  randomNumber(max, min);
  console.log(currentMax);
  console.log(currentMin);
}

function randomNumber(max, min) {
  console.log(Math.floor(Math.random()*(max-min+1)+min));
  return Math.floor(Math.random()*(max-min+1)+min);
}

function submitGuesses(event) {
  event.preventDefault();
  guessOneOutput.innerText = parseInt(guessOneInput.value);
}