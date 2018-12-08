var minInput           =     document.querySelector('#min-range-input');
var maxInput           =     document.querySelector('#max-range-input');
var guessOneInput      =     document.querySelector('#challenger1-guess-input');
var guessTwoInput      =     document.querySelector('#challenger2-guess-input');
var nameOneInput       =     document.querySelector('#challenger1-name-input');
var nameTwoInput       =     document.querySelector('#challenger2-name-input');
var updateButton       =     document.querySelector('#update-button');
var submitButton       =     document.querySelector('#submit-button');
var clearButton        =     document.querySelector('#clear-button');
var resetButton        =     document.querySelector('#reset-button');

updateButton.addEventListener('click', updateRange);
submitButton.addEventListener('click', submitGuesses);
clearButton.addEventListener('click', clearInputs);
resetButton.addEventListener('click', resetGame);


function updateRange(event) {
  event.preventDefault();
  var currentMin = document.querySelector('.current-min');
  var currentMax = document.querySelector('.current-max');
  var max = parseInt(maxInput.value);
  var min = parseInt(minInput.value);
  currentMin.innerText = minInput.value;
  currentMax.innerText = maxInput.value;
  randomNumber(max, min);
}

function randomNumber(max, min) {
  console.log(Math.floor(Math.random()*(max - min + 1) + min));
  return Math.floor(Math.random()*(max-min+1)+min);
}

function submitGuesses(event) {
  event.preventDefault();
  var guessOneOutput = document.querySelector('.guess-display-one');
  var guessTwoOutput = document.querySelector('.guess-display-two');
  var nameOutputOne = document.querySelector('.challenger1-name-display');
  var nameOutputTwo = document.querySelector('.challenger2-name-display');
  guessOneOutput.innerText = parseInt(guessOneInput.value);
  guessTwoOutput.innerText = parseInt(guessTwoInput.value);
  nameOutputOne.innerText = nameOneInput.value;
  nameOutputTwo.innerText = nameTwoInput.value;
}

function clearInputs(event) {
  event.preventDefault();
  minInput.value = '';
  maxInput.value = '';
  guessOneInput.value = '';
  guessTwoInput.value = '';
  nameOneInput.value = '';
  nameTwoInput.value = '';
  console.log(minInput);
}

function resetGame() {
  var max = parseInt(maxInput.value);
  var min = parseInt(minInput.value);
  randomNumber(max, min);
  clearInputs();
}

