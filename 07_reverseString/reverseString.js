const reverseString = function(text) {
    let textReverse = "";

    if (!text) {
        return textReverse;
    }
    
    for(let i = text.length - 1; i >= 0; i--){
        textReverse += text[i];
    }

    return textReverse;
};

// Do not edit below this line
module.exports = reverseString;
