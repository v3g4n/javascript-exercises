const repeatString = function(string, number) {
    if (number < 0) {
        return 'ERROR'
    }
    let newString = '';
    for (let i = 1; i <= number; i++) {
        newString += string;
    }
    return newString
};

module.exports = repeatString;
