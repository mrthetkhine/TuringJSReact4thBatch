interface Animal {
  name: string
}

interface Bear extends Animal {
  honey: boolean
}

const bear = {
    name : 'Bear Name',
    honey :'honey'
}
console.log('Bear ',bear);
