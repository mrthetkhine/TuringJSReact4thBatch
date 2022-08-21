const path = require("path");
let p = "src/pkg/test.js";

console.log('Basename ',path.basename(p));
console.log('path.extname ',path.extname(p));
console.log('path.dirname(p) ',path.dirname(p));
console.log('path.dirname(p) ',path.dirname(p));
console.log('path.basename(path.dirname(p)) ',path.basename(path.dirname(p)));
console.log('path.dirname(path.dirname(p)) ',path.dirname(path.dirname(p)));

console.log('path.normalize("a/b/c/../d/")',path.normalize("a/b/c/../d/"));
console.log('path.join("src", "pkg", "t.js")',path.join("src", "pkg", "t.js"));
console.log('path.resolve("t.js") ',path.resolve("path.js"));