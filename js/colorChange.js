// This variable stores the "Pick a Color" button
const originalButton = document.getElementById("original-button");

// This variable stores the "Mystery Color" button
const mysteryButton = document.getElementById("mystery-button");
// This random number function that will creates color codes for the randomColor variable
//rgb( 255, 255, 255 )
function randomNumber(num){
  return Math.floor( Math.random() * num)
}
let result1 = document.getElementById('result1');
let result2 = document.getElementById('result2');

let randomColor; 
// Write your code below
function colorChange() {
  let randomColor = 'rgb(' + randomNumber(255) + ',' + randomNumber(255) + ',' + randomNumber(255) + ')';
  event.target.style.backgroundColor = randomColor; 
  event.target.innerHTML = randomColor;
 
}

originalButton.onclick = colorChange; 
mysteryButton.onwheel = colorChange; 



