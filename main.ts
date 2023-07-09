function doEffect (variant: number) {
    if (variant == 0) {
        effect1()
    } else if (variant == 1) {
        effect2()
    } else if (variant == 2) {
        effect3()
    }
}
function effect1 () {
    if (sound) {
        music.play(music.tonePlayable(988, music.beat(BeatFraction.Sixteenth)), music.PlaybackMode.InBackground)
    }
    for (let row = 0; row <= 4; row++) {
        for (let column = 0; column <= 4; column++) {
            if (row % 2 == 0) {
                led.toggle(column, row)
            } else {
                led.toggle(4 - column, row)
            }
            basic.pause(effectSpeed)
        }
    }
    if (sound) {
        music.play(music.tonePlayable(698, music.beat(BeatFraction.Sixteenth)), music.PlaybackMode.InBackground)
    }
    for (let row = 0; row <= 4; row++) {
        for (let column = 0; column <= 4; column++) {
            if (row % 2 == 1) {
                led.toggle(column, 4 - row)
            } else {
                led.toggle(4 - column, 4 - row)
            }
            basic.pause(effectSpeed)
        }
    }
}
input.onButtonPressed(Button.A, function () {
    sound = !(sound)
})
input.onButtonPressed(Button.AB, function () {
    if (effectSpeed > 10) {
        effectSpeed = effectSpeed / 2
    } else {
        effectSpeed = effectSpeedMax
    }
})
function effect2 () {
    if (sound) {
        music.play(music.tonePlayable(932, music.beat(BeatFraction.Sixteenth)), music.PlaybackMode.InBackground)
    }
    for (let column = 0; column <= 4; column++) {
        for (let row = 0; row <= 4; row++) {
            if (column % 2 == 0) {
                led.toggle(column, row)
            } else {
                led.toggle(column, 4 - row)
            }
            basic.pause(effectSpeed)
        }
    }
    if (sound) {
        music.play(music.tonePlayable(659, music.beat(BeatFraction.Sixteenth)), music.PlaybackMode.InBackground)
    }
    for (let column = 0; column <= 4; column++) {
        for (let row = 0; row <= 4; row++) {
            if (column % 2 == 1) {
                led.toggle(4 - column, row)
            } else {
                led.toggle(4 - column, 4 - row)
            }
            basic.pause(effectSpeed)
        }
    }
}
input.onButtonPressed(Button.B, function () {
    if (effect + 1 < numberOfEffects) {
        effect += 1
    } else {
        effect = 0
    }
})
function effect3 () {
    images.createImage(`
        . . . . #
        . . . . .
        . . . . .
        . . . . .
        # . . . .
        `).showImage(0, effectSpeed)
    images.createImage(`
        . . . # #
        . . . . #
        . . . . .
        # . . . .
        # # . . .
        `).showImage(0, effectSpeed)
    images.createImage(`
        . . # # #
        . . . # #
        # . . . #
        # # . . .
        # # # . .
        `).showImage(0, effectSpeed)
    images.createImage(`
        . # # # #
        # . # # #
        # # . # #
        # # # . #
        # # # # .
        `).showImage(0, effectSpeed)
    images.createImage(`
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        `).showImage(0, effectSpeed)
    images.createImage(`
        # # # # #
        # # # # #
        # # . # #
        # # # # #
        # # # # #
        `).showImage(0, effectSpeed)
    images.createImage(`
        # # # # #
        # . . . #
        # . . . #
        # . . . #
        # # # # #
        `).showImage(0, effectSpeed)
    images.createImage(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `).showImage(0, effectSpeed)
}
/**
 * effectSpeed is in ms
 */
let effectSpeedMax = 0
let effectSpeed = 0
let numberOfEffects = 0
let effect = 0
let sound = false
basic.clearScreen()
sound = true
effect = 0
numberOfEffects = 3
effectSpeed = 100
effectSpeedMax = 800
basic.forever(function () {
    doEffect(effect)
})
