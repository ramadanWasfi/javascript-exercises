const palindromes = function (text) {
    text = removePunctutaion(text);
    text = text.toLowerCase();
    palinDrome = true;
    let start = 0;
    for (let i = text.length - 1; i >= 0; i--, start++) {
        if (text[start] !== text[i])
            palinDrome = false;

    }
    return palinDrome;
};

function removePunctutaion(text) {
    text = text.replace(/!/g, '');
    text = text.replace('.', '');
    text = text.replace(/,/g, '');
    text = text.replace(/ /g, '');
    return text;
}
// Do not edit below this line
module.exports = palindromes;
