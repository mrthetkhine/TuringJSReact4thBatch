function doSomething(fn) {
    console.log(fn.description + " returned " + fn(6));
}
function isEven(num) {
    return num % 2 == 0;
}
//isEven.description  = "Is even check a number is even or not";
doSomething('Hello', isEven);
