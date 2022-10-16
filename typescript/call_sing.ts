type DescribableFunction = {
  description: string;
  (someArg: number): boolean;
};
function doSomething(fn: DescribableFunction) {
  console.log(fn.description + " returned " + fn(6));
}
function isEven(num:number)
{
    return num % 2 ==0;
}
isEven.description  = "Is even check a number is even or not";
doSomething(isEven);
