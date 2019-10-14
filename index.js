// Code your solution here

function findMatching(arry, str) {
    //returns the matching list of drivers. The function should be case insensitive
    return arry.filter(driver => driver.toUpperCase() === str.toUpperCase())
}

function fuzzyMatch(arry, str) {
    //returns all drivers whose names begin with the provided letters
    return arry.filter(driver => driver.startsWith(str))
}

function matchName(arry, str) {
    //returns each element whose name property matches the provided string argument.
    return arry.filter(driver => driver.name === str)
}
