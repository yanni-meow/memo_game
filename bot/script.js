let chooseSpich = function (words) {
    return words[Math.floor(Math.random() * words.length)]; 
};

let go = function () {
    let noun = ['котя', 'пёся', 'кулебяка', 'забияка', 'вредина'];
    let adjective = ['милашная', 'жирняшная', 'мямяшная', '=^.^=', 'вредняшная'];
    let verb = ['беги', 'смейся', 'падай', 'кричи', 'пой'];
    
    let sentence = 'Эй, ' + chooseSpich(noun) + ' ' + chooseSpich(adjective) + ', ' + chooseSpich(verb) + ' скорее!';
    
    return sentence;
};
