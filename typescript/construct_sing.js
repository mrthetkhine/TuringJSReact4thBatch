function fn(ctor) {
    return new ctor("hello");
}
var Human = /** @class */ (function () {
    function Human(str) {
        this.name = str;
        console.log("Human ", str);
    }
    return Human;
}());
var obj = fn(Human);
console.log('Obj ', obj);
