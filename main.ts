function StopMotors () {
    pins.digitalWritePin(DigitalPin.P12, 0)
    pins.digitalWritePin(DigitalPin.P13, 0)
}
function StartMotors () {
    pins.digitalWritePin(DigitalPin.P12, 1)
    pins.digitalWritePin(DigitalPin.P13, 1)
}
radio.onReceivedValue(function (name, value) {
    if (name == "sigleft") {
        if (value == 1) {
            pins.servoWritePin(AnalogPin.P3, 45)
            basic.showIcon(IconNames.SmallHeart)
        }
    } else if (name == "sigright") {
        if (value == 1) {
            pins.servoWritePin(AnalogPin.P3, 90)
            basic.showIcon(IconNames.Heart)
        }
    } else if (name == "sigup") {
        if (value == 1) {
            basic.showIcon(IconNames.Yes)
        }
    } else if (name == "sigdown") {
        if (value == 1) {
            basic.showIcon(IconNames.TShirt)
        }
    } else if (name == "sigstart") {
        StartMotors()
    } else if (name == "sigstop") {
        StopMotors()
    }
})
radio.setGroup(228)
pins.digitalWritePin(DigitalPin.P14, 1)
pins.analogWritePin(AnalogPin.P0, 1023)
basic.forever(function () {
	
})
