var myHeading = document.querySelector('h1');
myHeading.textContent = 'Hello world!';
var myVariable;
myVariable = 'Bob';
var myVariable = 'Bob';
var myVariable = 'Bob';
myVariable = 'Steve';

var iceCream = 'chocolate';
if (iceCream === 'chocolate') {
  alert('Yay, I love chocolate ice cream!');    
} else {
  alert('Awwww, but chocolate is my favorite...');    
}

function multiply(num1,num2) {
  var result = num1 * num2;
  alert(result); 
  return result;
}
// multiply(4,7);
// multiply(20,20);
// multiply(0.5,3);

// document.querySelector('html').onclick = function() {
//     alert('Ouch! Stop poking me!');
// }
// var myHTML = document.querySelector('html');
// myHTML.onclick = function() {alert('Ouch! Stop poking me!');};

var myImage = document.querySelector('img');

myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/TOP-2.png') {
      myImage.setAttribute ('src','images/sticker.png');
    } else {
      myImage.setAttribute ('src','images/TOP-2.png');
    }
}


function setUserName() {
  var myName = prompt('Please enter your name.');
  localStorage.setItem('name', myName);
  myHeading.innerHTML = 'Mozilla is cool, ' + myName;
}

var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');
myButton.onclick = function() {
  setUserName();
}



if(!localStorage.getItem('name')) {
  setUserName();
} else {
  var storedName = localStorage.getItem('name');
  myHeading.innerHTML = 'Mozilla is cool, ' + storedName;
}