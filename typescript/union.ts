type promiseStatus = "pending" | "fullfilled" | "completed";

let s: promiseStatus = "pending";
//s = "something";
console.log("Status ",s);

let data : number | string ;
data = "Hello";
data = 200;
console.log("Data ",data * 200);