//funcion del ara de un cuculo 
//const PI = 3.14
//
//function areaCirculo(radio) {
//    return PI * (radio ** 2)
//
//}
//
//areaCirculo(25)

//arrw

//const circuloArea = radius => PI * (radio ** 2)

//var x = (`hola cara de perro`)

//function listo(capitalizar) {
//    return split`x` | join(`split` x **)

//}

// 'hOlA A todOs' => 'Hola A Todos'
function capitalizer(phrase) {
    var stringToArray = phrase.toLowerCase().split(' ')
    var arrayCapitalize = []
    for (var index = 0; index < stringToArray.length; index++) {
        var word = stringToArray[index]
        var wordCapitalize = `${word[0].toUpperCase()}${word.slice(1)}`
        arrayCapitalize[index] = wordCapitalize
    }
    var arrayToString = arrayCapitalize.join(' ')
    return arrayToString
