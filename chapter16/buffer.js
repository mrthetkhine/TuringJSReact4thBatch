let b = Buffer.from([0x41, 0x42, 0x43]);
console.log("buffer toString ",b.toString());
console.log("buffer toString ",b.toString("hex"));

let computer = Buffer.from("IBM3111", "ascii");
console.log(computer.subarray(0,3).map(x=>x+1).toString());

let zeros = Buffer.alloc(1024);

let dead = Buffer.alloc(1024, "DEADBEEF", "hex");
console.log("dead.readUInt32BE(0) ",dead.readUInt32BE(0));
console.log("dead.readUInt32LE(0) ",dead.readUInt32LE(0));

console.log("dead.readBigUInt64BE(0) ",dead.readBigUInt64BE(0));