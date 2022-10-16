class MyClass {
  name = "MyClass";
  /*
  getName = () => {
    return this.name;
  };
  */
 getName ()
 {
    return this.name;
 }
 method(this:MyClass,msg : string)
 {
    console.log("This ",this , ' msg ',msg);
 }
}
const c = new MyClass();
const g = c.getName;
// Prints "MyClass" instead of crashing
console.log(g());

c.method('Hello');