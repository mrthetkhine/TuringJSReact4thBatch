var isEven = function (num) { return num % 2 == 0; };
console.log("IsEven ", isEven(30));
var something = function (fun) {
    return fun;
};
console.log(something(isEven)(300));
