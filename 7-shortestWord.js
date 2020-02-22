// Simple, given a string of words, return the length of the shortest word(s).

// String will never be empty and you do not need to account for different data types.

function findShort(s){

    s = s.split(' ')
    values = s.map(string => string.length)
    min = Math.min(...values)
    return min

}

function findShort2(s){

    values = s.split(' ').map(string => string.length)
    return Math.min(...values)

}

resultado = findShort('I am inevitable')
console.log(resultado)