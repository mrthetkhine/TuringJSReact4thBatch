function longest(a, b) {
    if (a.length >= b.length) {
        return a;
    }
    else {
        return b;
    }
}
;
var max = longest([1, 2, 3, 4], [2, 3,]);
console.log("Max ", max);
var maxStr = longest("Hello", "Hi");
console.log("Max Str ", maxStr);
