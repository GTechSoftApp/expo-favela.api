"use strict";
exports.__esModule = true;
var express_1 = require("express");
var users_1 = require("./users/users");
var routes = (0, express_1.Router)();
routes.use("/", users_1["default"]);
exports["default"] = routes;
