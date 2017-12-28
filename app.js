window.$on = function (target, type, cb) {
    target.addEventListener(type, cb, false);
}

define(["./core", "./celsius", "./fahrenheit"], function (CORE, celsius, fahrenheit) {

CORE.addModule(celsius.id, celsius);
CORE.addModule(fahrenheit.id, fahrenheit);

celsius.init();
fahrenheit.init();

})