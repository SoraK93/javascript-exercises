const repeatString = function(text, times) {
    if (times < 0){
        return "ERROR"
    };
    
    let repeatText = "";
    for (let i=0; i<times; i++) {
        repeatText += text;
    }
    return repeatText;
};
console.log(repeatString("hey", 3));
// Do not edit below this line
module.exports = repeatString;
