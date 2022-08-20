let another = {
    value : 20
}
let obj = {
    some : another 
}
let clone = {...obj};
clone.some.value ++;

console.log("Clone.some.value ",clone.some.value);
console.log("Obj.some.value ",obj.some.value);
console.log("another.value ",another.value);