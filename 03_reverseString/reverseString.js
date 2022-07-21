const reverseString = function (text) {
    text = text.split('');
    reversedText = [];

    for (let i = text.length - 1 ; i >= 0; i--) {
        reversedText.push(text[i]); 
    }
    
    return reversedText.join('');
};

// Do not edit below this line
module.exports = reverseString;
