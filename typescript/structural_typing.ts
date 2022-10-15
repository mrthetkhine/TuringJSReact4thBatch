type Animal= {
    name : string
};
type Human = {
    name  : string,
    age : number,
    work : ()=>any
}

let data:Animal = {
    name: "Something"
}
let another : Human = {
    name : "Another",
    age : 30,
    work : function()
    {
        console.log("Work ");
    }
}
data = another;
console.log("Data ",data);