class GoodGreeter {
  readonly name: string;
 
  constructor() {
    this.name = "hello";
  }
  err()
  {
    this.name = "Change";
  }
}