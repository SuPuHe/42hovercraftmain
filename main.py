def StartMotors():
    pins.digital_write_pin(DigitalPin.P12, 1)
    pins.digital_write_pin(DigitalPin.P13, 1)

def StopMotors():
    pins.digital_write_pin(DigitalPin.P12, 0)
    pins.digital_write_pin(DigitalPin.P13, 0)

def on_received_value(name, value):
    if name == "sigleft":
        if value == 1:
            pins.servo_write_pin(AnalogPin.P3, 45)
            basic.show_icon(IconNames.SMALL_HEART)
    elif name == "sigright":
        if value == 1:
            pins.servo_write_pin(AnalogPin.P3, 90)
            basic.show_icon(IconNames.HEART)
    elif name == "sigup":
        if value == 1:
            basic.show_icon(IconNames.YES)
    elif name == "sigdown":
        if value == 1:
            basic.show_icon(IconNames.TSHIRT)
radio.on_received_value(on_received_value)

radio.set_group(228)
pins.digital_write_pin(DigitalPin.P14, 1)
pins.analog_write_pin(AnalogPin.P0, 1023)

def on_forever():
    pass
basic.forever(on_forever)
