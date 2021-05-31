const removeFromArray = function(arr, ...elements) {
    for (let ele of elements) {
        if (! arr.includes(ele)) {
            continue;
        }
        const indexToRemove = arr.indexOf(ele);
        arr = arr.slice(0, indexToRemove).concat(arr.slice(indexToRemove+1));
    }
    return arr;
    
};

module.exports = removeFromArray;
