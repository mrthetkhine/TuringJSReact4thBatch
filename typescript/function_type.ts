type Predicate = (data:any)=>boolean

let isEven:Predicate = (num)=> num %2 == 0;
console.log("IsEven ",isEven(30));

type HigherOrder =( fun : Predicate)=>any

let something: HigherOrder  = function( fun:Predicate)
{
    return fun;
}
console.log(something(isEven)(300));