const repeatString = function (text, numOfRepetiotions) {
    if (numOfRepetiotions < 0)
        return 'ERROR';
    newText = '';
    for (let i = 0; i < numOfRepetiotions; i++)
        newText += text;
    return newText;
};

// Do not edit below this line
module.exports = repeatString;
