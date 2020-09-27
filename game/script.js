var words = ['watermelon', 'peach', 'apple', 'banana'];
var word = words[Math.floor(Math.random() * words.length)];

var answerArray = [];
for (let i = 0; i < word.length; i++) {
    answerArray[i] = '_'; 
}
var remainingLetters = word.length;

while (remainingLetters > 0) {
    alert(answerArray.join(' '));
    var guess = prompt('give me a letter or fuck off by "cancel"');
    if (guess === null) {
        break; 
    } else if (guess.length !== 1) {
        alert ('give me just ONE letter');
    } else {
        for (let j = 0; j < word.length; j++) {
        if (word[j] === guess) {
            answerArray[j] = guess;
            remainingLetters--;
            }        
        }
    }
}

alert(answerArray.join(' '));
alert('gg! it was a(n)' + word);
