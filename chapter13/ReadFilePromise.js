const fs = require('fs/promises');
fs.readFile('hello.txt', 'utf8')
  //.then(data=>"File read output "+data)
  .then(data=>fs.readFile(data,'utf-8'))
  .then(finalContent=> console.log('Final Content ',finalContent))
  .catch(console.error);