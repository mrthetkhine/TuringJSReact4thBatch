function doSomething(f) {
    return f(1, 2, 3);
}
doSomething(function () { return console.log('Hello'); });
