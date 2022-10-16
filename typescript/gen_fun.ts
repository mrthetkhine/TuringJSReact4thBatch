function firstElement<Type>(arr: Type[]): Type | undefined {
    return arr[0];
}
let ele = firstElement<number>([1,2,3]);
console.log('Ele ',ele);

let str = firstElement(["helo","how"]);
console.log('Str ',str);

function map<Input, Output>(arr: Input[], func: (arg: Input) => Output): Output[] {
    return arr.map(func);
}
const parsed = map(["1", "2", "3"], (n) => parseInt(n));  