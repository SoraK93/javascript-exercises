const sumAll = function(a, b) {
    const checkA = !Number.isInteger(a) || a < 0;
    const checkB = !Number.isInteger(b) || b < 0;
    let total = 0;

    if (checkA || checkB) {
        return "ERROR"
    }

    (a > b) ? [a, b] = [b, a] : "";

    for (let i=a; i<b+1; i++){
        total += i;
    }

    return total;
    // return (b-a+1) * (a+b) / 2;
};

// Do not edit below this line
module.exports = sumAll;
