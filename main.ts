input.onButtonPressed(Button.A, function () {
    for (let index = 0; index < 4; index++) {
        music.playTone(262, music.beat(BeatFraction.Breve))
        music.rest(music.beat(BeatFraction.Whole))
        music.playMelody("- - G E E - G - ", 120)
    }
})
