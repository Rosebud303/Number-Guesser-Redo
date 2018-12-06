var minInput = document.querySelector('#min-range-input');
var maxInput = document.querySelector('.max-range-input');
var currentMin = document.querySelector('.current-min');
var currentMax = document.querySelector('.current-max');
var updateButton = document.querySelector('#update-button');


updateButton.addEventListener('click', updateRange);



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

