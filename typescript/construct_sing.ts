
type SomeConstructor = {
  new (s: string): Human;
};
function fn(ctor: SomeConstructor) {
  return new ctor("hello");
}

class Human
{
    name : string;
    constructor(str:string)
    {
        this.name = str;
        console.log("Human ",str);
    }
}
let obj = fn(Human);
console.log('Obj ',obj);
//obj  = fn(Date);