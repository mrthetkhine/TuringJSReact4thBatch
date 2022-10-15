const names = ["Alice", "Bob", "Eve"];
names.forEach(function (s) {
    console.log(s.toUpperCase());
 
});
function display(obj:{
    name : string,
    age? : number
})
{
    console.log('Obj ',obj);
}
display({name : "TK",age : 38});

display({name : "TK"});