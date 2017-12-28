var sb = require("./sandbox.js");

    var id, parent, _fahrenheit, convert;

    id = "converterF";

    function init() {
        parent = document.getElementById("converter");
        _fahrenheit = parent.getElementsByClassName("fahrenheit")[0];
        convert = parent.getElementsByClassName("submit")[1];

        sb.listen({ "toFahrenheit": displayFahrenheit }, id);

        $on(convert, "click", convertToCelsius)
    }

    function displayFahrenheit(toFahrenheit) {
        _fahrenheit.value = cels;
    }

    function toCelsius(fahrenheit) {
        return ((fahrenheit - 32) * (5 / 9))
    }

    function convertToCelsius(e) {

        var temperature;

        temperature = _fahrenheit.value;


        fah = toCelsius(temperature)


        sb.notify({
            type: "toCelsius",
            data: fah
        });

        e.preventDefault();
    } 

        module.exports.id = id;
        module.exports.init = init;
        module.exports.displayFahrenheit = displayFahrenheit;
        module.exports.convertToCelsius = convertToCelsius;