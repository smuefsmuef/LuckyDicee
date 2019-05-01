//Draw dices
function drawDices() {
  var dices = document.querySelector(".drawButton");
  dices.addEventListener("click", function() {
    location = location;
  })
}
drawDices();

// select two random dices
var randomNumber1 = "images/dice" + getRandomNumber(6) + ".png"; //img1
var randomNumber2 = "images/dice" + getRandomNumber(6) + ".png"; //img2

function getRandomNumber(max) {
  return Math.floor(Math.random() * Math.floor(max)) + 1;
}
getRandomNumber();

document.querySelector('img').setAttribute("src", randomNumber1);
document.querySelectorAll('img')[1].setAttribute("src", randomNumber2);

//set Title depeding on result
function setTitle() {
  if (randomNumber1 === randomNumber2) {
    var order = "No Loosers!";
    return order;
  } else if (randomNumber1 > randomNumber2) {
    var order1 = "Alejandro Wins!";
    return order1;
  } else if (randomNumber1 < randomNumber2) {
    var order2 = "Petra Wins!";
    return order2;
  }
}

document.querySelector('h1').innerText = setTitle();
