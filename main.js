var minInput = document.querySelector('.min-range-input');
var maxInput = document.querySelector('.max-range-input');
var currentMin = document.querySelector('.current-min');
var currentMax = document.querySelector('.current-max');
var updateButton = document.querySelector('#update-button');

updateButton.addEventListener('click', updateRange);



function updateRange(event) {
  event.preventDefault();
  currentMin.innerText = parseInt(minInput.value);
  currentMax.innerText = parseInt(maxInput.value);
  console.log(currentMax);
  console.log(currentMin);
}