console.log('Hello Kasia!')

var textVariable = "Kasia"
console.log(textVariable)

var numberVariable = 88
console.log(numberVariable)

//inny typ zmiennej niż string i number - boolean (true/false)
var boolVariable = true
console.log(boolVariable)

//null
var nullVariable = null
console.log(nullVariable)

//undefined
var undefinedVariable = undefined
console.log(undefinedVariable)



//objects

//object with data
var simplestObj = {
    name: "Kasia",
    lastname: "Rozmysł"
}
console.log(simplestObj)

//nested object with data
var nestedObj = {
    name: "Kasia",
    car: {
        brand: "Citroen",
        model: "C3"
    }
}
console.log(nestedObj)
console.log(nestedObj.car.model) //do każdej kolejnej właściwości odwołujemy się po kropce
console.log(nestedObj.car.year)



//arrays (tablice)
var simpleArray = [
    1,
    { name: 'Basia' },
    2,
    { array: [1, 3, 7] },
    3,
    4,
    5
]
console.log(simpleArray)
console.log(simpleArray[4])
console.log(simpleArray[1].name) //inną możliwością zamiast odwołania po kropce jest nawias kwadratowy ['name']