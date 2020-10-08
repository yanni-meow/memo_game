// window.onload = function () {

    let box = document.getElementById('box');
    let selectSize = document.getElementById('size');
    let options = Array.from(selectSize.options);
    let fieldSize = 0;

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
    let cards = [ ];
//пара "открытых" для сравнения
    let pair = [];

    function createCards(smilesAll) {
        for (let i = 0; i < smilesAll.length; i++) {
            let card = document.createElement('div');
            card.className = 'card';
            cards.push(card);
            card.innerHTML = smilesAll[i];
            box.appendChild(card);
        }
        document.getElementById('null_box').style.display = 'none';
    };
    
// выбор размера поля и создание карточек
    selectSize.onchange = function count(event) {
        fieldSize = event.target.value;
        console.log(fieldSize);
        box.className = 's'+fieldSize;
        console.log(box);
        smilesCard();
        openCard();
    }

// по клику 
function openCard() {   
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
                    // console.log('sucses')
                    setTimeout(() => {
                        pair.forEach(element => 
                        element.classList.add('done'))}, 
                        1000);
                }
                previous = element.innerHTML;
            })
            setTimeout(() => {
                pair.forEach(element => 
                element.classList.remove('view')); 
                pair = []}, 
                1000);            

            let gameOver = cards.every(element => element.className !== 'card');
            let final = function() {
                if (gameOver == true) {
                    box.textContent = "U're WIN";
                    box.style.fontSize = '80px';
                    box.style.background = 'rgba(60, 138, 141, 0.562)';
                }
            }
            final();   
     }};
}))};