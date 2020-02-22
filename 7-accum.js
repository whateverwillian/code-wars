// accum("abcd") -> "A-Bb-Ccc-Dddd"
// accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
// accum("cwAt") -> "C-Ww-Aaa-Tttt"

function accum(s) {

    result = ''
    s = s.split('')
    
    // Fazer um loop, que pega o índice da letra, e esse é o número de vezes que ela vai se repetir
    for (i=0; i<s.length; i++) {

        for (j=0; j <= i; j++) {
            j === 0 ? result += s[i].toUpperCase() : result += s[i].toLowerCase()    

        }

        if (i !== s.length - 1) result += '-'
    }

    return result

}

resultado = accum('abcd')
console.log(resultado)