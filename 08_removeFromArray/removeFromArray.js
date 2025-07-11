const removeFromArray = function(arr, ...args) {
    let newArr;
    for (item of args) {
        newArr = (newArr || arr).filter(ele => ele !== item);
    }
    return newArr;
};
console.log(removeFromArray([1, 2, 3, 4], 3))
// Do not edit below this line
module.exports = removeFromArray;
