const words = ['apple', 'banana', 'cherry', 'grape', 'kiwi', 'lemon', 'mango', 'orange', 'peach', 'strawberry'];
let currentWord = '';
let scrambledWord = '';

document.getElementById('submit-guess').addEventListener('click', checkGuess);
document.getElementById('reset-game').addEventListener('click', resetGame);

function scrambleWord(word) {
    const characters = word.split('');
    for (let i = characters.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [characters[i], characters[j]] = [characters[j], characters[i]];
    }
    return characters.join('');
}

function newGame() {
    currentWord = words[Math.floor(Math.random() * words.length)];
    scrambledWord = scrambleWord(currentWord);
    document.getElementById('scrambled-word').textContent = scrambledWord;
}

function checkGuess() {
    const userInput = document.getElementById('user-input').value;
    const feedback = document.getElementById('feedback');
    if (userInput.toLowerCase() === currentWord) {
        feedback.textContent = 'Congratulations! You guessed the word!';
        feedback.style.color = 'green';
    } else {
        feedback.textContent = 'Sorry, that is incorrect. Try again!';
        feedback.style.color = 'red';
   
