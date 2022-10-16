function makeDate(timestamp: number): Date;
function makeDate(mOrTimestamp: number, d: number): Date;
function makeDate(m: number, d?: number): Date{
  console.log("Date ");
  return new Date();
}
const d1 = makeDate(12345678);
const d2 = makeDate(5, 5);
const d3 = makeDate(1,2);