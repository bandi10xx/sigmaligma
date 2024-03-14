let toggle = false
input.onButtonPressed(Button.A, function () {
    if (toggle == true) {
        toggle = false
    } else {
        toggle = true
    }
})
basic.forever(function () {
    for (let index = 0; index < 4; index++) {
        if (toggle == true) {
            basic.showLeds(`
                # # # # #
                # . . . #
                # . . . #
                # . . . #
                # # # # #
                `)
        } else {
            basic.clearScreen()
        }
    }
})
