class Stack<Type>
{
    items : Array<Type> = [];

    push(ele : Type)
    {
        this.items.push(ele);
    }
    pop():Type|undefined
    {
        return this.items.pop();
    }
}
let stack = new Stack<number>();
stack.push(10);
//stack.push("20");
console.log("Pop ",stack.pop());