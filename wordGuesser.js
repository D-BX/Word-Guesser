alert('THIS IS WORDLE REVAMPED');

let fiveLetterWords = [
    'APPLE',
    'HELLO',
    'STILL',
    'BANGS',
    'WIELD',
    'JUMPS',
    'VERBS',
    'FIELD',
    'FRAME',
    ];
    let guesses = [];
    let currentWord = '';
    
    
    document.addEventListener("DOMContentLoaded", () => {
    document.getElementById('guess-button').addEventListener('click', () => {
    guess();
    });
    document.getElementById('new-game').addEventListener('click', () => {
    startGame();
    });
    
    startGame();
    });
    
    function createString(guesses) {
    let wordx = "";
    guesses.slice().reverse().forEach(str => {
    //each character
    for(let i = 0; i < str.length; i++) {
    if(str.charAt(i) === currentWord.charAt(i)) {
    wordx += '<span class="text-success">' + str.charAt(i) + "</span>";
    } else if(currentWord.includes(str.charAt(i))) {
    wordx += '<span class="text-warning">' + str.charAt(i) + "</span>";
    } else {
    wordx += '<span class="text-danger">' + str.charAt(i) + "</span>";
    }
    }
    wordx += "<br>";
    });
    return wordx;
    }
    
    function startGame() {
    currentWord = fiveLetterWords[Math.floor(Math.random() * fiveLetterWords.length)];
    guesses = [];
    document.getElementById('guesses').innerHTML = "";
    }
    
    function guess(input) {
    guesses.push(document.getElementById('guess').value.toUpperCase());
    document.getElementById('guesses').innerHTML = createString(guesses);
    }
