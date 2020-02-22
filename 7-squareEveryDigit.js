// Welcome. In this kata, you are asked to square every digit of a number.

// For example, if we run 9119 through the function, 811181 will come out, because 92 is 81 and 12 is 1.

// Note: The function accepts an integer and returns an integer

function squareDigits(num){
    var result, aux
    result = ''
    
    // Transformando o número em um array para poder percorrer
    number = Array.from(num.toString(10))

    // Ao percorrer, vamos:
    // 1. Tranformar o elemento em número
    // 2. Realizar o quadrado do número
    // 3. Concatenar os resultados
    for (var i=0; i<number.length; i++) {
        aux = Number(number[i]) // 1.
        aux = aux*aux // 2.
        result = result + aux // 3.
    }    
    
    // No final, trasformar a string em número
    return Number(result)
}


var teste = 1234
var funcao = squareDigits(teste)

console.log(`O tipo do input é ${typeof teste}. O tipo do output é ${typeof funcao}. E o resultado é ${funcao}.`)
