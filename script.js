//wykonywanie kodu cyklicznie

setInterval(
    function() {
        console.log('Minęła sekunda!')
    },
    1000
)

//zakres widoczności zmiennych (globalne i lokalne)

function main() {
    var secondsCounter = 1

    var intervalId = setInterval(
        function() {
            console.log(secondsCounter++)
        },
        1000
    )

    setTimeout {
        function() {
            clearInterval(intervalId)
        },
        5000
    }
}

main()

//aby coś było potraktowane jako wyrażenie, a nie deklaracja, należy to napisać w nawiasach ()

(function() {
    var secondsCounter = 1

    var intervalId = setInterval(
        function() {
            console.log(secondsCounter++)
        },
        1000
    )

    setTimeout {
        function() {
            clearInterval(intervalId)
        },
        5000
    }
})