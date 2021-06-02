const findTheOldest = function(arr) {
    return arr.reduce((oldest, current) => {
        let oldestAge;
        if (!oldest.yearOfDeath) {
            oldestAge = new Date().getFullYear() - oldest.yearOfBirth;
        } else {
            oldestAge = oldest.yearOfDeath - oldest.yearOfBirth
        }
        let currentAge;
        if (!current.yearOfDeath) {
            currentAge = new Date().getFullYear() - current.yearOfBirth;
        } else {
            currentAge = current.yearOfDeath - current.yearOfBirth;
        }
        if (currentAge > oldestAge) {
            return current;
        } else {
            return oldest;
        }
    })

    // const ages = arr.map((person) => {
    //     if (!person.yearOfDeath) {
    //         return (new Date().getFullYear - person.yearOfBirth)
    //     } else {
    //         return person.yearOfDeath - person.yearOfBirth;
    //     }
    // })

    // return ages.reduce((oldest, age) => {
    //     if (age > oldest) {
    //         oldest = age;
    //         }
    // })
    
};

module.exports = findTheOldest;
