const min = 500;
const max = 5000;  


basic.forever(function () {
    
    let interval = randint(min, max);

    music.playTone(Note.C, interval);

    while (true) {
        if (input.buttonIsPressed(Button.A) || input.buttonIsPressed(Button.B)) {
            break
        }
    }

    
    const start = control.millis();

    while (true) {
        if (!(input.buttonIsPressed(Button.A) || input.buttonIsPressed(Button.B))) {
            break
        }
    }

   
    const end = control.millis()
    const elapsed = end - start;

    const diff = Math.abs(interval - elapsed);

    if (diff < 700) {
        basic.showLeds(`
        . # . # .
        . # . # .
        . . . . .
        # . . . #
        . # # # .
        `)
    } else {
        basic.showLeds(`
        . # . # .
        . # . # .
        . . . . .
        . # # # .
        # . . . #`)
    }
})