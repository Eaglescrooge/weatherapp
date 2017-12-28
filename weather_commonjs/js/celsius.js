var sb = require("./sandbox.js");
    var id, parent, _celsius, convert;

    id = "converterC";

    function init() {
        parent = document.getElementById("converter");
        _celsius = parent.getElementsByClassName("celsius")[0];
        convert = parent.getElementsByClassName("submit")[0];

        $on(convert, "click", convertToFahrenheit);

        sb.listen({ "toCelsius": displayCelsius }, id)
    }

    function displayCelsius(toCelsius) {
        _celsius.value = fah;
    }

    function toFahrenheit(celsius) {
        return ((celsius * 9 / 5) + (32))
    }

    function convertToFahrenheit(e) {
        var temperature;

        temperature = _celsius.value;



        cels = toFahrenheit(temperature)



        sb.notify({
            type: "toFahrenheit",
            data: cels
        })

        e.preventDefault();
    }

    module.exports.id = id;
    module.exports.init = init;
    module.exports.convertToFahrenheit = convertToFahrenheit;
    module.exports.displayCelsius = displayCelsius;
