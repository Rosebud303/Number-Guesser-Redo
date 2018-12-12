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
var currentMin         =     document.querySelector('.current-min');
var currentMax         =     document.querySelector('.current-max');

updateButton.addEventListener('click', updateRange);
submitButton.addEventListener('click', submitGuesses);
clearButton.addEventListener('click', clearInputs);
resetButton.addEventListener('click', resetGame);
minInput.addEventListener('keyup', enableButtons)

clearButton.disabled = true;
resetButton.disabled = true;

var correctNumber;

window.onload = function() {
  correctNumber = randomNumber(100, 1);
}

function updateRange(event) {
  event.preventDefault();
  var maxHi = parseInt(maxInput.value);
  var minLo = parseInt(minInput.value);
  currentMin.innerText = minInput.value;
  currentMax.innerText = maxInput.value;
  correctNumber = randomNumber(maxHi, minLo);
}

function randomNumber(max, min) {
  var randomNumber = Math.floor(Math.random()*(max - min + 1) + min);
  console.log(randomNumber);
  return randomNumber;
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
  playerRatings();
}

function clearInputs(event) {
  event.preventDefault();
  clearAll();
  enableButtons();
}

function resetGame(event) {
  event.preventDefault();
  correctNumber = randomNumber(100, 1);
  currentMin.innerText = 1;
  currentMax.innerText = 100;
  clearAll();
  enableButtons();
}

function clearAll() {
  var allInputs = document.querySelectorAll('.inputs');
  for (var i = 0; i < allInputs.length; i++) {
    allInputs[i].value = '';
  }
}

function enableButtons() {
  if(minInput.value === '' && maxInput.value === '' && guessOneInput.value === ''
    && guessTwoInput.value === '' && nameOneInput.value === '' && nameTwoInput.value === '') {
    clearButton.classList.add('gray-out');
    resetButton.classList.add('gray-out');
  } else if (minInput.value !== '' || maxInput.value !== '' || guessOneInput.value !== '' 
    || guessTwoInput.value !== '' || nameOneInput.value !== '' || nameTwoInput.value !== '') {
    clearButton.classList.remove('gray-out');
    resetButton.classList.remove('gray-out');
    clearButton.disabled = false;
    resetButton.disabled = false;
  }
}

function playerRatings() {
  for(var i = 1; i <= 2; i++) {
    var guessInput = document.querySelector(`#challenger${i}-guess-input`);
    var ratingOutput = document.querySelector(`.player${i}-rating`);
    if(parseInt(guessInput.value) > correctNumber) {
      ratingOutput.innerText = 'That\'s too high';
    } else if(parseInt(guessInput.value) < correctNumber) {
      ratingOutput.innerText = 'That\'s too low';
    } else if (parseInt(guessInput.value) === correctNumber) {
      ratingOutput.innerText = 'BOOM!';
      appendCard(nameOneInput.value, nameTwoInput.value);
    }
  }
}

function errorMessage() {
  if(){
  }
}

function appendCard(player1, player2, winner) {
  var rightSide = document.querySelector('.winner-info-side');
  var cardHtml = 
    `      
      <section class="full-card-info">
        <section class="card-names">
          <h3>${player1}</h3>
          <p>vs</p>
          <h3>${player2}</h3>
        </section>
        <section>
          <h2 class="winner">${winner}</h2>
          <h2 class="winner">Winner</h2>
        </section>
        <section>
          <p><span>#</span> Guesses</p>
          <p><span>#</span> Minutes</p>
          <img class="delete-button" src="#">
        </section>
      </section>
    `
    rightSide.innerHTML += cardHtml;
}
