const sentences = [
    "After all, you're only an immortal until someone manages to kill you. After that, you were just long-lived.",
    "As long as poverty, injustice and gross inequality persist in our world, none of us can truly rest.",
    "We were like deaf people trying to dance to a beat we couldn't hear, long after the music actually stopped.",
    "Time plays like an accordion in the way it can stretch out and compress itself in a thousand melodic ways.",
    "Life is beautiful, as long as it consumes you. When it is rushing through you, life is gorgeous and glorious."
];

const msg = document.getElementById('msg');
const typedWords = document.getElementById('mywords');
const btn = document.getElementById('btn');

let startTime, endTime;

const playGame = () => {
    let randomNumber = Math.floor(Math.random() * sentences.length);
    msg.innerText = sentences[randomNumber];
    let date = new Date();
    startTime = date.getTime();
    btn.innerText = "Done";
};

const endGame = () => {
    let date = new Date();
    endTime = date.getTime();
    let totalTime = Math.round((endTime - startTime) / 1000); // Time in seconds

    let totalStr = typedWords.value.trim();
    let wordCount = wordCounter(totalStr);
    let accuracy = calculateAccuracy(msg.innerText, totalStr);

    let finalMsg = `You typed ${wordCount} words in ${totalTime} seconds with an accuracy of ${accuracy}%.`;
    msg.innerText = finalMsg;

    typedWords.value = ""; // Clear the textarea
    btn.innerText = "Start"; // Reset button text
};

const wordCounter = (str) => {
    let trimmedStr = str.trim().replace(/\s+/g, ' ');
    return trimmedStr ? trimmedStr.split(" ").length : 0;
};

const calculateAccuracy = (original, typed) => {
    let originalWords = original.split(" ");
    let typedWords = typed.split(" ");

    let correctWords = 0;
    originalWords.forEach((word, index) => {
        if (word === typedWords[index]) {
            correctWords++;
        }
    });

    return ((correctWords / originalWords.length) * 100).toFixed(2); // Accuracy in percentage
};

btn.addEventListener('click', function () {
    if (this.innerText === 'Start') {
        typedWords.disabled = false;
        playGame();
    } else if (this.innerText === "Done") {
        typedWords.disabled = true;
        endGame();
    }
});

document.getElementById('gameBtn').addEventListener('click', function () {
    window.location.href = '../index.html';
});

// typed for welcome massage
document.addEventListener("DOMContentLoaded", () => {
	const options = {
		strings: [
		"Welcome To Typing ⌨️ Speed Test Website "
		],
		typeSpeed: 100, // Speed of typing (in ms)
		backSpeed: 50,  // Speed of backspacing (in ms)
		backDelay: 1000, // Delay before backspacing (in ms)
		loop: false       // Loop the typing effect
	};

	const typed = new Typed(".typed-text", options);
});