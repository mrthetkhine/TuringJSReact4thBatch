function f1(a: any) {
  a.b(); // OK
}
function f2(a: unknown) {
  a.b();
}