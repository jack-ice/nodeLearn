let express = require("express");
let app = express();

//配置视图引擎
app.set("view engine", "ejs");

// 让服务器识别外部样式表
 app.use("/assets",express.static("assets"))

app.get("/", function (req, res) {
    console.log(req.url);
    //res.send("这是主页")
    res.render("index",{name:"陈俊飞"})
});
app.get("/contact", function (req, res) {
    console.log(req.url);
   // res.send("联系人通讯录页面")
    res.render("contact",{name:"这里是联系页面"})
});

// 路由参数
app.get("/profile/:id", function (req, res) {
    // res.render(__dirname+"/views/profile.ejs")
    res.render("profile", {name: "hello world!"})
})

//监听端口号
app.listen(8888);

