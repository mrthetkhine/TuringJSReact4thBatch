var Stack = /** @class */ (function () {
    function Stack() {
        this.items = [];
    }
    Stack.prototype.push = function (ele) {
        this.items.push(ele);
    };
    Stack.prototype.pop = function () {
        return this.items.pop();
    };
    return Stack;
}());
var stack = new Stack();
stack.push(10);
//stack.push("20");
console.log("Pop ", stack.pop());
