"use strict";
exports.__esModule = true;
var express = require("express");
var cors = require("cors");
var routes_1 = require("./routes");
<<<<<<< HEAD
var connecttion_1 = require("./sql_connection/connecttion");
var port = process.env.PORT || 3333;
=======
var funcao = require("firebase-functions");
var connecttion_1 = require("./sql_connection/connecttion");
>>>>>>> 24556952e0de65bfb813dcc9079454c11ddce843
var app = express();
app.use(express.json());
app.use(routes_1["default"]);
app.use(cors());
(0, connecttion_1.initConnection)();
<<<<<<< HEAD
app.listen(port, function () {
    console.log("Servidor on!");
});
=======
app.listen(3333, function () {
    console.log("Servidor on!");
});
exports.api = funcao.https.onRequest(app);
>>>>>>> 24556952e0de65bfb813dcc9079454c11ddce843
