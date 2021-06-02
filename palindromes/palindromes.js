const palindromes = function (str) {
    const regexp = /[A-Z]/gi;
    const cleanStr = str.match(regexp).join('').toLowerCase();
    const len = cleanStr.length
    for (let i=0; i<len; i++) {
        if (cleanStr[i] !== cleanStr[(len-1)-i]) {
            return false;
        } 
    }
    return true;
};

module.exports = palindromes;
