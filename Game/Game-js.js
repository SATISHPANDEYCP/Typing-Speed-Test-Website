window.addEventListener('load', init);

let time = 10;
let score = 0;
let isPlaying;

const WordInput = document.querySelector('#label');
const CurrentWord = document.querySelector('#currentword');
const Seconds = document.querySelector('#number');
const Message = document.querySelector('#message');
const TimeDisplay = document.querySelector('#time');
const ScoreDisplay = document.querySelector('#score');
const RestartButton = document.createElement('button'); // Create the restart button


// typed in heading
document.addEventListener("DOMContentLoaded", function () {
    var options = {
        strings: [
            "Success starts with self-belief.",
        ],
        typeSpeed: 50,        
        backSpeed: 30,        
        backDelay: 1500,      
        startDelay: 500,      
        loop: false,           
        showCursor: false,    
    };

    var typed = new Typed("#head", options);
});




const words = [
    'jacob stood on his tiptoes',
    'the car turned the corner',
    'kelly twirled in circles',
    'aaron made a picture',
    'the staff performed well',
    'white shirt always looks sharp',
    'the cat and the dog yowled',
    'open the jar carefully',
    'make the best of things',
    'the cat and dog ate',
    'i opened all the gift',
    'when i go to the beach',
    'i went to the beach',
    'i will shop at the store',
    'wolf ate steak at the zoo',
    'they have to be short',
    'they have to be long'
];

function init() {
    showWords(words);

    WordInput.addEventListener('input', startMatch);
    setInterval(countdown, 1000);
    setInterval(checkStatus, 50);

    // Add the restart button to the DOM
    RestartButton.id = 'restartButton';
    RestartButton.textContent = 'Restart Game';
    RestartButton.style.display = 'none'; // Hide initially
    RestartButton.style.margin = '20px auto';
    RestartButton.style.backgroundColor = '#ff4757';
    RestartButton.style.color = '#fff';
    RestartButton.style.border = 'none';
    RestartButton.style.padding = '10px 20px';
    RestartButton.style.borderRadius = '8px';
    RestartButton.style.cursor = 'pointer';
    RestartButton.style.fontSize = '1.2rem';
    RestartButton.style.textAlign = 'center';
    RestartButton.addEventListener('click', restartGame);
    document.querySelector('#container').appendChild(RestartButton);
}

function startMatch() {
    if (match()) {
        isPlaying = true;
        time = 11;
        showWords(words);
        WordInput.value = '';
        score++;
    }

    ScoreDisplay.innerHTML = score === -1 ? 0 : score;
}

function match() {
    if (WordInput.value === CurrentWord.innerHTML) {
        Message.innerHTML = 'Correct!!';
        return true;
    } else {
        Message.innerHTML = '';
        return false;
    }
}

function showWords(words) {
    const randIndex = Math.floor(Math.random() * words.length);
    CurrentWord.innerHTML = words[randIndex];
}

function countdown() {
    if (time > 0) {
        time--;
    } else if (time === 0) {
        isPlaying = false;
    }
    TimeDisplay.innerHTML = time;
}

function checkStatus() {
    if (!isPlaying && time === 0) {
        Message.innerHTML = "Game over!!! Better Luck Next Time";
        RestartButton.style.display = 'block'; // Show restart button
        WordInput.disabled = true; // Disable input field
        score = -1;
    }
}

function restartGame() {
    time = 10;
    score = 0;
    isPlaying = true;
    WordInput.value = '';
    WordInput.disabled = false; // Enable input field
    Message.innerHTML = '';
    ScoreDisplay.innerHTML = 0;
    TimeDisplay.innerHTML = time;
    RestartButton.style.display = 'none'; // Hide restart button
    showWords(words);
}
