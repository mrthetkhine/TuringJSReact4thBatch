interface CallOrConstruct {
  new (s: string): Date;
  (n?: number): number;
}
function fn(ctor:DateConstructor)
{
    console.log("Ctor ",ctor);
}
fn(Date);