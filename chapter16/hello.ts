let a = 10;

//a = "Hello";
console.log("A ",a);

let obj = {
    name : "TK",
    age : 37
};
//console.log("Obj ",obj.nmae);

let b :string | number = "hello";
//let x = b * 1;
//console.log("X ",x);

interface Human
{
    name : string;
}
interface Teacher
{
    subject: string;
}
type HumanTeacher = Human & Teacher;
let obj2 : HumanTeacher = {
    name: "TK",
    subject : "Programming"
}