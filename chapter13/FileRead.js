const fs = require('fs');
console.log('Before file read');
fs.readFile('hello.txt', 'utf8', (err, data) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log("File name completed",data);
  fs.readFile(data,'utf-8',(err2,data2)=>{
    console.log("File content ",data2)
  })
});
console.log('After file read');