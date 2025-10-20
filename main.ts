radio.onReceivedValue(function (name, value) {
    if (name == "sigleft") {
        if (value == 1) {
            basic.showIcon(IconNames.SmallHeart)
        }
    } else if (name == "sigright") {
        if (value == 1) {
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
    }
})
radio.setGroup(228)
basic.forever(function () {
	
})
