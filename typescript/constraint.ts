function longest<Type extends { length: number }>(a: Type, b: Type) {
  if (a.length >= b.length) {
    return a;
  } else {
    return b;
  }
};
let max = longest([1,2,3,4],[2,3,]);
console.log("Max ",max);

let maxStr = longest("Hello","Hi");
console.log("Max Str ",maxStr);