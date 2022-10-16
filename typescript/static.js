var MyClass = /** @class */ (function () {
    function MyClass() {
        MyClass.x++;
        console.log('Constructor');
    }
    MyClass.prototype.print = function () {
        console.log('x is ', MyClass.x);
    };
    MyClass.printX = function () {
        console.log(MyClass.x);
    };
    MyClass.x = 0;
    (function () {
        console.log('Static block');
    })();
    return MyClass;
}());
console.log(MyClass.x);
MyClass.printX();
var obj = new MyClass();
obj.print();
var obj2 = new MyClass();
obj.print();
