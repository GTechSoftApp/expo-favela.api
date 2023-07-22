"use strict";
exports.__esModule = true;
var express = require("express");
var cors = require("cors");
var routes_1 = require("./routes");
var sqlConnection_1 = require("./sql_connection/sqlConnection");
var app = express();
app.use(express.json());
app.use(routes_1["default"]);
app.use(cors());
(0, sqlConnection_1.novaBaseConnection)();
app.listen(5000, function () {
    console.log("Servidor ouvindo!");
});
