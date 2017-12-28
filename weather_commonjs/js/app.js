window.$on = function (target, type, cb) {
    target.addEventListener(type, cb, false);
}

var CORE = require("./core.js"),
    celsius = require("./celsius.js"),
    fahrenheit = require("./fahrenheit.js");

CORE.addModule(celsius.id, celsius);
CORE.addModule(fahrenheit.id, fahrenheit);

celsius.init();
fahrenheit.init();