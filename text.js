/* let saidHello = false;

function sayHello() {
    console.log("hello world");
    saidHello = true;
}

function helloOnce() {
    if (!saidHello) sayHello();
}

helloOnce(); // hello world
helloOnce(); // nothing
helloOnce(); */
var executed = false;
var something = (function () {

    return function () {
        if (!executed) {
            executed = true;
            console.log("function call for first time");
        }
    };
})();

something(); // "do something" happens
something(); // nothing happens
