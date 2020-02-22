// Given two integers a and b, which can be positive or negative, 
// find the sum of all the numbers between including them too and return it. 
// If the two numbers are equal return a or b.

// Note: a and b are not ordered!

function getSum(a,b) {
    
    // Se A = B, o programa acaba
    if (a === b) return a

    soma = 0

    if (b > a) maior = b, menor = a
    if (a > b) maior = a, menor = b

    while (menor !== maior + 1) soma += menor++
    return soma
}

console.log(getSum(-1, 2))