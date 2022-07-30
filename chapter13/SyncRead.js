const fs = require('fs');

console.log("Before read");
try {
  const data = fs.readFileSync('hello.txt', 'utf8');
  console.log("File Data",data);
} catch (err) {
  console.error(err);
}
console.log("After read");