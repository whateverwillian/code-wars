// Bob is preparing to pass IQ test. The most frequent task in this test is to find out 
// which one of the given numbers differs from the others. Bob observed that one number 
// usually differs from the others in evenness. Help Bob — to check his answers, 
// he needs a program that among the given numbers finds one that is different in evenness, 
// and return a position of this number.

// ! Keep in mind that your task is to help Bob solve a real IQ test, 
// which means indexes of the elements start from 1 (not 0)

function iqTest(numbers){
    var par, impar, number
    number = numbers.split(' ')
    par = []
    impar = []

    for (i=0; i<number.length; i++) {
        Number(number[i]) % 2 === 0 ? 
            par.push({index: i, number: number[i]}) : 
            impar.push({index: i, number: number[i]})
    }
    
    if (par.length === 1) {
        return par[0].index + 1
    } else if (impar.length === 1) {
        return impar[0].index + 1
    }
}

console.log(iqTest("2 4 7 8 10"))