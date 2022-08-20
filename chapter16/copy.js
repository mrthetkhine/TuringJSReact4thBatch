const fs = require("fs");

function copyFile(source,destination,callback)
{
    let input = fs.createReadStream(source);
    let output = fs.createWriteStream(destination);

    input.on("data",(chunk)=>{
        let hasRoom = output.write(chunk);
        if(!hasRoom)
        {
            input.pause();
        }
    });
    input.on("end",()=>{
        output.end();
    });
    input.on("error",(err)=>{
        callback(err);
        process.exit();
    });
    output.on("drain",()=>{
        input.resume();
    });
    output.on("error",err=>{
        callback(err);
        process.exit();
    });
    output.on("finish",()=>{
        callback(null);
    })
}
function callBack(err)
{
    if(err)
    {
        console.log("We got error ",err);
    }
    else
    {
        console.log("File copied completed");
    }
}
copyFile('./hello.txt','./hello3.txt',callBack);