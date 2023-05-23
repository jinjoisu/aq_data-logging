input.onButtonPressed(Button.A, function () {
    kitronik_air_quality.show("Logging", 1, kitronik_air_quality.ShowAlign.Left)
    for (let index = 0; index < 25; index++) {
        kitronik_air_quality.measureData()
        kitronik_air_quality.logData()
        basic.pause(5000)
        kitronik_air_quality.clearLine(1)
        kitronik_air_quality.show("Logging Complete", 1, kitronik_air_quality.ShowAlign.Left)
        basic.pause(2000)
        kitronik_air_quality.clear()
    }
})
input.onButtonPressed(Button.AB, function () {
    kitronik_air_quality.show("Erasing memory...", 4, kitronik_air_quality.ShowAlign.Left)
    kitronik_air_quality.eraseData()
    kitronik_air_quality.clearLine(4)
    kitronik_air_quality.show("Erasing Complete!", 4, kitronik_air_quality.ShowAlign.Left)
    basic.pause(2000)
    kitronik_air_quality.clear()
})
input.onButtonPressed(Button.B, function () {
    kitronik_air_quality.sendAllData()
})
kitronik_air_quality.setDate(23, 5, 2023)
kitronik_air_quality.setTime(11, 40, 0)
kitronik_air_quality.addProjectInfo("JJ", "AQ Data Logging")
kitronik_air_quality.setupGasSensor()
kitronik_air_quality.calcBaselines()
basic.forever(function () {
    kitronik_air_quality.clear()
    kitronik_air_quality.show(kitronik_air_quality.readDate(), 7, kitronik_air_quality.ShowAlign.Left)
    kitronik_air_quality.show(kitronik_air_quality.readTime(), 8, kitronik_air_quality.ShowAlign.Left)
})
