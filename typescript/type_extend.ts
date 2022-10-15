type Animal ={
    name: string
}
  
type Bear = Animal &  {
  honey: boolean
}
  
const bear : Bear = {
    name : 'Bear Name',
    honey :true
}
console.log('Bear ',bear);
  