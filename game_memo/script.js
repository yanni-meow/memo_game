window.onload = function () {

    let box = document.getElementById('box');

// добываем и шафлим эмоджи
    function emojiSearch() {
        return emoji [Math.floor(Math.random() * emoji.length)];
    };

    function choose50() {
        let smiles50 = [];
        for (let i = 0; i < 50; i++) {
            smiles50.push(emojiSearch())
        }
        return smiles50;
    }

    let smiles50 = choose50();
    let smiles100 = smiles50.concat(smiles50);
    function shuffle(array) {
        array.sort(() => Math.random() - 0.5);
    };
    shuffle(smiles100);

// создаем карточки в зависимости от    
    function createCards() {
        for (let i = 0; i < 100; i++) {
            let card = document.createElement('div');
            card.className = 'card';
            card.innerHTML = smiles100[i];

            let box = document.getElementById('box');
            box.appendChild(card);
        }
    };
    createCards();

// массив всех созданных карточек
    let cardGroup = document.querySelectorAll('.card');
    let cards = Array.from(cardGroup);

//пара "открытых" для сравнения
    let pair = [];

// по клику    
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
                        box.textContent = 'GameOver';
                        box.style.fontSize = '100px';
                        box.style.background = 'rgba(60, 138, 141, 0.562)';
                    }
                }
                final();   
            }}
        }
    ));
};