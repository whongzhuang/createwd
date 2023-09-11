
//express
var express = require('express');
var app = express();

//body-parser
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//允许跨域,传统写法
app.all('*', function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");//项目上线后改成页面的地址
    res.header("Access-Control-Allow-Headers", "X-Requested-With,Content-Type");
    res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
    next();
});

app.post('/login', function (req, res) {
    console.log(req.body);
    res.send('Hello World!');
});

app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
});