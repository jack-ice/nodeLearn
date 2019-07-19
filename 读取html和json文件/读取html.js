let fs = require("fs");
let http = require("http");

let server = http.createServer((req,res)=>{
    res.writeHead(200,{"Content-type":"application/json"})
    let myRead = fs.createReadStream(__dirname+"/test.json","utf8")
    myRead.pipe(res)
});
server.listen(3001,"127.0.0.1");
console.log("读取html文件服务启动中。。。。");