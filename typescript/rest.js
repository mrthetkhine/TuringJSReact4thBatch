function multiply(n) {
    var m = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        m[_i - 1] = arguments[_i];
    }
    return m.map(function (x) { return n * x; });
}
// 'a' gets value [10, 20, 30, 40]
var a = multiply(10, 1, 2, 3, 4);
console.log('A ', a);
