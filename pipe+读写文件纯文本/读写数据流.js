let fs = require("fs");
let http = require("http")
let myReadStream = fs.createReadStream(__dirname+'/被读写数据流.txt',"utf-8");
let myWriteStream = fs.createWriteStream(__dirname+'/写入数据流.txt');
let times=0
myReadStream.pipe(myWriteStream)
/*
myReadStream.on("data",chunk=>{

    times++
    console.log("=============================================正在写入部分数据======================================================");
   myWriteStream.write(chunk)
})
*/
let server = http.createServer((req,res)=>{
    res.writeHead(200,{"Content-type":"text/plain"})
    let readStream = fs.createReadStream(__dirname+"/写入数据流.txt","utf-8")
    readStream.pipe(res)

});
server.listen(3000,"localhost")
console.log("服务启动中......");

