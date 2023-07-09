input.onButtonPressed(Button.A, function () {
    sound = !(sound)
})
let sound = false
basic.clearScreen()
sound = true
basic.forever(function () {
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
            basic.pause(80)
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
            basic.pause(35)
        }
    }
})
