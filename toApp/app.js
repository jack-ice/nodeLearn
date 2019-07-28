let express = require("express");
// 引入自定义模块
let todoController =require("./controller/todoController");




let app = express();
app.set("view engine","ejs"); // 设置视图引擎
app.use("/public",express.static("public")); // 设置公共引入文件

todoController(app)

app.listen(3000)

