const sumAll = function(num1, num2) {
    if ((num1 || num2) < 0) {
        return 'ERROR'
    }

    if (!Number.isInteger(num1) || !Number.isInteger(num2)) {
        return 'ERROR'
    }
    if (num1 > num2) {
        [num1, num2] = [num2, num1]
    }
    let total = 0
    for (let i = num1; i <= num2; i++) {
        total += i
    }
    return total

};

module.exports = sumAll;
