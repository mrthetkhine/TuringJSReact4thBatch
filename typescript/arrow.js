var MyClass = /** @class */ (function () {
    function MyClass() {
        this.name = "MyClass";
    }
    /*
    getName = () => {
      return this.name;
    };
    */
    MyClass.prototype.getName = function () {
        return this.name;
    };
    MyClass.prototype.method = function (msg) {
        console.log("This ", this, ' msg ', msg);
    };
    return MyClass;
}());
var c = new MyClass();
var g = c.getName;
// Prints "MyClass" instead of crashing
console.log(g());
c.method('Hello');
