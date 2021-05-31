const reverseString = function(string) {
    const stringArr = string.split('');
    const reverseArr = stringArr.reverse();
    return reverseArr.join('');
};

module.exports = reverseString;
