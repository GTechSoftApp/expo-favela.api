"use strict";
exports.__esModule = true;
var express = require("express");
var cors = require("cors");
var routes_1 = require("./routes");
var connecttion_1 = require("./sql_connection/connecttion");
var port = process.env.PORT || 3333;
var app = express();
app.use(express.json());
app.use(routes_1["default"]);
app.use(cors());
(0, connecttion_1.initConnection)();
app.listen(port, function () {
    console.log("Servidor on!");
});
