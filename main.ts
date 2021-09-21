let celsius = 0
input.onButtonPressed(Button.AB, function () {
    basic.showNumber(celsius)
})
basic.forever(function () {
    celsius = input.temperature()
})
