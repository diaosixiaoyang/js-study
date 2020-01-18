var express = require('express');
var url = require("url");
var http = require("http");
var https = require("https");
var redis = require('redis');
var app = express();
http.createServer(app).listen(50011);

app.get('/api/createAK', function (req, res) {



    console.log("进入方法");

    var opt = {
        path: "/mock/3288/ucgManage/ucg/event/createAK",
        host: '59.110.247.93',
        method: 'GET',
        port: 80
        // headers: {
        //     "content-type": "application/json;charset=utf-8"
        // }
    };


    var response = http.request(opt, function (resp) {
        console.log("status:" + resp.statusCode);
        // console.log('data:' + resp.data);
        resp.setEncoding('utf8'); 
        resp.on('data', function (chuck) {
            console.log('data:' + chuck);
            res.send(chuck);
        });
    });

    response.end();

});