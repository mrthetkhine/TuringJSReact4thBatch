function doSomething(x: string | null) {
  if (x === null) {
    // do nothing
  } else {
    console.log("Hello, " + x.toUpperCase());
  }
}
doSomething("Jhon");

function liveDangerously(x?: number | null) {

    console.log(x!.toFixed());
}
liveDangerously(12);