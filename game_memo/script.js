let box = document.getElementById('box');
let selectSize = document.getElementById('size');
let options = Array.from(selectSize.options);
let fieldSize = 0;
let nullBox = document.getElementById('null_box');
let again = document.querySelector('button');

// секундомер





// добываем и шафлим эмоджи
function emojiSearch() {
    return emoji [Math.floor(Math.random() * emoji.length)];
};
function shuffle(array) {
    array.sort(() => Math.random() - 0.5);
};

// создаём массив парных эмоджи
function smilesCard() {
    let smilesHalf = [];
    for (let i = 0; i < (fieldSize*fieldSize/2); i++) {
        smilesHalf.push(emojiSearch())
    }
    let smilesAll = smilesHalf.concat(smilesHalf);
    shuffle(smilesAll);
    createCards(smilesAll);
}
// создаём карточки игры
let cards = [];

function createCards(smilesAll) {
    for (let i = 0; i < smilesAll.length; i++) {
        let card = document.createElement('div');
        card.className = 'card';
        cards.push(card);
        card.innerHTML = smilesAll[i];
        box.appendChild(card);
    }
    nullBox.style.display = 'none';
};

// выбор размера поля и создание карточек
    selectSize.onchange = function count(event) {
        fieldSize = event.target.value;
        box.className = 's'+fieldSize;
        smilesCard();
        openCard();
    }

// по клику 
function openCard() {   
    //пара "открытых" для сравнения
    let pair = [];
    cards.forEach(element => element.addEventListener('click', function openCards() {
    // снять возможность клика по ранее выбранным карточкам
    if (element.className !== 'card') {
        return false
    } {
    // открыто меньше 2х карточек    
        if (pair.length < 2) {
            pair.push(element);
            this.classList.add('view');
    // открыто 2 и больше картотчек
        } if (pair.length > 1) {        
            let previous = 0;
            pair.forEach(function(element) {
    //совпало значение открытых карточек - скрываем
                if (previous == element.innerHTML) {
                    setTimeout(() => {
                        if (pair.length < 2) {
                            return
                        }
                        pair.forEach(element => 
                        element.classList.add('done'));
                        pair.forEach(element => 
                        element.classList.remove('view')); 
                        pair = []
                    }, 
                    1000);
                }
                previous = element.innerHTML;
            });
            setTimeout(() => {
                if (pair.length > 1) {
                    pair.forEach(element => 
                    element.classList.remove('view'));
                    pair = []}
                }, 
                1000);            

            let gameOver = cards.every(element => element.className !== 'card');
            let final = function() {
                if (gameOver == true) {
                    box.textContent = "U're WIN";
                    box.style.fontSize = '80px';
                    box.style. padding = '15px';
                    again.style.display = 'inline-block';
                }};
            
                setTimeout(() => {
                    final()}, 1500);   
        }};
}))};

again.addEventListener('click', function playAgain() {
    box.textContent = '';
    box.style.fontSize = '1rem';
    box.style. padding = '0';
    nullBox.style.display = 'flex';
    again.style.display = 'none';
    options[0].selected = true;    
});