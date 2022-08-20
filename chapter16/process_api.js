console.log("Argv ",process.argv);
console.log("Arch ",process.arch);
console.log("Cwd ",process.cwd());
console.log("CPU usage ",process.cpuUsage());
console.log("env ",process.env);
console.log("execPath ",process.execPath);

console.log("userid ",process.getuid());
console.log("memoryUsage ",process.memoryUsage());
process.nextTick(()=>{
    console.log("Next tick");
});
console.log("End");
console.log("resource usage ",process.resourceUsage());
console.log("version ",process.versions);