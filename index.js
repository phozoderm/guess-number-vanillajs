let secretNumber = Math.trunc(Math.random()*20) + 1;
console.log(secretNumber)
let score = 20;
let highScore = 0;

//message
const displayMessage = function (message){
  document.querySelector('.message').textContent = message
};

//check
document.querySelector('.check').addEventListener('click', function (){
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess, secretNumber)
  if (!guess) {
    displayMessage('There is no number')
  }
  else if (guess===secretNumber){
    displayMessage('You won!')
    document.querySelector('.number').textContent = secretNumber
    if (score > highScore){
      highScore = score
      document.querySelector('.highscore').textContent = score.toString()
    }
  }
  else if (guess > secretNumber){
    displayMessage('Too high!')
    score--
    document.querySelector('.score').textContent = score.toString()
  }
  else if (guess < secretNumber){
    displayMessage('Too low!')
    score--
    document.querySelector('.score').textContent = score.toString()
  }
})

// again
document.querySelector('.again').addEventListener('click', function (){
  score = 20
  document.querySelector('.score').textContent = score.toString()
  document.querySelector('.message').textContent = 'Start guessing...'
  secretNumber = Math.trunc(Math.random()*20) - 1;
  document.querySelector('.guess').value = ''
  document.querySelector('.number').textContent = '?'
})
