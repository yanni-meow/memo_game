let meow = n => n*2;
// alert(meow(6));

let br = (n, m) => n*m;
// alert(br(4,5));

let mr = function(n,m) {
    return n*m-1;
}
// alert(mr(4,5));

let chooseWord = function (words) {
    return words[Math.floor(Math.random() * words.length)];
}

let choosePair = function (words, number) {
    return words[Math.floor(Math.random() * words.length)] + number[Math.floor(Math.random() * words.length)];
}

let magic = ['sky', 'water', 'wind', 'eath'];
let animal = ['hourse', 'pingiun', 'bird'];
let num = [10, 11, 12, 13, 14, 15];