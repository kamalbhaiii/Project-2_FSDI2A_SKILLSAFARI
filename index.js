'use strict';

const result = document.getElementById('result');
let [computer_score, user_score] = [0, 0];

//When user clicks
//generate a random choice of the computer languages
//display choices
//It should compare the com choice with user choice
//it should show a message about
//it should update the score

let gameRules = {
  Rock: {
    Rock: 'draw',
    Scissors: 'win',
    Paper: 'lose',
    Lizard: 'win',
    Spock: 'lose'
  },
  Paper: {
    Paper: 'draw',
    Rock: 'win',
    Scissors: 'lose',
    Lizard:'lose',
    Spock:'Win'
  },

  Scissors: {
    Scissors: 'draw',
    Paper: 'win',
    Rock: 'lose',
    Lizard:'win',
    Spock:'lose'
  },

  Lizard:{
    Scissors: 'lose',
    Paper: 'win',
    Rock: 'lose',
    Lizard:'draw',
    Spock:'win'
  },

  Spock:{
    Scissors: 'win',
    Paper: 'lose',
    Rock: 'win',
    Lizard:'lose',
    Spock:'draw'
  }
};



function clicked(input) {
  let choices = ['Rock', 'Paper', 'Scissors', 'Lizard', 'Spock'];
  let randomNumber = Math.trunc(Math.random() * 5);
  let computer_choice = choices[randomNumber];
  document.getElementById(
    'user_choice'
  ).innerHTML = `Computer choose <span>${computer_choice.toUpperCase()}</span>`;
  document.getElementById(
    'computer_choice'
  ).innerHTML = `You Choose <span>${input.toUpperCase()}</span>`;

  switch (gameRules[input][computer_choice]) {
    case 'win':
      result.innerText = 'You win';
      result.style.cssText = 'background-color: green';
      user_score++;
      break;
    case 'lose':
      result.innerText = 'You lose';
      result.style.cssText = 'background-color: red';
      computer_score++; //
      break;
    case 'draw':
      result.innerText = 'You draw';
      result.style.cssText = 'background-color:grey'
      break;
  }

  document.getElementById('computer_score').innerHTML = computer_score;
  document.getElementById('user_score').innerHTML = user_score;
  round++;
}

// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("modalBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
} 
