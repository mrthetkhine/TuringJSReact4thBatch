type voidFunc = () => void;
 
const f1: voidFunc = () => {
  return true;
};
 
const f2: voidFunc = () => true;
 
const f3: voidFunc = function () {
  return true;
};

let k = f1();
//k = "someting";
console.log('F1 ',f1());
console.log('F2 ',f2());
console.log('F3 ',f3());