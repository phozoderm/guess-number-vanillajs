let secretNumber = Math.trunc(Math.random() * 20) + 1;
console.log(secretNumber)
let score = 20;
let highScore = 0;
// let isGameOver = false;

//message
const displayMessage = function (message) {
    document.querySelector('.message').textContent = message
};

//check
document.querySelector('.check').addEventListener('click', function () {
    // if (isGameOver){
    //     return
    // }
    const guess = Number(document.querySelector('.guess').value);
    console.log(guess, typeof guess, secretNumber)
    if (document.querySelector('.message').textContent !== 'Game over!'){
        if (!guess) {
            displayMessage('There is no number')
        } else if (guess === secretNumber) {
            displayMessage('You won!')
            document.querySelector('.number').textContent = secretNumber
            document.querySelector('body').style.backgroundColor = 'green'
            if (score > highScore) {
                highScore = score
                document.querySelector('.highScore').textContent = score.toString()
            }
        }
        else if (guess !== secretNumber){
            if (score > 1){
                displayMessage(guess > secretNumber ? 'Too high!' : 'Too low!' );
                score--
                document.querySelector('.score').textContent = score.toString()
            }
            else {
                // isGameOver = true;
                displayMessage('Game over!');
                document.querySelector('.score').textContent = '0';
                document.querySelector('.number').textContent = secretNumber
            }
        }
    }

    // else if (guess > secretNumber) {
    //     displayMessage('Too high!')
    //     score--
    //     document.querySelector('.score').textContent = score.toString()
    //     if (score <= 0) {
    //         displayMessage('Game over!')
    //         document.querySelector('.number').textContent = secretNumber
    //     }
    // } else if (guess < secretNumber) {
    //     displayMessage('Too low!')
    //     score--
    //     document.querySelector('.score').textContent = score.toString()
    //     if (score <= 0) {
    //         displayMessage('Game over!')
    //         document.querySelector('.number').textContent = secretNumber
    //     }
    // }
})

// again
document.querySelector('.again').addEventListener('click', function () {
    score = 20;
    document.querySelector('.score').textContent = score.toString();
    document.querySelector('.message').textContent = 'Start guessing...';
    secretNumber = Math.trunc(Math.random() * 20) + 1;
    document.querySelector('.guess').value = '';
    document.querySelector('.number').textContent = '?';
    document.querySelector('body').style.backgroundColor = '#222';
    // isGameOver = false;
})
