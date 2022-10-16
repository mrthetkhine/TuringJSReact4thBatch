function doSomething(f: Function) {
  return f(1, 2, 3);
}
doSomething(()=>console.log('Hello'));