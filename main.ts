input.onButtonPressed(Button.A, function () {
    A = 1
})
let A = 0
A = 0
basic.forever(function () {
    if (A == 1) {
        pins.digitalWritePin(DigitalPin.P8, 1)
        pins.digitalWritePin(DigitalPin.P0, 1)
        basic.pause(1000)
        pins.digitalWritePin(DigitalPin.P0, 0)
        pins.digitalWritePin(DigitalPin.P1, 1)
        basic.pause(1000)
        pins.digitalWritePin(DigitalPin.P1, 0)
        pins.digitalWritePin(DigitalPin.P2, 1)
        basic.pause(1000)
        pins.digitalWritePin(DigitalPin.P8, 0)
        pins.digitalWritePin(DigitalPin.P16, 1)
        basic.pause(1000)
        pins.digitalWritePin(DigitalPin.P16, 0)
        pins.digitalWritePin(DigitalPin.P8, 1)
        basic.pause(200)
        pins.digitalWritePin(DigitalPin.P8, 0)
        basic.pause(200)
        pins.digitalWritePin(DigitalPin.P8, 1)
        basic.pause(200)
        pins.digitalWritePin(DigitalPin.P8, 0)
        basic.pause(200)
        pins.digitalWritePin(DigitalPin.P8, 1)
        basic.pause(200)
        pins.digitalWritePin(DigitalPin.P8, 0)
        A = 0
        pins.digitalWritePin(DigitalPin.P2, 0)
    } else {
        pins.digitalWritePin(DigitalPin.P0, 1)
        pins.digitalWritePin(DigitalPin.P8, 1)
    }
})
