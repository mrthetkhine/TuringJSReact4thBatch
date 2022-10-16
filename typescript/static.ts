class MyClass {
  static x = 0;
  static{
    console.log('Static block');
  }
  constructor()
  {
    MyClass.x ++;
    console.log('Constructor');
  }
  print()
    {
        console.log('x is ',MyClass.x);
    }
  static printX() {
    console.log(MyClass.x);
  }
}
console.log(MyClass.x);
MyClass.printX();

let obj = new MyClass();
obj.print();

let obj2 = new MyClass();
obj.print();
