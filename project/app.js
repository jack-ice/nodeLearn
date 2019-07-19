let express = require("express");
let app = express();
//配置视图引擎
app.set("view engine", "ejs")

app.get("/", function (req, res) {
    console.log(req.url);
    res.send("这是主页")
});
app.get("/contact", function (req, res) {
    console.log(req.url);
    res.send("联系人通讯录页面")
});

// 路由参数
app.get("/profile/:id", function (req, res) {
    // res.render(__dirname+"/views/profile.ejs")
    res.render("profile", {name: "hello world!"})
})

//监听端口号
app.listen(8888);

