const {EventEmitter} = require("events");
//console.log("Event emitter ",EventEmitter);

const firstEmitter = new EventEmitter();

function someTask()
{
    setTimeout(()=>{
        firstEmitter.emit("taskCompleted",{data:"Something"});
    },2000);
}
firstEmitter.on("taskCompleted",(data)=>{
    console.log("On task compelted",data);
});
console.log('Task start');
someTask();