function iqTest(numbers) {
    numbers = numbers.split(' ').map(num => Number(num))
    
    par = numbers.filter(num => num % 2 === 0)
    impar = numbers.filter(num => num % 2 === 1)

    return par.length < impar.length ? numbers.indexOf(par[0]) + 1 : numbers.indexOf(impar[0]) + 1
}

var resposta = iqTest("2 4 7 8 10")
console.log(resposta)