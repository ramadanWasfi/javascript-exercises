const findTheOldest = function(people) {
    const result = people.sort((a,b) => {
        if(a.yearOfDeath === undefined) {
            a.yearOfDeath = Number((new Date()).getFullYear());
        }
        if(b.yearOfDeath === undefined) {
            b.yearOfDeath = Number((new Date()).getFullYear());
        }
        let ageA = a.yearOfDeath - a.yearOfBirth;
        let ageB = b.yearOfDeath - b.yearOfBirth;
        return ageA > ageB ? -1 : 1;
    })
    return result[0];
};

// Do not edit below this line
module.exports = findTheOldest;
